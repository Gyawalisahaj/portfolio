import { NextRequest, NextResponse } from "next/server";
import { and, eq, gt } from "drizzle-orm";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { contactFormSchema } from "@/lib/validation";
import { sendContactNotification } from "@/lib/email";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_PER_WINDOW = 3;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { error: firstIssue?.message ?? "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, phone, message, website } = parsed.data;

  // Honeypot: bots fill hidden fields, real visitors don't. Pretend success either way
  // so we don't teach bots what tripped the trap.
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
    const recent = await db
      .select({ id: contactMessages.id })
      .from(contactMessages)
      .where(and(eq(contactMessages.email, email), gt(contactMessages.createdAt, since)));

    if (recent.length >= RATE_LIMIT_MAX_PER_WINDOW) {
      return NextResponse.json(
        { error: "You're sending messages a little fast — please try again in a few minutes." },
        { status: 429 }
      );
    }

    await db.insert(contactMessages).values({
      name,
      email,
      phone: phone || null,
      message,
    });

    // Save first, notify second — a flaky email provider should never lose a message.
    await sendContactNotification({ name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact] Failed to process submission:", error);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try emailing directly instead." },
      { status: 500 }
    );
  }
}

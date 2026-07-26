import { NextRequest, NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db"; // Changed from import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/session";

async function requireAuth(req: NextRequest) {
  return verifySessionToken(req.cookies.get(SESSION_COOKIE_NAME)?.value);
}

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  if (!(await requireAuth(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get the Drizzle D1 instance dynamically for this request
  const db = getDb();

  const messages = await db
    .select()
    .from(contactMessages)
    .orderBy(desc(contactMessages.createdAt))
    .limit(200);

  return NextResponse.json({ messages });
}

export async function PATCH(req: NextRequest) {
  if (!(await requireAuth(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as { id?: string; read?: boolean } | null;
  if (!body?.id || typeof body.read !== "boolean") {
    return NextResponse.json({ error: "id and read are required." }, { status: 400 });
  }

  // Get the Drizzle D1 instance dynamically for this request
  const db = getDb();

  await db
    .update(contactMessages)
    .set({ read: body.read })
    .where(eq(contactMessages.id, body.id));

  return NextResponse.json({ ok: true });
}
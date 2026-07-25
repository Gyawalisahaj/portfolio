import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { resumeEvents } from "@/db/schema";
import { resumeEventSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = resumeEventSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: true });
  }

  try {
    await db.insert(resumeEvents).values({ type: parsed.data.type, email: parsed.data.email || null });
  } catch (error) {
    console.error("[api/analytics/resume] Failed to record event:", error);
  }

  return NextResponse.json({ ok: true });
}

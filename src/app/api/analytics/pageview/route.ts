import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db"; // Changed from import { db } from "@/db";
import { pageViews } from "@/db/schema";
import { pageViewSchema } from "@/lib/validation";

function classifyDevice(userAgent: string | null): string {
  if (!userAgent) return "unknown";
  const ua = userAgent.toLowerCase();
  if (/ipad|tablet/.test(ua)) return "tablet";
  if (/mobi|iphone|android/.test(ua)) return "mobile";
  return "desktop";
}

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = pageViewSchema.safeParse(body);
  if (!parsed.success) {
    // Analytics beacons should never surface errors to visitors — just no-op.
    return NextResponse.json({ ok: true });
  }

  try {
    // Initialize D1 database instance per request
    const db = getDb();

    await db.insert(pageViews).values({
      path: parsed.data.path,
      referrer: parsed.data.referrer || null,
      device: classifyDevice(req.headers.get("user-agent")),
    });
  } catch (error) {
    console.error("[api/analytics/pageview] Failed to record view:", error);
  }

  // Always 200 — a dropped analytics beacon is never something a visitor should see.
  return NextResponse.json({ ok: true });
}
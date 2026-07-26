import { NextRequest, NextResponse } from "next/server";
import { sql, eq, gt, desc, isNotNull } from "drizzle-orm";
import { getDb } from "@/db";
import { pageViews, resumeEvents, contactMessages } from "@/db/schema";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/session";

const DAYS_OF_HISTORY = 14;
export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const authed = await verifySessionToken(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Initialize D1 database instance per request
  const db = getDb();

  // Keep 'since' as a Date object so it matches the column type for Drizzle comparison
  const since = new Date(Date.now() - DAYS_OF_HISTORY * 24 * 60 * 60 * 1000);

  const [
    totalViews,
    viewsByDay,
    topPaths,
    resumeCounts,
    resumeRequests,
    totalMessages,
    unreadMessages,
  ] = await Promise.all([
    db.select({ count: sql<number>`cast(count(*) as integer)` }).from(pageViews),

    db
      .select({
        day: sql<string>`strftime('%Y-%m-%d', ${pageViews.createdAt})`,
        count: sql<number>`cast(count(*) as integer)`,
      })
      .from(pageViews)
      .where(gt(pageViews.createdAt, since))
      .groupBy(sql`strftime('%Y-%m-%d', ${pageViews.createdAt})`)
      .orderBy(sql`strftime('%Y-%m-%d', ${pageViews.createdAt})`),

    db
      .select({ path: pageViews.path, count: sql<number>`cast(count(*) as integer)` })
      .from(pageViews)
      .groupBy(pageViews.path)
      .orderBy(sql`count(*) desc`)
      .limit(5),

    db
      .select({ type: resumeEvents.type, count: sql<number>`cast(count(*) as integer)` })
      .from(resumeEvents)
      .groupBy(resumeEvents.type),

    db
      .select({ email: resumeEvents.email, createdAt: resumeEvents.createdAt })
      .from(resumeEvents)
      .where(isNotNull(resumeEvents.email))
      .orderBy(desc(resumeEvents.createdAt))
      .limit(50),

    db.select({ count: sql<number>`cast(count(*) as integer)` }).from(contactMessages),

    db
      .select({ count: sql<number>`cast(count(*) as integer)` })
      .from(contactMessages)
      .where(eq(contactMessages.read, false)),
  ]);

  // Fill in zero-count days so the chart doesn't have gaps.
  const dayMap = new Map(viewsByDay.map((d) => [d.day, d.count]));
  const series: { day: string; count: number }[] = [];
  for (let i = DAYS_OF_HISTORY - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    const key = d.toISOString().slice(0, 10);
    series.push({ day: key, count: dayMap.get(key) ?? 0 });
  }

  return NextResponse.json({
    totalViews: totalViews[0]?.count ?? 0,
    viewsByDay: series,
    topPaths,
    resumeViews: resumeCounts.find((r) => r.type === "view")?.count ?? 0,
    resumeDownloads: resumeCounts.find((r) => r.type === "download")?.count ?? 0,
    resumeRequests,
    totalMessages: totalMessages[0]?.count ?? 0,
    unreadMessages: unreadMessages[0]?.count ?? 0,
  });
}
import { NextRequest, NextResponse } from "next/server";
import { checkAdminPassword } from "@/lib/password";
import { createSessionToken, SESSION_COOKIE_NAME, SESSION_MAX_AGE } from "@/lib/session";

// Small in-memory throttle for login attempts. Resets on redeploy/cold start —
// that's fine, it only needs to blunt naive brute-forcing, not survive restarts.
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 10 * 60 * 1000;

function tooManyAttempts(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (tooManyAttempts(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const password = (body as { password?: unknown })?.password;
  if (typeof password !== "string" || password.length === 0) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  try {
    const valid = await checkAdminPassword(password);
    if (!valid) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    const token = await createSessionToken();
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });
    return res;
  } catch (error) {
    console.error("[api/dashboard/login] error:", error);
    return NextResponse.json(
      { error: "Dashboard isn't configured yet — see README for ADMIN_PASSWORD_HASH_B64 setup." },
      { status: 500 }
    );
  }
}

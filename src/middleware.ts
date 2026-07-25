import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/session";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/dashboard/login") {
    return NextResponse.next();
  }

  const authed = await verifySessionToken(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!authed) {
    const loginUrl = new URL("/dashboard/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

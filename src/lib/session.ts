import { SignJWT, jwtVerify } from "jose";

// Edge-safe: no bcrypt/Node-only APIs here, so this can be imported from
// middleware.ts (which runs on the Edge runtime) as well as regular API routes.

export const SESSION_COOKIE_NAME = "portfolio_admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours, in seconds

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not set (or too short). Generate one with `openssl rand -base64 32` and add it to your env."
    );
  }
  return new TextEncoder().encode(secret);
}

/** Signs a short-lived admin session token. */
export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getSecret());
}

/** Verifies a session token. Returns true only for a valid, unexpired admin token. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.role === "admin";
  } catch {
    return false;
  }
}

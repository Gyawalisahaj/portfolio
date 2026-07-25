import bcrypt from "bcryptjs";

// Node-only (bcryptjs). Import this from API routes, never from middleware.ts.
//
// The hash is stored base64-encoded (ADMIN_PASSWORD_HASH_B64) rather than as a
// raw bcrypt string. Next.js's env loader (@next/env) expands `$var`-style
// sequences in .env files, which silently corrupts a raw bcrypt hash like
// `$2b$10$...` (bcrypt hashes are full of `$`). Base64 sidesteps that entirely.

/** Checks a submitted password against the bcrypt hash stored (base64-encoded) in env. */
export async function checkAdminPassword(password: string): Promise<boolean> {
  const encoded = process.env.ADMIN_PASSWORD_HASH_B64;
  if (!encoded) {
    throw new Error(
      "ADMIN_PASSWORD_HASH_B64 is not set. Generate one with `npm run hash-password -- \"your-password\"`."
    );
  }
  const hash = Buffer.from(encoded, "base64").toString("utf8");
  return bcrypt.compare(password, hash);
}

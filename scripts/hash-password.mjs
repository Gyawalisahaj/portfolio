#!/usr/bin/env node
// Usage: npm run hash-password -- "your-chosen-password"
// Prints a base64-encoded bcrypt hash to paste into ADMIN_PASSWORD_HASH_B64.
//
// Why base64? Next.js's env loader expands `$var` sequences in .env files,
// which corrupts a raw bcrypt hash (bcrypt hashes look like $2b$10$...).
// Base64-encoding sidesteps that entirely.

import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error('Usage: npm run hash-password -- "your-chosen-password"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
const encoded = Buffer.from(hash, "utf8").toString("base64");
console.log("\nAdd this line to .env.local:\n");
console.log(`ADMIN_PASSWORD_HASH_B64=${encoded}\n`);

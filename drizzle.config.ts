import { defineConfig } from "drizzle-kit";
import fs from "fs";

// drizzle-kit runs outside the Next.js runtime, so it doesn't read .env.local automatically.
if (fs.existsSync(".env.local")) {
  const dotenv = require("dotenv");
  dotenv.config({ path: ".env.local" });
} else if (fs.existsSync(".env")) {
  const dotenv = require("dotenv");
  dotenv.config({ path: ".env" });
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. See .env.example.");
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  strict: true,
  verbose: true,
});

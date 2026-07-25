import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

type DrizzleDb = ReturnType<typeof drizzle<typeof schema>>;

declare global {
  var __portfolioPgClient: ReturnType<typeof postgres> | undefined;
  var __portfolioDb: DrizzleDb | undefined;
}

function createDb(): DrizzleDb {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env.local and add a Postgres connection string (see README for a free option)."
    );
  }

  // Reuse the connection across hot-reloads in dev so we don't exhaust Postgres connections.
  const client =
    global.__portfolioPgClient ??
    postgres(connectionString, {
      max: process.env.NODE_ENV === "production" ? 5 : 1,
      idle_timeout: 20,
      connect_timeout: 10,
    });

  if (process.env.NODE_ENV !== "production") {
    global.__portfolioPgClient = client;
  }

  return drizzle(client, { schema });
}

// Lazy on purpose: `next build` imports every route module to collect its
// metadata, which would otherwise make a real DATABASE_URL a *build-time*
// requirement instead of just a runtime one, breaking `npm run build` for
// anyone who hasn't set up a database yet. Wrapping in a Proxy defers both
// the env check and the actual connection until the first real query
// (`db.select(...)`, `db.insert(...)`, etc.) inside a request handler.
export const db: DrizzleDb = new Proxy({} as DrizzleDb, {
  get(_target, prop, receiver) {
    if (!global.__portfolioDb) {
      global.__portfolioDb = createDb();
    }
    return Reflect.get(global.__portfolioDb as object, prop, receiver);
  },
});

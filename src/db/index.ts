import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';
import type { D1Database } from '@cloudflare/workers-types';
import * as schema from './schema';

export function getDb() {
  let dbInstance: D1Database | undefined;

  try {
    const context = getRequestContext();
    if (context?.env && 'DB' in context.env) {
      dbInstance = context.env.DB as unknown as D1Database;
    }
  } catch {
    // Context not available outside request boundaries
  }

  if (!dbInstance && typeof process !== 'undefined' && process.env?.DB) {
    dbInstance = process.env.DB as unknown as D1Database;
  }

  if (!dbInstance) {
    throw new Error('D1 Database binding "DB" is not available.');
  }

  return drizzle(dbInstance, { schema });
}

export type DB = ReturnType<typeof getDb>;
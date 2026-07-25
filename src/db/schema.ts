import { pgTable, text, boolean, timestamp, index } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

/**
 * A message submitted through the contact form.
 */
export const contactMessages = pgTable(
  "contact_messages",
  {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    message: text("message").notNull(),
    read: boolean("read").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("contact_messages_created_at_idx").on(table.createdAt)]
);

/**
 * One row per page visit. Powers the visitor analytics dashboard.
 */
export const pageViews = pgTable(
  "page_views",
  {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    path: text("path").notNull(),
    referrer: text("referrer"),
    device: text("device"), // "mobile" | "desktop" | "tablet"
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("page_views_created_at_idx").on(table.createdAt),
    index("page_views_path_idx").on(table.path),
  ]
);

/**
 * Fired when a visitor views or downloads the resume/CV.
 */
export const resumeEvents = pgTable(
  "resume_events",
  {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    type: text("type").notNull(), // "view" | "download"
    email: text("email"), // captured when a visitor unlocks the download
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("resume_events_created_at_idx").on(table.createdAt)]
);

export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;
export type PageView = typeof pageViews.$inferSelect;
export type ResumeEvent = typeof resumeEvents.$inferSelect;

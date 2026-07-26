import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

/**
 * A message submitted through the contact form.
 */
export const contactMessages = sqliteTable("contact_messages", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  read: integer("read", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

/**
 * One row per page visit. Powers the visitor analytics dashboard.
 */
export const pageViews = sqliteTable("page_views", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  path: text("path").notNull(),
  referrer: text("referrer"),
  device: text("device"), // "mobile" | "desktop" | "tablet"
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

/**
 * Fired when a visitor views or downloads the resume/CV.
 */
export const resumeEvents = sqliteTable("resume_events", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  type: text("type").notNull(), // "view" | "download"
  email: text("email"), // captured when a visitor unlocks the download
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;
export type PageView = typeof pageViews.$inferSelect;
export type ResumeEvent = typeof resumeEvents.$inferSelect;

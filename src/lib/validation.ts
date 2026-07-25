import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(5000),
  // Honeypot field: real visitors never fill this in because it's hidden from view.
  // Bots filling every field usually catch it. If it arrives non-empty, we quietly
  // accept the request (200 OK) but never write it to the database or send an email.
  website: z.string().max(200).optional().or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const pageViewSchema = z.object({
  path: z.string().trim().min(1).max(300),
  referrer: z.string().trim().max(500).optional().nullable(),
});

export const resumeEventSchema = z.object({
  type: z.enum(["view", "download"]),
  email: z.string().trim().email().max(200).optional(),
});

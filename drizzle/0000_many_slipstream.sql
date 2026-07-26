CREATE TABLE `contact_messages` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`message` text NOT NULL,
	`read` integer DEFAULT false NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `page_views` (
	`id` text PRIMARY KEY NOT NULL,
	`path` text NOT NULL,
	`referrer` text,
	`device` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `resume_events` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`email` text,
	`created_at` integer NOT NULL
);

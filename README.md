# Sahaj Gyawali — Portfolio

Personal portfolio for Sahaj Gyawali — CSIT student and data science / AI/ML
engineer based in Kathmandu, Nepal.

## What's here

- **Frontend**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind + Framer Motion
- **Backend**: Next.js Route Handlers (same app, no separate server) + Drizzle ORM + Postgres
- **Contact form**: saves to the database and emails you via Resend, with a honeypot + rate limit against spam
- **Analytics**: page views and résumé view/download tracking
- **Dashboard**: a password-protected `/dashboard` page to read contact messages and view analytics

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill it in — see below
npm run db:migrate           # creates the database tables
npm run dev                  # http://localhost:3000
```

The site will run with just `DATABASE_URL` set. The dashboard and email
alerts need a couple more variables — details below.

### 1. Database setup (required)

Any Postgres works, but the fastest free option is **[Neon](https://neon.tech)**:

1. Sign up free, create a project.
2. Copy the connection string it gives you (starts with `postgresql://`).
   Use the **pooled** connection string if Neon offers both — it's the one
   meant for serverless environments like Vercel.
3. Paste it into `.env.local` as `DATABASE_URL`.
4. Run `npm run db:migrate` to create the three tables (`contact_messages`,
   `page_views`, `resume_events`).

Supabase or Railway's free Postgres both work the same way — just swap the
connection string.

### 2. Dashboard access (required to use `/dashboard`)

The dashboard is protected by a single password (no username, no user
table — it's just for you).

```bash
openssl rand -base64 32                        # → paste as ADMIN_SESSION_SECRET
npm run hash-password -- "your-chosen-password" # → paste the printed line as-is
```

Both go in `.env.local`. Visit `/dashboard` and log in with the plain-text
password you chose (not the hash).

> The password hash is stored **base64-encoded**
> (`ADMIN_PASSWORD_HASH_B64`), not as a raw bcrypt string. This isn't
> stylistic — Next.js's env loader expands `$`-prefixed sequences in `.env`
> files, and bcrypt hashes are full of `$` (`$2b$10$...`). Left unencoded,
> Next silently mangles the hash and login breaks with no obvious error.
> The `hash-password` script handles the encoding for you either way.

### 3. Email alerts (optional)

Without this, the contact form still works and messages still save to the
database — you'll just read them in `/dashboard` instead of your inbox.

1. Sign up free at [resend.com](https://resend.com) (3,000 emails/month free).
2. Create an API key, paste it as `RESEND_API_KEY`.
3. Set `CONTACT_EMAIL_TO` to where you want alerts sent.
4. For the `from` address: Resend's shared `onboarding@resend.dev` works
   immediately with no setup. To send from your own domain, verify
   `sahajgyawali.com.np` in Resend's dashboard (a few DNS records), then set
   `CONTACT_EMAIL_FROM` to something like `Portfolio <contact@sahajgyawali.com.np>`.

## Deployment

This app now has server-side code (API routes, middleware), so it can no
longer be exported as static files — **GitHub Pages can't run it.**
[Vercel](https://vercel.com) is the natural fit (made by the Next.js team,
generous free tier, zero config):

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add every variable from `.env.local` in the Vercel project's
   **Settings → Environment Variables**.
4. Deploy.

### Moving your custom domain from GitHub Pages

You already own `sahajgyawali.com.np` and pointed it at GitHub Pages via the
`CNAME` file (now removed, since that mechanism is GitHub-Pages-specific).
To move it to Vercel instead:

1. In the Vercel project: **Settings → Domains → Add** → enter
   `sahajgyawali.com.np`.
2. Vercel shows you the DNS records to add (usually an `A` record to
   `76.76.21.21` and a `CNAME` for `www`).
3. Update those records at wherever you registered the `.com.np` domain.
4. DNS propagation can take a few hours; Vercel issues SSL automatically
   once it verifies.

Your GitHub Pages deployment will keep serving the *old* static site until
you either remove the DNS records pointing to it or disable Pages in the
repo settings — worth doing once Vercel is confirmed working, so the two
don't conflict.

## Project structure

```
src/
  app/
    api/
      contact/              POST — validates, rate-limits, saves, emails
      analytics/pageview/   POST — records a page view
      analytics/resume/     POST — records a résumé view/download
      dashboard/            login, logout, stats, messages (all protected)
    dashboard/               /dashboard and /dashboard/login pages
    layout.tsx               fonts, metadata, JSON-LD, analytics mount
    page.tsx                 the one-page site itself
  components/                 all the visual sections
  db/                         Drizzle schema + client
  lib/                        session (JWT), password (bcrypt), email, validation, fonts
  middleware.ts                guards /dashboard/*
drizzle/                       generated SQL migrations — commit these
```

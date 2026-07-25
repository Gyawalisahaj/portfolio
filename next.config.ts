import type { NextConfig } from "next";

// NOTE: this app now has API routes (`src/app/api/**`) and middleware
// (`src/middleware.ts`) for the contact form and analytics dashboard.
// `output: "export"` (static export, used for GitHub Pages) is incompatible
// with both — Next.js can't run server code as static files. Deploy this to
// a platform that runs Next.js natively (Vercel is the easiest fit and has a
// free tier). See README.md for the migration steps from GitHub Pages.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;

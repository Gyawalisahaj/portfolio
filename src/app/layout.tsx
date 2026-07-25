import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk, plexSans, plexMono } from "@/lib/fonts";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const SITE_URL = "https://sahajgyawali.com.np";
const NAME = "Sahaj Gyawali";
const TITLE = "Sahaj Gyawali — Data Science & AI/ML Engineer";
const DESCRIPTION =
  "Portfolio of Sahaj Gyawali, a CSIT student and data science & AI/ML engineer in Kathmandu, Nepal. RAG systems, applied statistics, and production ML projects.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Sahaj Gyawali",
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Nepal",
    "Kathmandu",
    "Tribhuvan University",
    "CSIT",
    "Python Developer",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${NAME} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  jobTitle: "Data Scientist & AI/ML Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tribhuvan University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  sameAs: ["https://github.com/Gyawalisahaj", "https://www.linkedin.com/in/sahajgyawali/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink min-h-screen antialiased font-body">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}

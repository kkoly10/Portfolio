import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://komlankouhiko.com";
const ogDescription =
  "Full-stack product engineering across SaaS, ecommerce, delivery operations, data/reporting, testing, and AI-assisted workflows.";

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description:
    "Full-stack software engineer building SaaS, ecommerce, delivery-operations, and data/reporting products with Next.js, React, TypeScript, Supabase/PostgreSQL, MongoDB, REST APIs, testing, and CI/CD.",
  keywords: [
    "Komlan Kouhiko",
    "Full-Stack Software Engineer",
    "Product Engineer",
    "SaaS Developer",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Playwright",
    "Anthropic",
    "OpenAI",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Paste your Google Search Console token into NEXT_PUBLIC_GOOGLE_VERIFICATION
  // (or set it here) to verify domain ownership.
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
    : undefined,
  // OG / Twitter images are provided by app/opengraph-image.tsx (file convention).
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: ogDescription,
    type: "website",
    url: "/",
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: ogDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

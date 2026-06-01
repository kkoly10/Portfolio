import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://komlankouhiko.com";
const ogDescription =
  "Production-ready SaaS products, AI/LLM workflows, dashboards, and client portals.";

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description:
    "Full-stack developer building production-ready SaaS products, AI/LLM workflows, dashboards, and client portals with Next.js, React, TypeScript, Supabase, Stripe, and Anthropic.",
  keywords: [
    "Komlan Kouhiko",
    "Full-Stack Developer",
    "SaaS Developer",
    "AI Engineer",
    "Next.js",
    "Supabase",
    "Stripe",
    "Anthropic",
    "OpenAI",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  // OG / Twitter images are provided by app/opengraph-image.tsx (file convention).
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: ogDescription,
    type: "website",
    url: "/",
    siteName: profile.name,
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

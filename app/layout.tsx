import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://komlankouhiko.com"),
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
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description:
      "Production-ready SaaS products, AI/LLM workflows, dashboards, and client portals.",
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description:
      "Production-ready SaaS products, AI/LLM workflows, dashboards, and client portals.",
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

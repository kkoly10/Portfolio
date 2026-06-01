import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.title}`;

// Social share card, rendered at build time. Warm editorial palette to match the site.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#faf8f5",
          color: "#1c1917",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 600,
            color: "#2c5282",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#10b981" }} />
          Available for SaaS &amp; AI builds
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 40, fontWeight: 600, color: "#1f3a5f", marginTop: 8 }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 28, color: "#57534e", marginTop: 32, maxWidth: 900 }}>
          Production-ready SaaS products, AI/LLM workflows, dashboards, and client portals.
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 40, fontSize: 22, color: "#78716c" }}>
          Next.js · React · TypeScript · Supabase · Stripe · Anthropic
        </div>
      </div>
    ),
    size
  );
}

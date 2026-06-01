const email = "komlankouhiko@icloud.com";

export const profile = {
  name: "Komlan Kouhiko",
  firstName: "Komlan",
  lastName: "Kouhiko",
  title: "Full-Stack Developer | AI/LLM SaaS Builder",
  // Plain job title for structured data (no pipe / branding).
  jobTitle: "Full-Stack Software Engineer",
  intro:
    "I build production-ready SaaS products, dashboards, portals, AI-assisted workflows, and business operations tools using Next.js, React, TypeScript, Supabase, Stripe, OpenAI, Anthropic, and Vercel.",
  // Longer, keyword-rich prose for crawlers and the Person schema description.
  bio: "Komlan Kouhiko is a full-stack software engineer who designs and ships production-ready SaaS products end to end — from authentication, dashboards, and Stripe billing to AI/LLM workflows built on the OpenAI and Anthropic APIs. He works primarily with Next.js, React, TypeScript, Supabase, and Vercel, and has independently built and launched five live SaaS platforms across service operations, IT support, fleet management, rentals, and web studio workflows.",
  github: "https://github.com/kkoly10",
  // Public LinkedIn profile URL (the linkedin.com/in/... form).
  linkedin: "https://www.linkedin.com/in/komlan-crecy-olympe-kouhiko-60aa85407/",
  email,
  mailto: `mailto:${email}`,
  resume: "/resume.pdf",
  photo: "/komlan.jpg",
};

// Identity graph for SEO (schema.org `sameAs`) and the footer. Only real,
// publicly resolvable profile URLs are included.
export const socials = [
  { label: "GitHub", href: profile.github },
  ...(profile.linkedin ? [{ label: "LinkedIn", href: profile.linkedin }] : []),
];

// Skills surfaced in the Person schema `knowsAbout`.
export const knowsAbout = [
  "Full-Stack Development",
  "SaaS Development",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "OpenAI API",
  "Anthropic Claude API",
  "AI/LLM Workflows",
  "Vercel",
];

// Turn a project name into a URL slug, e.g. "Kocre IT" -> "kocre-it".
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Tech shown as pills under the hero intro.
export const heroStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Stripe",
  "OpenAI",
  "Anthropic",
  "Vercel",
];

export type Project = {
  slug: string;
  name: string;
  live: string;
  github: string;
  title: string;
  description: string;
  /** Longer, indexable write-up shown on the per-project page. */
  longDescription: string;
  stack: string[];
  thumbnail: string;
};

export const projects: Project[] = [
  {
    slug: "proveo",
    name: "Proveo",
    live: "https://proveohq.com",
    github: "https://github.com/kkoly10/proveo",
    title: "AI-Integrated SaaS for Service Businesses",
    description:
      "Built a SaaS platform that helps service businesses turn before-and-after project photos into branded proof assets, leads, quotes, invoices, appointments, client workflows, Stripe billing, and AI caption workflows.",
    longDescription:
      "Proveo is a SaaS platform for service businesses that turns before-and-after project photos into branded proof assets and a full customer pipeline. I designed and built the product end to end: lead capture, quotes, invoices, appointment scheduling, and client workflows, all backed by Stripe billing and subscription management. AI caption workflows powered by the OpenAI and Anthropic APIs generate on-brand marketing copy from uploaded photos, while Cloudinary handles image storage and transformation. The stack is Next.js, React, and TypeScript on Supabase (PostgreSQL, auth, storage), deployed on Vercel.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "OpenAI",
      "Anthropic",
      "Cloudinary",
      "Vercel",
    ],
    thumbnail: "/projects/proveo.jpg",
  },
  {
    slug: "kocre-it",
    name: "Kocre IT",
    live: "https://kocreit.com",
    github: "https://github.com/kkoly10/IT-Support-E-commerce",
    title: "AI-Assisted Remote IT Support Platform",
    description:
      "Built an IT support platform with client portal, admin dashboard, support tickets, onboarding readiness, document/access tracking, suggested replies, SOP drafts, and guarded AI support workflows.",
    longDescription:
      "Kocre IT is a remote IT support platform for small businesses. I built a client-facing portal and an admin dashboard around a support-ticket system, onboarding-readiness tracking, and document/access management. Guarded AI workflows on the Anthropic Claude API draft suggested replies and standard operating procedures for support staff, with prompt guardrails that keep responses scoped and safe. Built with Next.js, React, and Supabase, deployed on Vercel.",
    stack: ["Next.js", "React", "Supabase", "Anthropic", "AI Workflows", "Vercel"],
    thumbnail: "/projects/kocreit.png",
  },
  {
    slug: "fleiko",
    name: "Fleiko",
    live: "https://fleiko.com",
    github: "https://github.com/kkoly10/Fleet-management-",
    title: "Fleet Management SaaS with AI Copilot",
    description:
      "Built a fleet operations platform for vehicles, drivers, maintenance, repairs, documents, expenses, readiness, reports, and AI Copilot-style fleet insights.",
    longDescription:
      "Fleiko is a fleet-management SaaS that gives operators a single place to run their vehicles, drivers, maintenance, and compliance. I built modules for vehicle and driver records, maintenance and repair tracking, document expiry, expense logging, readiness scoring, and reporting, with Mapbox for location features and Stripe for billing. An AI Copilot on the Anthropic API surfaces plain-language fleet insights from the operational data. Built with Next.js, React, and Supabase on Vercel.",
    stack: ["Next.js", "React", "Supabase", "Stripe", "Anthropic", "Mapbox", "Vercel"],
    thumbnail: "/projects/fleiko.jpg",
  },
  {
    slug: "korent",
    name: "Korent",
    live: "https://korent.app",
    github: "https://github.com/kkoly10/rental-software",
    title: "Rental Booking and Operations SaaS",
    description:
      "Built a rental platform with storefronts, product catalogs, availability, checkout, deposits, order management, digital waivers, delivery routing, reminders, and admin workflows.",
    longDescription:
      "Korent is a rental-booking and operations SaaS for equipment and party-rental businesses. I built customer-facing storefronts with product catalogs and real-time availability, online checkout with deposits via Stripe, digital waivers, order management, delivery routing, and automated SMS/email reminders through Twilio and Resend. An admin workflow ties scheduling, fulfillment, and customer communication together. Built with Next.js, React, and Supabase on Vercel.",
    stack: ["Next.js", "React", "Supabase", "Stripe", "Twilio", "Resend", "Vercel"],
    thumbnail: "/projects/korent.jpg",
  },
  {
    slug: "crecystudio",
    name: "CrecyStudio",
    live: "https://crecystudio.com",
    github: "https://github.com/kkoly10/website-builder",
    title: "Web Studio Platform and Client Project Workspace",
    description:
      "Built a studio platform with website intake, estimates, scope snapshots, client portal, proposals, invoices, revision tracking, previews, and launch-readiness workflows.",
    longDescription:
      "CrecyStudio is a web-studio platform and client project workspace. I built a structured intake-to-launch pipeline: project intake forms, estimates, scope snapshots, proposals, invoices, revision tracking, live previews, and launch-readiness checks, all surfaced to clients through a dedicated portal. The result replaces scattered email and spreadsheets with one workspace per engagement. Built with Next.js, React, and Supabase on Vercel.",
    stack: ["Next.js", "React", "Supabase", "Client Portal", "Vercel"],
    thumbnail: "/projects/crecystudio.png",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const whatIBuild = [
  {
    title: "SaaS MVPs",
    description:
      "End-to-end products from auth and billing to dashboards — shipped fast and built to scale.",
  },
  {
    title: "AI/LLM Workflows",
    description:
      "Assistants, suggested replies, and guarded automations powered by OpenAI and Anthropic.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Operational control panels with metrics, tables, roles, and real-time data.",
  },
  {
    title: "Client Portals",
    description:
      "Secure customer-facing portals for documents, onboarding, and account workflows.",
  },
  {
    title: "Booking & Payment Systems",
    description:
      "Availability, checkout, deposits, and Stripe billing wired into clean operations flows.",
  },
  {
    title: "Internal Business Tools",
    description:
      "Custom tooling that replaces spreadsheets and manual ops with reliable software.",
  },
];

export const techStack = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Supabase", "PostgreSQL", "API Routes", "Server Actions"],
  },
  {
    group: "SaaS",
    items: ["Stripe", "Auth", "Dashboards", "Admin Panels", "Client Portals"],
  },
  {
    group: "AI/LLM",
    items: ["OpenAI API", "Anthropic Claude API", "AI Assistants", "Prompt Guardrails"],
  },
  {
    group: "Tools",
    items: ["GitHub", "Vercel", "Cloudinary", "Resend", "Playwright", "Sentry"],
  },
];

export const profile = {
  name: "Komlan Kouhiko",
  title: "Full-Stack Developer | AI/LLM SaaS Builder",
  intro:
    "I build production-ready SaaS products, dashboards, portals, AI-assisted workflows, and business operations tools using Next.js, React, TypeScript, Supabase, Stripe, OpenAI, Anthropic, and Vercel.",
  github: "https://github.com/kkoly10",
  email: "komlankouhiko@icloud.com",
  resume: "/resume.pdf",
};

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
  name: string;
  live: string;
  github: string;
  title: string;
  description: string;
  stack: string[];
  thumbnail: string;
};

export const projects: Project[] = [
  {
    name: "Proveo",
    live: "https://proveohq.com",
    github: "https://github.com/kkoly10/proveo",
    title: "AI-Integrated SaaS for Service Businesses",
    description:
      "Built a SaaS platform that helps service businesses turn before-and-after project photos into branded proof assets, leads, quotes, invoices, appointments, client workflows, Stripe billing, and AI caption workflows.",
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
    thumbnail: "/projects/proveo.png",
  },
  {
    name: "Kocre IT",
    live: "https://kocreit.com",
    github: "https://github.com/kkoly10/IT-Support-E-commerce",
    title: "AI-Assisted Remote IT Support Platform",
    description:
      "Built an IT support platform with client portal, admin dashboard, support tickets, onboarding readiness, document/access tracking, suggested replies, SOP drafts, and guarded AI support workflows.",
    stack: ["Next.js", "React", "Supabase", "Anthropic", "AI workflows", "Vercel"],
    thumbnail: "/projects/kocreit.png",
  },
  {
    name: "Fleiko",
    live: "https://fleiko.com",
    github: "https://github.com/kkoly10/Fleet-management-",
    title: "Fleet Management SaaS with AI Copilot",
    description:
      "Built a fleet operations platform for vehicles, drivers, maintenance, repairs, documents, expenses, readiness, reports, and AI Copilot-style fleet insights.",
    stack: ["Next.js", "React", "Supabase", "Stripe", "Anthropic", "Mapbox", "Vercel"],
    thumbnail: "/projects/fleiko.png",
  },
  {
    name: "Korent",
    live: "https://korent.app",
    github: "https://github.com/kkoly10/rental-software",
    title: "Rental Booking and Operations SaaS",
    description:
      "Built a rental platform with storefronts, product catalogs, availability, checkout, deposits, order management, digital waivers, delivery routing, reminders, and admin workflows.",
    stack: ["Next.js", "React", "Supabase", "Stripe", "Twilio", "Resend", "Vercel"],
    thumbnail: "/projects/korent.png",
  },
  {
    name: "CrecyStudio",
    live: "https://crecystudio.com",
    github: "https://github.com/kkoly10/website-builder",
    title: "Web Studio Platform and Client Project Workspace",
    description:
      "Built a studio platform with website intake, estimates, scope snapshots, client portal, proposals, invoices, revision tracking, previews, and launch-readiness workflows.",
    stack: ["Next.js", "React", "Supabase", "Stripe-style workflows", "Vercel"],
    thumbnail: "/projects/crecystudio.png",
  },
];

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

const email = "komlankouhiko@icloud.com";

export const profile = {
  name: "Komlan Kouhiko",
  firstName: "Komlan",
  lastName: "Kouhiko",
  title: "Full-Stack Software Engineer | Product Engineering",
  jobTitle: "Full-Stack Software Engineer",
  intro:
    "I build SaaS, ecommerce, delivery-operations, and data/reporting products end to end — from requirements and data modeling through APIs, auth, payments, UI, testing, deployment, and production debugging.",
  bio: "Komlan Kouhiko is a full-stack software engineer with 2+ years of hands-on experience building SaaS, ecommerce, delivery-operations, and data/reporting products. His work spans Next.js, React, TypeScript, Supabase/PostgreSQL, MongoDB, REST APIs, authentication and role-based access, payments, automated testing, CI/CD, production debugging, and AI-assisted development. His regulated laboratory background adds strong QA, traceability, documentation, and data-integrity discipline.",
  github: "https://github.com/kkoly10",
  linkedin: "https://www.linkedin.com/in/komlan-crecy-olympe-kouhiko-60aa85407/",
  email,
  mailto: `mailto:${email}`,
  resume: "/resume.pdf",
  photo: "/komlan.jpg",
};

export const socials = [
  { label: "GitHub", href: profile.github },
  ...(profile.linkedin ? [{ label: "LinkedIn", href: profile.linkedin }] : []),
];

export const knowsAbout = [
  "Full-Stack Software Engineering",
  "Product Engineering",
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Authentication and Row-Level Security",
  "Stripe",
  "Playwright",
  "Vitest",
  "Sentry",
  "CI/CD",
  "Anthropic API",
  "OpenAI API",
  "Claude Code",
  "OpenAI Codex",
];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const heroStack = [
  "Next.js",
  "TypeScript",
  "Supabase/PostgreSQL",
  "REST APIs",
  "Playwright",
  "Vitest",
  "Claude Code",
  "OpenAI Codex",
];

export type Project = {
  slug: string;
  name: string;
  live: string;
  github: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  thumbnail: string;
};

export const projects: Project[] = [
  {
    slug: "korent",
    name: "Korent",
    live: "https://korent.app",
    github: "https://github.com/kkoly10/rental-software",
    title: "Multi-Tenant Event Rental SaaS",
    description:
      "Built and hardened a multi-tenant rental platform spanning storefront checkout, inventory and availability, deposits/payments, customer and order workflows, PDF documents, delivery routing, and role-based dashboards.",
    longDescription:
      "Korent is a multi-tenant event-rental operations platform. I built and hardened workflows across storefront checkout, inventory and real-time availability, deposits and payments, customer and order management, PDF documents, delivery routing, reminders, and role-based dashboards. During pre-beta hardening, I found and fixed a cross-tenant catalog isolation defect and a Stripe webhook race condition, then validated the affected workflows with automated and manual regression testing.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase/PostgreSQL",
      "Stripe",
      "Zod",
      "jsPDF",
      "Playwright",
      "Leaflet",
    ],
    thumbnail: "/projects/korent.jpg",
  },
  {
    slug: "couranr-market",
    name: "Couranr Market",
    live: "https://www.couranrmarket.com",
    github: "https://github.com/kkoly10/Couranr-market",
    title: "Ecommerce & Local Delivery Platform",
    description:
      "Built shopper, storefront, admin, delivery, and API surfaces for a direct-to-consumer commerce/local-delivery system, including checkout/payment flows, address and routing integrations, and automated test gates.",
    longDescription:
      "Couranr Market is a direct-to-consumer ecommerce and local-delivery platform. I built shopper, storefront, admin, delivery, and API surfaces, including checkout/payment flows, address and routing integrations, authentication and role-scoped data access, pricing controls, and automated test gates. AI-assisted shopping workflows are separated from authoritative money, inventory, tax, delivery-eligibility, and order-finalization logic, which remains deterministic on the server.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase/PostgreSQL",
      "Stripe",
      "Anthropic",
      "Resend",
      "Zod",
    ],
    thumbnail: "/projects/couranr-market.jpg",
  },
  {
    slug: "couranr-os",
    name: "Couranr OS",
    live: "https://www.couranr.com",
    github: "https://github.com/kkoly10/couranr-os",
    title: "Delivery Operations Platform",
    description:
      "Built multi-role delivery workflows covering request intake, immutable quote versions, payment obligations, service plans, dispatch, driver execution, tracking/proof, returns/refunds, and operations review.",
    longDescription:
      "Couranr OS is a delivery-operations platform for managing the workflow from request intake through fulfillment and review. I built multi-role flows for immutable quote versions, payment obligations, service plans, dispatch, driver execution, tracking and proof, returns/refunds, and operational review. The platform uses role-scoped data access, Supabase Row-Level Security, server-authoritative pricing, idempotency controls, migration safety, and release/test gates.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase/PostgreSQL",
      "Stripe",
      "Resend",
      "Anthropic",
      "Release/Test Gates",
    ],
    thumbnail: "/projects/couranr-os.jpg",
  },
  {
    slug: "crecy-os",
    name: "Crecy OS",
    live: "https://crecyos.com",
    github: "https://github.com/kkoly10/Property-management-",
    title: "Property Management Operating System",
    description:
      "Built a multi-role property-management platform for operators, residents, owners, and invited vendors, with portfolio/import workflows, leases, rent generation, payments, reconciliation, maintenance, and operational controls.",
    longDescription:
      "Crecy OS is a property-management operating system for operators, residents, owners, and invited vendors. I built the platform around secure multi-role access, portfolio/import workflows, document ingestion, lease activation, recurring rent generation, payment allocation, Stripe-connected payments and refunds, reconciliation, resident balances and payment history, maintenance intake, vendor workflows, audit/outbox traces, and scheduled operational workers. The system uses Supabase/PostgreSQL with strong tenant and property isolation, server-side payment controls, idempotent webhook handling, migration safety, and automated verification across application and database behavior.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase/PostgreSQL",
      "Stripe",
      "RLS",
      "Payments/Reconciliation",
      "Automated Testing",
    ],
    thumbnail: "/projects/crecyos.jpg",
  },
];

export type AdditionalProject = {
  name: string;
  live: string;
  github: string;
  description: string;
};

export const additionalProjects: AdditionalProject[] = [
  {
    name: "Proveo",
    live: "https://proveohq.com",
    github: "https://github.com/kkoly10/proveo",
    description: "AI-integrated service-business SaaS, trialed with 14 active users.",
  },
  {
    name: "Fleiko",
    live: "https://fleiko.com",
    github: "https://github.com/kkoly10/Fleet-management-",
    description: "Fleet-management SaaS with operational dashboards and an AI Copilot.",
  },
  {
    name: "Couranr.com",
    live: "https://www.couranr.com",
    github: "https://github.com/kkoly10/couranr-os",
    description: "Customer-facing same-day and business delivery experience backed by multi-role delivery operations.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const whatIBuild = [
  {
    title: "SaaS & Operations Platforms",
    description:
      "Multi-role products with auth, permissions, billing, dashboards, and operational workflows.",
  },
  {
    title: "Ecommerce & Checkout",
    description:
      "Storefront, pricing, inventory, payments, order finalization, and customer-facing flows.",
  },
  {
    title: "Delivery Operations",
    description:
      "Request intake, quoting, dispatch, driver execution, proof, tracking, and review workflows.",
  },
  {
    title: "Data & Reporting Portals",
    description:
      "Role-scoped dashboards that turn structured data into trends, visualizations, APIs, and PDFs.",
  },
  {
    title: "AI-Assisted Workflows",
    description:
      "Anthropic/OpenAI integrations with guardrails, human review, and deterministic business logic where correctness matters.",
  },
  {
    title: "Quality & Production Hardening",
    description:
      "Regression testing, test gates, monitoring, root-cause analysis, security review, and production debugging.",
  },
];

export const techStack = [
  {
    group: "Frontend & Application",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Responsive UI"],
  },
  {
    group: "Backend, Data & Auth",
    items: ["Supabase", "PostgreSQL", "MongoDB", "REST/JSON APIs", "RLS", "Auth/Roles"],
  },
  {
    group: "Quality & Delivery",
    items: ["Playwright", "Vitest", "Zod", "Sentry", "GitHub", "Vercel CI/CD"],
  },
  {
    group: "Payments & Integrations",
    items: ["Stripe", "Resend", "Google APIs", "Mapbox APIs"],
  },
  {
    group: "AI & Developer Tooling",
    items: ["Anthropic/OpenAI APIs", "Claude Code", "OpenAI Codex", "Prompt Guardrails"],
  },
];

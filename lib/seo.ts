import { profile, socials, knowsAbout, projects, type Project } from "./data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://komlankouhiko.com";

// Absolute URL helper for schema / canonical use.
export function abs(path: string): string {
  return new URL(path, siteUrl).toString();
}

// Stable @id for the Person node so other nodes can reference it.
const personId = `${siteUrl}/#person`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    givenName: profile.firstName,
    familyName: profile.lastName,
    jobTitle: profile.jobTitle,
    description: profile.bio,
    url: siteUrl,
    image: abs(profile.photo),
    email: profile.mailto,
    sameAs: socials.map((s) => s.href),
    knowsAbout,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} — Portfolio`,
    description: profile.intro,
    inLanguage: "en",
    author: { "@id": personId },
    publisher: { "@id": personId },
  };
}

// Each project is creative work authored by the person.
export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: abs(`/work/${project.slug}`),
    sameAs: [project.live, project.github],
    description: project.description,
    image: abs(project.thumbnail),
    author: { "@id": personId },
    creator: { "@id": personId },
    keywords: project.stack.join(", "),
  };
}

// Breadcrumbs for a project page: Home > Work > Project.
export function breadcrumbSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: abs("/work") },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: abs(`/work/${project.slug}`),
      },
    ],
  };
}

// ItemList of all projects, used on the home page to expose the portfolio set.
export function projectsItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured SaaS Products",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: abs(`/work/${p.slug}`),
    })),
  };
}

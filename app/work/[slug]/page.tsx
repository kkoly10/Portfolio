import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject, profile } from "@/lib/data";
import { abs, projectSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, ExternalIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  const title = `${project.name} — ${project.title} | ${profile.name}`;
  const path = `/work/${project.slug}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: project.description,
      url: path,
      type: "article",
      images: [{ url: abs(project.thumbnail), alt: `${project.name} screenshot` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [abs(project.thumbnail)],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={[projectSchema(project), breadcrumbSchema(project)]} />
      <Nav />
      <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/work" className="hover:text-ink">
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink/80">{project.name}</li>
          </ol>
        </nav>

        <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
          {project.title}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={project.live} variant="primary">
            <ExternalIcon /> Live Site
          </Button>
          <Button href={project.github} variant="secondary">
            <GitHubIcon /> GitHub
          </Button>
        </div>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface-2">
          <Image
            src={project.thumbnail}
            alt={`Screenshot of the ${project.name} ${project.title} interface`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            {project.longDescription}
          </p>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-lg font-semibold tracking-tight">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Pill key={tech}>{tech}</Pill>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link href="/work" className="text-sm text-accent-soft hover:text-accent">
            ← Back to all work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

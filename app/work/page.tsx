import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { additionalProjects, projects, profile } from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";
import { ExternalIcon, GitHubIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: `Work — Product Engineering by ${profile.name}`,
  description:
    "Selected product engineering work by Komlan Kouhiko across multi-tenant SaaS, ecommerce, delivery operations, data/reporting portals, testing, and AI-assisted workflows.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Selected Product Engineering Work
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink/60 sm:text-lg">
          Selected full-stack products spanning rental SaaS, ecommerce/local delivery,
          delivery operations, and property management.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2">
                <Image
                  src={project.thumbnail}
                  alt={`Screenshot of the ${project.name} ${project.title} interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>
                <p className="mt-1 text-sm font-medium text-accent-soft">{project.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16 border-t border-line pt-10" aria-labelledby="additional-work">
          <p className="text-xs font-medium uppercase tracking-widest text-ink/50">
            Additional portfolio
          </p>
          <h2 id="additional-work" className="mt-2 text-2xl font-semibold tracking-tight">
            More products I&apos;ve built and operated
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {additionalProjects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-line bg-surface p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-ink/55">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent"
                    >
                      <ExternalIcon className="h-3.5 w-3.5" /> Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

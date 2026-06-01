import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, profile } from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";

export const metadata: Metadata = {
  title: `Work — SaaS Products by ${profile.name}`,
  description:
    "Production SaaS platforms designed and built by Komlan Kouhiko, including AI-integrated tools, dashboards, client portals, and booking and payment systems.",
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
          Featured SaaS Products
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink/60 sm:text-lg">
          Five production SaaS platforms I&apos;ve designed and shipped end to end.
          Each one ships real authentication, billing, dashboards, and AI workflows.
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
      </main>
      <Footer />
    </>
  );
}

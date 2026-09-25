import { additionalProjects, projects } from "@/lib/data";
import { Section } from "./ui/Section";
import { ProjectCard } from "./ProjectCard";
import { ExternalIcon, GitHubIcon } from "./ui/icons";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Selected Product Engineering Work"
      subtitle="The four projects featured on my current software-engineering resume, spanning rental SaaS, ecommerce/local delivery, delivery operations, and data/reporting."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/50">
              Additional portfolio
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">
              More shipped products and client-facing work
            </h3>
          </div>
          <a
            href="/work"
            className="text-sm font-medium text-accent-soft hover:text-accent"
          >
            View full work →
          </a>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {additionalProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-line bg-surface-2 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-medium text-ink">{project.name}</h4>
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
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

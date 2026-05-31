import { projects } from "@/lib/data";
import { Section } from "./ui/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Featured SaaS Products"
      subtitle="Production SaaS platforms I've designed and shipped end-to-end — click any thumbnail to open the live site."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}

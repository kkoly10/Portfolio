"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/data";
import { Button } from "./ui/Button";
import { Pill } from "./ui/Pill";
import { GitHubIcon, ExternalIcon } from "./ui/icons";

// Polished placeholder shown until a real screenshot is dropped into /public/projects.
function ThumbPlaceholder({ name }: { name: string }) {
  return (
    <div className="glow flex h-full w-full flex-col items-center justify-center bg-surface-2 text-center">
      <div className="rounded-xl border border-dashed border-ink/15 px-5 py-4">
        <p className="text-sm font-medium text-ink/80">{name}</p>
        <p className="mt-1 text-xs text-ink/40">
          Screenshot goes here
        </p>
        <p className="mt-0.5 text-[11px] text-ink/30">
          /public/projects/{name.toLowerCase().replace(/\s+/g, "")}.png
        </p>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-24px_rgba(31,58,95,0.30)]">
      {/* Clickable thumbnail -> opens live site in a new tab */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the live ${project.name} site in a new tab`}
        className="relative block aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2"
      >
        {imgFailed ? (
          <ThumbPlaceholder name={project.name} />
        ) : (
          <Image
            src={project.thumbnail}
            alt={`Screenshot of the ${project.name} ${project.title} interface`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        )}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-ink/80 px-2.5 py-1 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
          <ExternalIcon className="h-3.5 w-3.5" /> Live
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent-soft">{project.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 pt-1">
          <Button href={project.live} variant="primary" className="px-4 py-2 text-sm">
            <ExternalIcon /> Live Site
          </Button>
          <Button href={project.github} variant="secondary" className="px-4 py-2 text-sm">
            <GitHubIcon /> GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}

import { whatIBuild } from "@/lib/data";
import { Section } from "./ui/Section";

export function WhatIBuild() {
  return (
    <Section
      id="build"
      eyebrow="Capabilities"
      title="What I Build"
      subtitle="The kinds of products and systems I ship for startups and service businesses."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whatIBuild.map((item) => (
          <div
            key={item.title}
            className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
          >
            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { techStack } from "@/lib/data";
import { Section } from "./ui/Section";
import { Pill } from "./ui/Pill";

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Toolbox"
      title="Technical Stack"
      subtitle="The technologies I reach for to build reliable, scalable products."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <div
            key={group.group}
            className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-soft">
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

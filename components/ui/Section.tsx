import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-24 ${className}`}
    >
      <Reveal className="mb-10 sm:mb-14">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-soft">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-ink/60 sm:text-lg">
            {subtitle}
          </p>
        )}
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </section>
  );
}

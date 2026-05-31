import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_0_30px_-8px_rgba(124,92,255,0.7)] hover:bg-accent-soft hover:shadow-[0_0_40px_-6px_rgba(124,92,255,0.85)]",
  secondary:
    "border border-line bg-ink-800/60 text-white hover:border-white/20 hover:bg-ink-700",
  ghost: "text-white/70 hover:text-white",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  // In-page anchors use Next's Link for smooth client-side scrolling.
  if (href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Everything else — external URLs, mailto, and file links like /resume.pdf —
  // opens in a new tab.
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
}

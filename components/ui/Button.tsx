import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_20px_-8px_rgba(31,58,95,0.5)] hover:bg-accent-soft hover:shadow-[0_10px_24px_-8px_rgba(31,58,95,0.6)]",
  secondary:
    "border border-line bg-surface text-ink hover:border-ink/20 hover:bg-surface-2",
  ghost: "text-ink/70 hover:text-ink",
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

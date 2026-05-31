import Link from "next/link";
import { profile } from "@/lib/data";
import { Button } from "./ui/Button";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#build", label: "What I Build" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-950/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button href={profile.resume} variant="secondary" className="hidden sm:inline-flex">
          Resume
        </Button>
      </nav>
    </header>
  );
}

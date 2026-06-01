import { profile, socials } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/icons";

const iconFor: Record<string, (props: { className?: string }) => JSX.Element> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink/55 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = iconFor[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on ${social.label}`}
                className="inline-flex items-center gap-1.5 rounded-md text-ink/55 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{social.label}</span>
              </a>
            );
          })}
          <a
            href={profile.mailto}
            aria-label={`Email ${profile.name}`}
            className="inline-flex items-center gap-1.5 rounded-md text-ink/55 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <MailIcon className="h-4 w-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

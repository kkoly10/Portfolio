import { profile } from "@/lib/data";
import { Button } from "./ui/Button";
import { GitHubIcon, MailIcon, DownloadIcon } from "./ui/icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <div className="card glow relative overflow-hidden p-8 text-center sm:p-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Want to review my resume or see the code behind my work?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/60 sm:text-lg">
          I&apos;m open to SaaS builds, AI integrations, and full-stack contract
          work. Let&apos;s talk.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={profile.resume} variant="primary">
            <DownloadIcon /> Download Resume
          </Button>
          <Button href={profile.github} variant="secondary">
            <GitHubIcon /> View GitHub
          </Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            <MailIcon /> Email Me
          </Button>
        </div>
      </div>
    </section>
  );
}

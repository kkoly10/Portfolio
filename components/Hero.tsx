"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, heroStack } from "@/lib/data";
import { Button } from "./ui/Button";
import { Pill } from "./ui/Pill";
import { GitHubIcon, MailIcon, DownloadIcon } from "./ui/icons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[480px]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/60 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for SaaS & AI build projects
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-accent-soft sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={profile.resume} variant="primary">
              <DownloadIcon /> View Resume
            </Button>
            <Button href={profile.github} variant="secondary">
              <GitHubIcon /> GitHub
            </Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              <MailIcon /> Email Me
            </Button>
          </div>

          {/* Stack preview */}
          <div className="mt-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/40">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {heroStack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

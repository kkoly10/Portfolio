"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, heroStack } from "@/lib/data";
import { Button } from "./ui/Button";
import { Pill } from "./ui/Pill";
import { GitHubIcon, MailIcon, DownloadIcon } from "./ui/icons";

export function Hero() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Only apply the hidden initial state after mount, so the server-rendered HTML
  // (and any no-JS browser) shows the hero immediately instead of at opacity 0.
  const animate = mounted && !reduce;
  const enter = (delay: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 20 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
      : {};

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[480px]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <motion.div className="max-w-2xl" {...enter(0)}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for SaaS & AI build projects
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-accent-soft sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={profile.resume} variant="primary">
              <DownloadIcon /> View Resume
            </Button>
            <Button href={profile.github} variant="secondary">
              <GitHubIcon /> GitHub
            </Button>
            <Button href={profile.mailto} variant="secondary">
              <MailIcon /> Email Me
            </Button>
          </div>

          {/* Stack preview */}
          <div className="mt-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-ink/55">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {heroStack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div className="order-first w-full lg:order-none lg:justify-self-end" {...enter(0.15)}>
          <div className="relative mx-auto w-44 sm:w-52 lg:mx-0 lg:w-[340px] lg:max-w-full">
            {/* Soft accent glow behind the portrait */}
            <div
              className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-surface-2 shadow-[0_20px_50px_-20px_rgba(28,25,23,0.25)]">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}, ${profile.title}`}
                fill
                priority
                sizes="(max-width: 640px) 11rem, (max-width: 1024px) 13rem, 340px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

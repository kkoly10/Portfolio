"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  className?: string;
};

// Subtle fade + rise as the element scrolls into view. The hidden initial state
// is only applied after the component mounts on the client, so the server-rendered
// HTML (and any no-JS browser) shows the content normally instead of staying at
// opacity 0. Honors reduced-motion.
export function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Until mounted (and when reduced-motion is requested), render fully visible.
  if (!mounted || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

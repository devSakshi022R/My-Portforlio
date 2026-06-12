"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Section — an editorial block. Opens with a hairline rule and a "masthead"
 * row: a monospace index number + kicker on the left, optional note on the
 * right. Keeps the magazine rhythm consistent across the whole page.
 */
export function Section({
  id,
  index,
  kicker,
  note,
  className,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-label={kicker} className={cn("scroll-mt-28 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-312 px-5 sm:px-8 lg:px-12">
        <div className="rule" />
        <div className="flex items-baseline justify-between gap-4 pt-4">
          <span className="mono-label">
            <span className="text-accent-deep">({index})</span>&nbsp;&nbsp;{kicker}
          </span>
          {note && <span className="mono-label hidden sm:inline">{note}</span>}
        </div>
        <div className="pt-10 sm:pt-14">{children}</div>
      </div>
    </section>
  );
}

/**
 * Reveal — a restrained editorial entrance (rise + fade). One spring, no glow.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

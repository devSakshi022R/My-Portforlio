"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { burst } from "@/lib/confetti";

const tickerItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Design Systems",
  "Performance",
  "Accessibility",
  "Redux",
  "Tailwind",
];

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 sm:pt-32"
    >
      <div className="mx-auto w-full max-w-312 flex-1 px-5 sm:px-8 lg:px-12">
        {/* Meta row */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between"
        >
          <span className="mono-label">
            <span className="text-accent-deep">(01)</span>&nbsp;&nbsp;Portfolio — Frontend Engineer
          </span>
          <span className="mono-label hidden sm:inline">Gurugram, IN · 2026</span>
        </motion.div>

        <div className="rule mt-4" />

        {/* Eyebrow */}
        <motion.p
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-12 font-mono text-sm text-ink-soft sm:mt-16"
        >
          Hi, I&apos;m Sakshi — I make the web feel <span className="text-accent-deep">quick</span>,
          and I&apos;ve been doing it in production since 2024.
        </motion.p>

        {/* Masthead name */}
        <motion.h1
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="display-1 mt-5 font-display font-semibold leading-[0.86] tracking-[-0.03em] text-ink"
        >
          Sakshi
          <br />
          Singh
          <button
            type="button"
            aria-label="A little celebration"
            title="go on, click me"
            onClick={(e) =>
              burst(e.clientX, e.clientY)
            }
            className="text-accent transition-transform hover:scale-125 hover:rotate-12"
          >
            .
          </button>
        </motion.h1>

        {/* Lede */}
        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-xl text-pretty text-xl leading-snug text-ink sm:text-2xl">
            I build interfaces that are{" "}
            <RotatingWord
              words={["fast", "scalable", "accessible", "hard to break"]}
              className="serif-em text-accent-deep"
            />{" "}
            — turning gnarly business logic into things people actually{" "}
            <span className="serif-em">enjoy</span> using.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Magnetic>
              <a href="#projects" className="btn-ink group">
                Selected work
                <ArrowDownRight size={18} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/pdf/sakshi_resume_v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                Résumé
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Availability + scroll cue */}
        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-12 flex items-center justify-between"
        >
          <span className="flex items-center gap-2 mono-label">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available — and replying to email
          </span>
          <span className="mono-label hidden items-center gap-1.5 sm:flex">
            Keep scrolling <ArrowDownRight size={13} />
          </span>
        </motion.div>
      </div>

      {/* Ticker masthead */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-16 overflow-hidden border-y border-line-strong py-4"
        aria-hidden="true"
      >
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                {t}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

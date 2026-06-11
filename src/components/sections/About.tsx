"use client";

import { Section, Reveal } from "@/components/ui/Section";

const facts = [
  { k: "Currently", v: "Frontend Developer, 1Lattice" },
  { k: "Based in", v: "Gurugram, India" },
  { k: "Focus", v: "Performance · Design systems · DX" },
  { k: "Education", v: "B.Tech CS — PSIT (2020–2024)" },
];

const strengths = [
  { t: "Performance-first UI", d: "Tuned for LCP, CLS & INP — interfaces that stay fast as they scale." },
  { t: "Scalable design systems", d: "Reusable component libraries and tokens that cut delivery time." },
  { t: "State orchestration", d: "Predictable data flows with Redux, custom hooks and typed contracts." },
  { t: "Accessible & SEO-ready", d: "Semantic, WCAG-minded markup that ranks and works for everyone." },
];

export function About() {
  return (
    <Section id="about" index="02" kicker="About" note="Profile">
      {/* Big editorial statement */}
      <Reveal>
        <p className="display-2 max-w-4xl font-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
          I engineer interfaces that are{" "}
          <span className="serif-em text-accent-deep">fast by design</span>, and
          built to <span className="serif-em">scale</span>.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        {/* Narrative */}
        <Reveal delay={0.05}>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              I&apos;m a frontend engineer focused on building production-grade
              applications that don&apos;t just look good — they scale flawlessly
              and stay performant under real-world load.
            </p>
            <p>
              Currently scaling interfaces at{" "}
              <span className="text-ink underline decoration-accent decoration-1 underline-offset-4">
                1Lattice
              </span>
              , where I bridge complex business logic and fluid user experiences
              through reusable systems and measurable performance gains.
            </p>
          </div>
        </Reveal>

        {/* Facts list */}
        <Reveal delay={0.1}>
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="mono-label">{f.k}</dt>
                <dd className="text-right text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Strengths — numbered editorial list */}
      <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
        {strengths.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.05} className="bg-paper">
            <div className="group h-full p-7 transition-colors hover:bg-paper-2">
              <span className="font-mono text-sm text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

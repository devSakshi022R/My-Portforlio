"use client";

import { Section, Reveal } from "@/components/ui/Section";

const facts = [
  { k: "Currently", v: "Frontend Developer, 1Lattice" },
  { k: "Based in", v: "Gurugram, India" },
  { k: "Focus", v: "Performance · Design systems · DX" },
  { k: "Education", v: "B.Tech CS — PSIT (2020–2024)" },
];

const strengths = [
  { t: "Performance-first UI", d: "I sweat the LCP, CLS & INP numbers so your users never have to wait." },
  { t: "Scalable design systems", d: "Component libraries and tokens that turn 'redo it' into 'reuse it'." },
  { t: "State orchestration", d: "Predictable data flows with Redux, custom hooks and typed contracts." },
  { t: "Accessible & SEO-ready", d: "Semantic, WCAG-minded markup that ranks well and works for everyone." },
];

const offClock = [
  { k: "Fueled by", v: "Chai, mostly" },
  { k: "Debugging soundtrack", v: "Lo-fi on loop" },
  { k: "Can talk for hours about", v: "Render performance" },
  { k: "Currently learning", v: "Three.js & WebGL" },
];

export function About() {
  return (
    <Section id="about" index="02" kicker="About" note="Profile">
      {/* Big editorial statement */}
      <Reveal>
        <p className="display-2 max-w-4xl font-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
          I engineer interfaces that are{" "}
          <span className="serif-em text-accent-deep">fast by design</span> — and
          a little <span className="serif-em">obsessive</span> about it.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        {/* Narrative */}
        <Reveal delay={0.05}>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              I&apos;m a frontend engineer who cares less about pixel-perfect
              mockups and more about the moment a page snaps into view before the
              user even blinks. Good UI should feel <span className="text-ink">effortless</span> —
              which usually means a lot of un-glamorous work happened underneath.
            </p>
            <p>
              These days I&apos;m doing that at{" "}
              <span className="text-ink underline decoration-accent decoration-1 underline-offset-4">
                1Lattice
              </span>
              , translating tangled business logic into interfaces people barely
              notice — because the best ones get out of the way and just work.
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

      {/* Off the clock — a little personality */}
      <Reveal delay={0.05}>
        <div className="mt-20">
          <p className="mono-label text-accent-deep">Off the clock</p>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {offClock.map((f) => (
              <div key={f.k} className="bg-paper p-6 transition-colors hover:bg-paper-2">
                <dt className="mono-label">{f.k}</dt>
                <dd className="mt-2 font-display text-lg font-medium tracking-tight text-ink">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}

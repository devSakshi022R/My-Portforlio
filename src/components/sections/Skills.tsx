"use client";

import { Section, Reveal } from "@/components/ui/Section";

const categories = [
  { title: "Interface", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN/UI"] },
  { title: "Logic & State", skills: ["Redux", "Zustand", "Context API", "React Hook Form", "Zod"] },
  { title: "Platform", skills: ["REST API", "SEO", "Performance", "WCAG", "Auth"] },
  { title: "Workflow", skills: ["Git", "GitHub", "NPM", "Storybook", "VS Code"] },
];

const guarantees = [
  "Performance-tuned (LCP · CLS · INP)",
  "Accessible & SEO-ready",
  "Responsive, mobile to ultra-wide",
];

export function Skills() {
  return (
    <Section id="skills" index="05" kicker="Capabilities" note="Toolkit">
      <Reveal>
        <p className="display-2 max-w-3xl font-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
          The tools I reach for{" "}
          <span className="serif-em text-accent-deep">without thinking</span>.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.05} className="bg-paper">
            <div className="h-full p-7">
              <h3 className="mono-label text-ink">{cat.title}</h3>
              <ul className="mt-5 space-y-3">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="font-display text-lg font-medium tracking-tight text-ink-soft transition-colors hover:text-accent-deep"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Guarantees */}
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-8">
          {guarantees.map((g) => (
            <span key={g} className="flex items-center gap-2.5 mono-label text-ink-soft">
              <span className="text-accent">✦</span>
              {g}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

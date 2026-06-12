"use client";

import { Section, Reveal } from "@/components/ui/Section";

const experiences = [
  {
    role: "Frontend Developer",
    company: "1Lattice",
    period: "Apr 2024 — Present",
    location: "Gurugram, India",
    current: true,
    description: [
      "Architecting scalable frontend systems with Next.js & React.",
      "Built a centralised UI design system that reduced dev cycles by 60%.",
      "Orchestrating complex state flows with Redux and custom hooks.",
      "Set high-performance, WCAG-compliant interface standards.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Redux", "Tailwind"],
  },
  {
    role: "Software Developer Intern",
    company: "1Lattice",
    period: "Feb 2024 — Apr 2024",
    location: "Gurugram, India",
    current: false,
    description: [
      "Engineered performant UI components for core products.",
      "Optimised frontend bundle size and API integration layers.",
      "Delivered rapid prototypes in an Agile environment.",
    ],
    tech: ["React.js", "Redux", "REST APIs"],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="03" kicker="Experience" note="Career to date">
      <div className="border-t border-line-strong">
        {experiences.map((exp, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <article className="group grid gap-6 border-b border-line py-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-14">
              {/* Left: meta */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {exp.current && (
                    <span className="mono-label flex items-center gap-1.5 text-accent-deep">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Current
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-2 text-ink-soft">
                  {exp.company} — {exp.location}
                </p>
                <p className="mono-label mt-1">{exp.period}</p>
              </div>

              {/* Right: detail */}
              <div>
                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3 text-ink-soft">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="mono-label text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

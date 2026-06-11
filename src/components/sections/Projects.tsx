"use client";

import { ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "@/components/ui/Section";

type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  /** Optional outbound link (live site, GitHub, case study). */
  href?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "1Lattice Core",
    category: "Enterprise Portal",
    year: "2024",
    description:
      "Led the frontend architecture for an enterprise-scale company portal, introducing a centralised design system that standardised UI and accelerated delivery across teams.",
    metrics: [
      { value: "60%", label: "Faster dev cycle" },
      { value: "1", label: "Unified design system" },
    ],
    tags: ["Next.js", "TypeScript", "Redux", "ShadCN"],
  },
  {
    index: "02",
    title: "Agent Flux",
    category: "Workflow Automation",
    year: "2024",
    description:
      "A complex, state-driven app for managing multi-step workflows with real-time feedback and automated pipeline execution.",
    metrics: [
      { value: "Real-time", label: "Pipeline feedback" },
      { value: "Multi-step", label: "Workflow engine" },
    ],
    tags: ["Redux", "Zod", "React Hook Form"],
  },
  {
    index: "03",
    title: "MediQ Analytics",
    category: "Data Visualisation",
    year: "2025",
    description:
      "Transformed raw medical datasets into interactive Sunburst and Marimekko charts, enabling data-driven clinical decisions.",
    metrics: [
      { value: "2+", label: "Chart systems" },
      { value: "Interactive", label: "Drill-down views" },
    ],
    tags: ["D3.js", "Analytics", "Next.js"],
  },
  {
    index: "04",
    title: "Respondent Portal",
    category: "Auth Platform",
    year: "2025",
    description:
      "High-traffic authentication and authorisation flows for global research participants, with robust CORS and session management.",
    metrics: [
      { value: "Global", label: "Participant reach" },
      { value: "Secure", label: "Session handling" },
    ],
    tags: ["Auth", "REST API", "React"],
  },
];

function Row({ p }: { p: Project }) {
  const external = p.href?.startsWith("http");

  return (
    <article className="group relative border-b border-line transition-colors hover:bg-paper-2">
      {p.href && (
        <a
          href={p.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="absolute inset-0 z-10"
          aria-label={`${p.title} — ${p.category}`}
        />
      )}

      {/* Headline row */}
      <div className="flex items-center gap-5 py-7 sm:gap-8">
        <span className="font-mono text-sm text-ink-faint">{p.index}</span>
        <h3 className="flex-1 font-display text-3xl font-medium leading-none tracking-tight text-ink transition-colors group-hover:text-accent-deep sm:text-5xl">
          {p.title}
        </h3>
        <span className="mono-label hidden shrink-0 sm:block">{p.category}</span>
        <span className="mono-label hidden shrink-0 md:block">{p.year}</span>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Expanding detail — open on mobile, hover/focus-reveal on desktop */}
      <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-within:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="grid gap-6 pb-9 md:grid-cols-[1.5fr_1fr] md:gap-12">
            <p className="max-w-xl leading-relaxed text-ink-soft">{p.description}</p>
            <div>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl font-medium tracking-tight text-ink">
                      {m.value}
                    </p>
                    <p className="mono-label mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {p.tags.map((t) => (
                  <span key={t} className="mono-label text-ink-soft">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="04" kicker="Selected Work" note="Index">
      <Reveal>
        <p className="display-2 max-w-3xl font-display font-medium leading-[0.98] tracking-[-0.02em] text-ink">
          Projects with <span className="serif-em text-accent-deep">real impact</span>.
        </p>
        <p className="mt-6 max-w-md text-lg text-ink-soft">
          Production-grade applications built at scale, with measurable business
          outcomes. Hover a row to read the case.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-line-strong">
        {projects.map((p) => (
          <Row key={p.index} p={p} />
        ))}
      </div>
    </Section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "@/components/ui/Section";

/** Live clock in Sakshi's timezone — a small "there's a real human here" touch. */
function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="mono-label tabular-nums text-ink-soft">
      {time ? `${time} in Gurugram` : " "}
    </span>
  );
}

const channels = [
  { label: "Email", value: "sakshi915128@gmail.com", href: "mailto:sakshi915128@gmail.com" },
  { label: "Phone", value: "+91 83037 86753", href: "tel:+918303786753" },
  { label: "LinkedIn", value: "in/sakshi-singh-frontend", href: "https://linkedin.com/in/sakshi-singh-frontend" },
  { label: "GitHub", value: "devSakshi022R", href: "https://github.com/devSakshi022R" },
];

export function Contact() {
  return (
    <Section id="contact" index="06" kicker="Contact" note="Let's talk">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="mono-label flex items-center gap-2 text-accent-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for new work
          </p>
          <span className="hidden text-ink-faint sm:inline">·</span>
          <LocalTime />
        </div>
        <h2 className="display-1 mt-6 font-display font-semibold leading-[0.86] tracking-[-0.03em] text-ink">
          Let&apos;s build
          <br />
          something <span className="serif-em text-accent-deep">remarkable</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Got something you&apos;re building — or just an idea that won&apos;t
            leave you alone? Send it my way. I read every message and usually
            reply within a day (often before my chai goes cold).
          </p>
          <a
            href="mailto:sakshi915128@gmail.com"
            className="mt-8 inline-flex items-baseline gap-3 font-display text-2xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            <span className="link-underline">sakshi915128@gmail.com</span>
            <ArrowUpRight className="shrink-0 text-accent" size={28} />
          </a>
        </Reveal>

        {/* Channels */}
        <Reveal delay={0.08}>
          <dl className="border-t border-line-strong">
            {channels.map((c) => {
              const external = c.href.startsWith("http");
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-5"
                >
                  <dt className="mono-label">{c.label}</dt>
                  <dd className="flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent-deep">
                    {c.value}
                    <ArrowUpRight size={15} className="text-ink-faint transition-colors group-hover:text-accent" />
                  </dd>
                </a>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sakshi-singh-frontend" },
    { label: "GitHub", href: "https://github.com/devSakshi022R" },
  ];

  return (
    <footer aria-label="Footer" className="mx-auto w-full max-w-312 px-5 pb-12 sm:px-8 lg:px-12">
      <div className="rule" />
      <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#" className="font-display text-2xl font-semibold tracking-tight text-ink">
            Sakshi Singh<span className="text-accent">.</span>
          </a>
          {/* <p className="marginalia mt-3 max-w-xs leading-relaxed">
            Typeset in Space Grotesk &amp; Instrument Serif. Built with Next.js,
            React &amp; Tailwind. © {new Date().getFullYear()} — all rights reserved.
          </p> */}
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Footer">
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="link-underline text-sm text-ink-soft hover:text-ink"
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

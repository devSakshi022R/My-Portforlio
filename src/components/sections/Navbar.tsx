"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { num: "01", name: "About", href: "#about" },
  { num: "02", name: "Experience", href: "#experience" },
  { num: "03", name: "Work", href: "#projects" },
  { num: "04", name: "Skills", href: "#skills" },
  { num: "05", name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-312 items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Wordmark */}
        <a href="#" className="group flex items-baseline gap-2.5" aria-label="Sakshi Singh — top">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Sakshi Singh
          </span>
          <span className="mono-label hidden sm:inline">©2026</span>
        </a>

        {/* Numbered index — desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.name}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-baseline gap-1.5 text-sm"
              >
                <span className="font-mono text-[0.65rem] text-ink-faint">{l.num}</span>
                <span
                  className={cn(
                    "link-underline font-medium transition-colors",
                    isActive ? "text-accent-deep" : "text-ink hover:text-accent-deep"
                  )}
                >
                  {l.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="m-menu"
        >
          <span className="mono-label">{open ? "Close" : "Index"}</span>
          <span className="flex h-4 w-5 flex-col justify-center gap-1.25">
            <span className={cn("h-px w-full bg-ink transition-transform", open && "translate-y-0.75 rotate-45")} />
            <span className={cn("h-px w-full bg-ink transition-transform", open && "-translate-y-0.75 -rotate-45")} />
          </span>
        </button>
      </div>
      <div className={cn("rule mx-auto max-w-312 transition-opacity", scrolled ? "opacity-100" : "opacity-0")} />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="m-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-14.25 bg-paper md:hidden"
          >
            <nav className="flex flex-col px-5 pt-6" aria-label="Sections">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-baseline gap-4 border-b border-line py-5"
                >
                  <span className="font-mono text-sm text-ink-faint">{l.num}</span>
                  <span className="font-display text-3xl font-medium tracking-tight text-ink">
                    {l.name}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const strengths = [
    "Performance optimization & SEO-friendly UI engineering",
    "State management mastery with Redux & Zustand",
    "REST API integration with auth & authorization workflows",
    "Building scalable, centralized UI component libraries",
    "WCAG Accessibility and cross-browser compatibility",
    "Data-driven dashboards with advanced chart visualizations",
];

export function About() {
    return (
        <section id="about" className="py-24 sm:py-32 relative overflow-hidden" aria-label="About section">
            {/* Subtle glow */}
            <div className="absolute -top-40 right-0 w-80 h-80 glow-blue opacity-30 rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue-light text-xs font-bold uppercase tracking-wider mb-6">
                            About Me
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6 leading-tight">
                            Crafting <span className="text-gradient">product-grade</span> experiences, one component at a time.
                        </h2>
                        <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                            <p>
                                I&apos;m a <span className="font-semibold text-foreground">Frontend Engineer with 1.6+ years</span> of experience building scalable, production-grade web applications using React.js and Next.js.
                            </p>
                            <p>
                                Currently working at <span className="font-semibold text-foreground">1Lattice in Gurugram</span>, I focus on high-performance user interfaces, centralized design systems, and data-driven dashboards. I specialize in translating complex business requirements into <span className="font-semibold text-foreground">clean, maintainable, and reusable frontend architecture.</span>
                            </p>
                            <p>
                                I believe great frontend engineering is not just about UI — it&apos;s about <span className="font-semibold text-foreground">architecture, scalability, and user experience.</span>
                            </p>
                        </div>

                        {/* Education chip */}
                        <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 glass border border-border rounded-2xl">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                B.Sc
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">Pranveer Singh Institute of Technology</p>
                                <p className="text-xs text-muted-foreground">B.Sc. Computer Science · 2020–2024 · CGPA: 7.8</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Strengths card */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="glass border border-border rounded-3xl p-8 sm:p-10"
                    >
                        <h3 className="text-lg font-bold mb-8 text-foreground/70 uppercase tracking-wider text-sm">
                            What I Specialize In
                        </h3>
                        <ul className="space-y-5">
                            {strengths.map((strength, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.05 * i }}
                                    className="flex items-start gap-3.5"
                                >
                                    <CheckCircle2 size={20} className="text-accent-purple-light flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground/85 font-medium text-sm sm:text-base">{strength}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, MapPin, Sparkles } from "lucide-react";

const strengths = [
    "Performance-First UI Engineering",
    "Scalable Component Systems",
    "Advanced State Orchestration",
    "SEO & Accessibility Specialist",
    "Data-Driven Dashboards",
    "Full-Spectrum React Hooks",
];

export function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden" aria-label="About section">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-12"
                        >
                            <Sparkles size={12} />
                            The Architect
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-[0.85]">
                            Design <br />
                            <span className="text-muted-foreground">Driven by</span> <br />
                            Performance
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground font-medium max-w-xl">
                            <p>
                                I&apos;m a <span className="text-foreground font-bold">Frontend Engineer</span> with a passion for building
                                high-performance, production-grade applications that don&apos;t just look good but scale
                                flawlessly.
                            </p>
                            <p>
                                Currently scaling interfaces at <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">1Lattice</span>,
                                where I bridge the gap between complex
                                business logic and fluid user experiences.
                            </p>
                        </div>

                        {/* Education card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-16 p-8 glass-card rounded-[2.5rem] flex items-center gap-6 group border-border/50 max-w-md"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                <GraduationCap size={32} />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Academic background</p>
                                <p className="text-sm font-black uppercase tracking-tight">PSIT Computer Science</p>
                                <p className="text-xs text-muted-foreground font-bold mt-1 tracking-widest uppercase">Class of 2024</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Strengths Grid */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {strengths.map((strength, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 glass-card rounded-[2rem] border-primary/5 hover:border-primary/20 flex flex-col justify-between"
                                >
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-widest leading-relaxed">
                                        {strength}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Decorative Background Blob */}
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}


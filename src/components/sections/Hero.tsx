"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, MapPin } from "lucide-react";

const stats = [
    { value: "1.6+", label: "Years Experience" },
    { value: "60%", label: "Dev Efficiency Gained" },
    { value: "4+", label: "Prod Apps Shipped" },
    { value: "10+", label: "Tech Stack" },
];

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            aria-label="Hero section"
        >
            {/* Background grid */}
            <div className="absolute inset-0 grid-pattern opacity-40" />

            {/* Glow blobs */}
            <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] glow-purple opacity-60 rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-32 w-[450px] h-[450px] glow-blue opacity-50 rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-purple/30 text-sm font-medium text-accent-purple-light mb-8"
                >
                    <Sparkles size={14} className="text-accent-purple-light" />
                    <MapPin size={13} className="opacity-70" />
                    <span>Frontend Engineer · Gurugram, India</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto"
                >
                    Building{" "}
                    <span className="text-gradient">scalable, high-performance</span>
                    <br className="hidden sm:block" />
                    {" "}web apps with React & Next.js
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I design and develop{" "}
                    <span className="font-semibold text-foreground">responsive, accessible, SEO-optimized</span>{" "}
                    web applications with a strong focus on <span className="font-semibold text-foreground">performance, architecture, and reusable UI systems.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <a
                        id="hero-view-work"
                        href="#projects"
                        className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white text-base font-bold rounded-2xl shadow-2xl shadow-accent-purple/40 hover:shadow-accent-purple/60 hover:scale-[1.03] transition-all duration-300"
                    >
                        View My Work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        id="hero-download-resume"
                        href="/pdf/FrontendResume.pdf"
                        className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 glass border border-border text-base font-bold rounded-2xl hover:border-accent-purple/50 hover:bg-accent-purple/5 transition-all duration-300"
                    >
                        <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-px glass border border-border rounded-3xl overflow-hidden max-w-3xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center py-6 px-4 hover:bg-muted/30 transition-colors"
                        >
                            <span className="text-3xl font-black text-gradient">{stat.value}</span>
                            <span className="text-xs font-medium text-muted-foreground mt-1 text-center">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles, Zap, Globe } from "lucide-react";
import { useRef } from "react";

const stats = [
    { value: "2+", label: "Years Exp" },
    { value: "4+", label: "Prod Apps" },
    { value: "10+", label: "Tech Stack" },
];

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20"
            aria-label="Hero section"
        >
            {/* Fine grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            {/* Soft glow orbs — blur-only, no solid shapes */}
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-5%] right-[5%] w-[450px] h-[450px] rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />
            <div className="absolute top-[40%] left-[55%] w-[300px] h-[300px] rounded-full bg-tertiary/8 blur-[120px] pointer-events-none" />

            {/* Animated ring accent */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5 pointer-events-none hidden lg:block"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-secondary/5 pointer-events-none hidden lg:block"
            />

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
            >
                <div className="flex flex-col items-center text-center">
                    {/* Creative Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="group relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full glass border border-primary/20 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12 hover:border-primary/50 transition-colors cursor-default text-center"
                    >
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new projects
                        <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform blur-sm" />
                    </motion.div>

                    {/* Main Title */}
                    <div className="relative mb-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute -top-12 -left-12 lg:-left-20 hidden md:flex flex-col items-center opacity-40 select-none animate-float"
                        >
                            <Globe size={40} className="text-secondary mb-2" />
                            <div className="w-px h-20 bg-gradient-to-b from-secondary to-transparent" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-bold tracking-tight leading-[1] uppercase text-glow mb-6"
                        >
                            Sakshi Singh
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="max-w-xl mx-auto mb-16 relative"
                        >
                            <p className="text-[11px] md:text-sm lg:text-base tracking-[0.2em] font-bold uppercase text-orange-400 drop-shadow-md leading-relaxed">
                                Frontend Developer <span className="text-muted-foreground/80">focused on performance, scalability & clean UI systems</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute -bottom-8 -right-12 hidden md:flex flex-col items-center opacity-40 select-none"
                        >
                            <div className="w-px h-20 bg-gradient-to-t from-tertiary to-transparent mb-2" />
                            <Zap size={32} className="text-tertiary" />
                        </motion.div>
                    </div>



                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <a
                            href="#projects"
                            className="btn-glow group relative px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden hover:scale-105 transition-transform"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Case Studies
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="/pdf/s_resume.pdf"
                            className="btn-glow px-8 py-5 glass-card rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:border-foreground/20"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-32 mb-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto border-t border-border/50 pt-12"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-1">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-16 hidden lg:flex flex-col items-center gap-4 opacity-50 w-full col-span-3 justify-center"
                >
                    <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                </motion.div>
            </motion.div>
        </section>
    );
}

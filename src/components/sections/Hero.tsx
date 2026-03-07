"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles, Zap, Globe } from "lucide-react";
import { useRef } from "react";

const stats = [
    { value: "1.6+", label: "Years Exp" },
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
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 bg-mesh"
            aria-label="Hero section"
        >
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none"
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
                        className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-xs font-black uppercase tracking-[0.2em] text-primary mb-12 hover:border-primary/50 transition-colors cursor-default"
                    >
                        <span className="relative flex h-2 w-2">
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
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase"
                        >
                            Engineering <br />
                            <span className="text-gradient inline-block mt-2">Digital Focus</span>
                        </motion.h1>

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

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-2xl mx-auto mb-16 relative"
                    >
                        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                            Crafting high-performance web experiences where
                            <span className="text-foreground font-bold"> Art </span>
                            meets
                            <span className="text-foreground font-bold"> Precision Engineering.</span>
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <a
                            href="#projects"
                            className="group relative px-10 py-5 bg-foreground text-background font-black uppercase tracking-widest text-sm rounded-full overflow-hidden hover:scale-105 transition-transform"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 flex items-center gap-2">
                                Explorer Case Studies
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="/pdf/FrontendResume.pdf"
                            className="px-8 py-5 glass-card rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:border-foreground/20"
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
                    className="mt-32 grid grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-border/50 pt-12"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-1">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 opacity-50"
            >
                <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
            </motion.div>
        </section>
    );
}

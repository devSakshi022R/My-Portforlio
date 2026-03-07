"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Globe, Zap, ShieldCheck } from "lucide-react";

const skillCategories = [
    {
        icon: <Layout className="text-secondary" size={24} />,
        title: "Interface",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN/UI"],
    },
    {
        icon: <Cpu className="text-primary" size={24} />,
        title: "Logic",
        skills: ["Redux", "Zustand", "Context API", "React Hook Form", "Zod"],
    },
    {
        icon: <Globe className="text-tertiary" size={24} />,
        title: "Platform",
        skills: ["REST API", "SEO", "Performance", "WCAG", "Auth"],
    },
    {
        icon: <Terminal className="text-foreground" size={24} />,
        title: "Workflow",
        skills: ["Git", "GitHub", "NPM", "Storybook", "VS Code"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-32 relative" aria-label="Skills section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left Sticky Header */}
                    <div className="md:sticky md:top-32 w-full md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6"
                        >
                            Capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-black tracking-tighter uppercase mb-6 leading-[0.9]"
                        >
                            Technical <br />
                            <span className="text-muted-foreground">Ecosystem</span>
                        </motion.h2>
                        <p className="text-muted-foreground font-medium leading-relaxed max-w-sm">
                            A specialized toolkit tailored for high-performance frontend engineering and scalable architecture.
                        </p>
                    </div>

                    {/* Right Scrollable Content */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-[2rem] p-8"
                            >
                                <div className="mb-6 p-4 bg-muted/50 rounded-2xl w-fit">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-background border border-border group-hover:border-primary transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Performance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 glass flex flex-wrap items-center justify-between gap-8 p-10 rounded-[3rem] border border-primary/10"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="font-black uppercase tracking-widest text-sm italic">Ultra Fast</p>
                            <p className="text-xs text-muted-foreground font-bold">Optimized for LCP, CLS & FCP</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-border" />
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="font-black uppercase tracking-widest text-sm italic">SEO Grade A</p>
                            <p className="text-xs text-muted-foreground font-bold">Semantic HTML & WCAG Compliant</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-border" />
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                            <Globe size={24} />
                        </div>
                        <div>
                            <p className="font-black uppercase tracking-widest text-sm italic">Global Ready</p>
                            <p className="text-xs text-muted-foreground font-bold">Responsive across all viewports</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


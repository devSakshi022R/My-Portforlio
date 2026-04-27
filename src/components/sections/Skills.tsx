"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Globe, Zap, ShieldCheck } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";

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
        <section id="skills" className="py-32 relative overflow-hidden" aria-label="Skills section">
            {/* Background Code Snippet */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.25] select-none -z-10 flex items-center justify-center overflow-hidden">
                <div className="p-6 font-mono text-[14px] md:text-[16px] leading-relaxed w-full max-w-4xl flex items-start gap-4">
                    <div className="flex flex-col text-right pr-4 opacity-50 text-gray-600">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                        <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                        <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span>
                    </div>
                    <div className="flex flex-col text-[#a6acb9]">
                        <div><span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">html</span> <span className="text-[#27c93f]">lang</span><span className="text-[#22d3ee]">="en"</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">head</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">meta</span> <span className="text-[#27c93f]">name</span><span className="text-[#22d3ee]">="viewport"</span> <span className="text-[#27c93f]">content</span><span className="text-[#22d3ee]">="width=device-width, initial-scale=1.0"</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">title</span><span className="text-gray-600">&gt;</span>What do I do<span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">title</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;<span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">head</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">body</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">h1</span><span className="text-gray-600">&gt;</span>Things I do to get a perfect background image<span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">h1</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">p</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maybe I should stop tinkering with VSCode settings</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;just to take a screenshot of this dummy html code.</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">p</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;</span><span className="text-[#f472b6]">span</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oops, Almost forgot to say "Hello World!"!</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">span</span><span className="text-gray-600">&gt;</span></div>
                        <div>&nbsp;&nbsp;<span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">body</span><span className="text-gray-600">&gt;</span></div>
                        <div><span className="text-gray-600">&lt;/</span><span className="text-[#f472b6]">html</span><span className="text-gray-600">&gt;</span></div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left Sticky Header */}
                    <div className="md:sticky md:top-32 w-full md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6"
                        >
                            Capabilities
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]"
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
                            >
                                <Card3D className="h-full">
                                    <div className="glass-card rounded-[2rem] p-6 md:p-8 h-full">
                                        <div className="mb-6 p-3 md:p-4 bg-muted/50 rounded-2xl w-fit">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-widest mb-6">
                                            {category.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-background border border-border group-hover:border-primary transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Card3D>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Performance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 glass flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-6 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-primary/10"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <Zap size={24} className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="font-bold uppercase tracking-widest text-xs md:text-sm italic">Ultra Fast</p>
                            <p className="text-[10px] md:text-xs text-muted-foreground font-bold">Optimized for LCP, CLS & FCP</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-border" />
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                            <ShieldCheck size={24} className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="font-bold uppercase tracking-widest text-xs md:text-sm italic">SEO Grade A</p>
                            <p className="text-[10px] md:text-xs text-muted-foreground font-bold">Semantic HTML & WCAG Compliant</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-border" />
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                            <Globe size={24} className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="font-bold uppercase tracking-widest text-xs md:text-sm italic">Global Ready</p>
                            <p className="text-[10px] md:text-xs text-muted-foreground font-bold">Responsive across all viewports</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


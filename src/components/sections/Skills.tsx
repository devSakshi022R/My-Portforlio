"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        emoji: "⚛️",
        title: "Frontend & Frameworks",
        color: "from-violet-500/10 to-purple-500/5 border-violet-500/20",
        headerColor: "text-violet-400",
        skills: [
            "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
            "HTML5", "CSS3", "Tailwind CSS", "ShadCN/UI",
            "Bootstrap", "MUI", "Ant Design",
        ],
    },
    {
        emoji: "🔄",
        title: "State Management & Forms",
        color: "from-blue-500/10 to-cyan-500/5 border-blue-500/20",
        headerColor: "text-blue-400",
        skills: [
            "Redux", "Zustand", "React Hook Form", "Zod",
            "Custom React Hooks", "Context API",
        ],
    },
    {
        emoji: "🌐",
        title: "API & Architecture",
        color: "from-cyan-500/10 to-teal-500/5 border-cyan-500/20",
        headerColor: "text-cyan-400",
        skills: [
            "REST API Integration", "Authentication & CORS",
            "Client-Side Rendering", "Performance Optimization",
            "SEO Friendly UI", "WCAG Accessibility",
        ],
    },
    {
        emoji: "🛠️",
        title: "Tools & Build",
        color: "from-orange-500/10 to-yellow-500/5 border-orange-500/20",
        headerColor: "text-orange-400",
        skills: [
            "Git", "GitHub", "NPM", "Yarn", "Storybook",
            "VS Code", "Chrome DevTools", "GitHub Copilot", "Cursor AI",
        ],
    },
];

const focuses = [
    { icon: "🏗️", label: "Scalable Frontend Architecture" },
    { icon: "⚡", label: "Performance Optimization" },
    { icon: "🎨", label: "Clean & Reusable UI Systems" },
    { icon: "♿", label: "Accessibility & SEO" },
    { icon: "🚀", label: "Production-Grade Code Quality" },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 sm:py-32 relative overflow-hidden" aria-label="Skills section">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-blue opacity-10 rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs font-bold uppercase tracking-wider mb-6">
                        Technical Stack
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">What I Work With</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A curated toolkit built through real-world production experience.
                    </p>
                </div>

                {/* Skill categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`glass border bg-gradient-to-br ${category.color} rounded-3xl p-6`}
                        >
                            <div className="text-2xl mb-3">{category.emoji}</div>
                            <h3 className={`font-black text-sm uppercase tracking-wider mb-5 ${category.headerColor}`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="skill-badge text-xs font-semibold px-3 py-1.5 rounded-lg bg-background/50 border border-border text-foreground/80 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Focus areas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass border border-border rounded-3xl p-8 sm:p-10"
                >
                    <h3 className="text-center text-sm font-black uppercase tracking-widest text-muted-foreground mb-8">
                        Core Focus Areas
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {focuses.map((f, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-muted/50 transition-colors group"
                            >
                                <span className="text-3xl group-hover:scale-110 transition-transform">{f.icon}</span>
                                <span className="text-xs font-semibold text-muted-foreground leading-snug">{f.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

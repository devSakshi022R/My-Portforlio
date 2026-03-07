"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, Sparkles } from "lucide-react";

const experiences = [
    {
        role: "Frontend Developer",
        company: "1Lattice",
        period: "Sept 2024 – Present",
        location: "Gurugram, India",
        badge: "Active",
        description: [
            "Architecting scalable frontend systems using 1Next.js & React.",
            "Established a centralized UI Design System reducing dev-cycle by 60%.",
            "Orchestrating complex state flows with Redux & custom hooks.",
            "Pioneering high-performance, WCAG-compliant interface standards."
        ],
        tech: ["Next.js", "React", "TypeScript", "Redux", "Tailwind"],
    },
    {
        role: "Software Developer Intern",
        company: "1Lattice",
        period: "July 2024 – Sept 2024",
        location: "Gurugram, India",
        description: [
            "Engineered performant UI components for core products.",
            "Optimized frontend bundle size and API integration layers.",
            "Executed rapid prototyping in an Agile environment."
        ],
        tech: ["React.js", "Redux", "REST APIs"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-32 relative" aria-label="Experience section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-20">
                    {/* Sticky Sidebar */}
                    <div className="md:sticky md:top-32 h-fit w-full md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6"
                        >
                            History
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-black tracking-tighter uppercase mb-6 leading-[0.9]"
                        >
                            Career <br />
                            <span className="text-muted-foreground">Journey</span>
                        </motion.h2>
                        <p className="text-muted-foreground font-medium leading-relaxed">
                            A track record of delivering enterprise-grade solutions and scalable architectures.
                        </p>
                    </div>

                    {/* Timeline Content */}
                    <div className="w-full md:w-2/3 space-y-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] top-2 h-[11px] w-[11px] rounded-full bg-background border-2 border-primary shadow-[0_0_10px_var(--accent-primary)]" />

                                <div className="glass-card rounded-[2.5rem] p-10 group">
                                    <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-black uppercase tracking-tight">{exp.role}</h3>
                                                {exp.badge && (
                                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 animate-pulse">
                                                        {exp.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Building2 size={12} />
                                                    {exp.company}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={12} />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 py-3 rounded-2xl glass text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-muted-foreground font-medium leading-relaxed">
                                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="px-4 py-1.5 rounded-xl bg-muted/50 text-[10px] font-black uppercase tracking-widest border border-border group-hover:border-primary/20 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


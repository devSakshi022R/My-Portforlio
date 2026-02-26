"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Frontend Developer",
        company: "1Lattice",
        period: "Sept 2024 – Present",
        location: "Gurugram, Haryana",
        badge: "Current",
        description: [
            "Developed and maintained scalable, high-performance web apps using React.js, Next.js, JavaScript (ES6+), HTML5, and CSS3.",
            "Built responsive, mobile-first interfaces with emphasis on cross-browser compatibility, WCAG accessibility, SEO, and performance optimization.",
            "Designed and maintained a centralized UI component library/design system using Tailwind CSS, ShadCN/UI, and Storybook — improving development efficiency by 60%.",
            "Implemented Redux-based state management and custom React hooks for optimized data flow and real-time UI updates.",
            "Developed robust forms, validation, and error handling using React Hook Form and Zod to ensure data integrity.",
            "Integrated RESTful APIs, handled authentication, authorization, and CORS in an Agile/Scrum environment.",
        ],
        tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "ShadCN", "Storybook"],
    },
    {
        role: "Software Developer Intern",
        company: "1Lattice",
        period: "July 2024 – Sept 2024",
        location: "Gurugram, Haryana",
        badge: null,
        description: [
            "Collaborated to enhance user experience and optimize frontend performance.",
            "Assisted in API integration and state management with Redux.",
            "Participated in code reviews for quality assurance in Agile/Scrum team.",
        ],
        tech: ["React.js", "Next.js", "Redux", "REST APIs"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 sm:py-32 relative overflow-hidden" aria-label="Experience section">
            <div className="absolute -bottom-40 -left-20 w-96 h-96 glow-purple opacity-20 rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs font-bold uppercase tracking-wider mb-6">
                        Career
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Professional Experience</h2>
                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">From intern to building production systems at scale.</p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative pl-16 sm:pl-24"
                            >
                                {/* Node dot */}
                                <div className="absolute left-3 sm:left-5 top-1.5 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/40" />

                                {/* Card */}
                                <div className="glass border border-border rounded-3xl p-7 sm:p-9 hover:border-accent-purple/40 transition-colors duration-300">
                                    {/* Role header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <h3 className="text-xl sm:text-2xl font-black">{exp.role}</h3>
                                                {exp.badge && (
                                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-green-500/15 text-green-400 text-xs font-bold border border-green-500/30">
                                                        {exp.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-accent-purple-light font-semibold">
                                                <Briefcase size={14} />
                                                <span>{exp.company}</span>
                                                <span className="text-muted-foreground font-normal">· {exp.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium bg-muted px-4 py-2 rounded-xl flex-shrink-0">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <ul className="space-y-3.5 mb-7">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-purple-light flex-shrink-0" />
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/60%/g, '<strong class="text-foreground">60%</strong>') }} />
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech stack pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-muted text-muted-foreground border border-border"
                                            >
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

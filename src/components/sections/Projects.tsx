"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        index: "01",
        title: "1Lattice Website",
        subtitle: "Frontend Development · React.js, Next.js",
        description:
            "Scalable frontend architecture built using React.js and Next.js for the flagship company website. Focused on a component-driven approach with REST API integration and SEO-optimized structure.",
        highlights: ["Responsive UI Development", "REST API Integration", "SEO-Optimized", "Component-driven Architecture"],
        tags: ["Next.js", "React.js", "JavaScript", "HTML5", "CSS3"],
        color: "from-violet-500/20 to-blue-500/10",
        borderColor: "hover:border-violet-500/50",
    },
    {
        index: "02",
        title: "Agent Web Application",
        subtitle: "Complex Workflow App · React.js, Next.js, Redux",
        description:
            "Complex workflow-based web application with advanced state management. Implemented Redux for managing data flow, form validation with React Hook Form & Zod, and optimized re-renders for peak performance.",
        highlights: ["Redux State Management", "React Hook Form + Zod", "Auth & Authorization", "Performance Optimization"],
        tags: ["Redux", "React Hook Form", "Zod", "REST API", "TypeScript"],
        color: "from-blue-500/20 to-cyan-500/10",
        borderColor: "hover:border-blue-500/50",
    },
    {
        index: "03",
        title: "Respondent Web Application",
        subtitle: "Frontend / Web Development",
        description:
            "Built reusable UI components and integrated secure APIs for respondent authentication flows. Designed responsive layouts with role-based access control.",
        highlights: ["Reusable UI Library", "Secure API Handling", "Role-based Access", "Authentication Workflows"],
        tags: ["React.js", "Next.js", "JavaScript", "CSS3", "REST API"],
        color: "from-cyan-500/20 to-teal-500/10",
        borderColor: "hover:border-cyan-500/50",
    },
    {
        index: "04",
        title: "MediQ Dashboard",
        subtitle: "Data-Driven Analytics Dashboard",
        description:
            "Data-driven analytics dashboard featuring real-time API integration, role-based access control, and advanced data visualizations including Sunburst and Marimekko charts. Built with a performance-focused architecture.",
        highlights: ["Sunburst & Marimekko Charts", "Real-time API Integration", "Role-based Access Control", "Performance Architecture"],
        tags: ["React.js", "Data Visualization", "Charts", "Role-based Access", "REST API"],
        color: "from-purple-500/20 to-pink-500/10",
        borderColor: "hover:border-purple-500/50",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 relative overflow-hidden" aria-label="Projects section">
            <div className="absolute top-0 right-0 w-96 h-96 glow-purple opacity-20 rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue-light text-xs font-bold uppercase tracking-wider mb-6">
                        Portfolio
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Selected Projects</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Production-grade applications built with a focus on architecture, scalability, and user experience.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative glass border border-border ${project.borderColor} rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-purple/10 hover:-translate-y-1`}
                        >
                            {/* Background gradient accent */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative z-10">
                                {/* Number + external icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-black text-gradient opacity-40">{project.index}</span>
                                    <button
                                        className="h-10 w-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent-purple/50 transition-all"
                                        aria-label={`Open ${project.title}`}
                                    >
                                        <ExternalLink size={16} />
                                    </button>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-black mb-1 group-hover:text-gradient transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                    {project.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.highlights.map((h, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-background/60 border border-border text-foreground/70"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-bold text-accent-purple-light">
                                            #{tag.replace(/\s+/g, "")}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

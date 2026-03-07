"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        index: "01",
        title: "1Lattice Core",
        subtitle: "Enterprise Company Portal",
        description:
            "Led frontend architecture for an enterprise-scale company portal with a centralized design system, reducing dev cycles by 60%.",
        tags: ["Next.js", "TypeScript", "Redux", "ShadCN"],
    },
    {
        index: "02",
        title: "Agent Flux",
        subtitle: "Workflow Automation System",
        description:
            "Complex state-driven app for managing multi-step workflows with real-time feedback and automated pipeline execution.",
        tags: ["Redux", "Zod", "React Hook Form"],
    },
    {
        index: "03",
        title: "MediQ Analytics",
        subtitle: "Data Visualization Dashboard",
        description:
            "Transforming raw medical datasets into interactive Sunburst and Marimekko charts for data-driven decision making.",
        tags: ["D3.js", "Analytics", "Next.js"],
    },
    {
        index: "04",
        title: "Respondent Portal",
        subtitle: "Secure Auth Platform",
        description:
            "High-traffic authentication and authorization flows for global research participants with CORS and session management.",
        tags: ["Auth", "REST API", "React"],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-32 relative" aria-label="Projects section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6"
                        >
                            Work Gallery
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]"
                        >
                            Selected <br />
                            <span className="text-muted-foreground">Projects</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-xs font-medium leading-relaxed md:text-right"
                    >
                        Production-grade applications built at scale with real business impact.
                    </motion.p>
                </div>

                {/* Project List */}
                <div className="divide-y divide-border">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 cursor-default hover:pl-4 transition-all duration-300"
                        >
                            {/* Left: Index + Title */}
                            <div className="flex items-start gap-8">
                                <span className="text-xs font-black text-muted-foreground/50 pt-1 w-6 flex-shrink-0">
                                    {project.index}
                                </span>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors duration-300 mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                                        {project.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Right: Description + Tags + Arrow */}
                            <div className="flex flex-col md:flex-row md:items-center gap-6 md:max-w-[55%]">
                                <p className="text-muted-foreground font-medium leading-relaxed text-sm flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 md:max-w-[180px] flex-shrink-0">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full border border-border text-[10px] font-black uppercase tracking-widest"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-all duration-300">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

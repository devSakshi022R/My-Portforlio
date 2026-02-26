"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, Github, ArrowRight } from "lucide-react";

const contactItems = [
    {
        icon: Mail,
        label: "Email",
        value: "sakshi915128@gmail.com",
        href: "mailto:sakshi915128@gmail.com",
        color: "text-red-400",
        bg: "bg-red-500/10",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91-8303786753",
        href: "tel:+918303786753",
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Gurugram, Haryana · India",
        href: null,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" aria-label="Contact section">
            <div className="absolute -bottom-20 right-0 w-96 h-96 glow-purple opacity-25 rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs font-bold uppercase tracking-wider mb-6">
                        Contact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                        Let&apos;s build something{" "}
                        <span className="text-gradient">remarkable</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Open to exciting frontend roles, freelance projects, and collaboration. Let&apos;s connect.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left: Contact details */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass border border-border rounded-3xl p-8 sm:p-10 flex flex-col gap-6"
                    >
                        <h3 className="text-xl font-black">Get in Touch</h3>

                        {contactItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                    <item.icon size={22} className={item.color} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="font-semibold text-foreground hover:text-accent-purple-light transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="font-semibold">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right: Social & CTA */}
                    <div className="flex flex-col gap-5">
                        <motion.a
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            href="https://linkedin.com/in/sakshi-singh-frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="contact-linkedin"
                            className="group flex items-center justify-between p-7 glass border border-border rounded-3xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Linkedin size={26} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Connect on</p>
                                    <p className="text-xl font-black">LinkedIn</p>
                                </div>
                            </div>
                            <ArrowRight className="text-muted-foreground group-hover:translate-x-2 group-hover:text-foreground transition-all duration-300" />
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            href="https://github.com/devSakshi022R"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="contact-github"
                            className="group flex items-center justify-between p-7 glass border border-border rounded-3xl hover:border-accent-purple/50 hover:shadow-lg hover:shadow-accent-purple/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-foreground flex items-center justify-center flex-shrink-0">
                                    <Github size={26} className="text-background" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Explore Code on</p>
                                    <p className="text-xl font-black">GitHub</p>
                                </div>
                            </div>
                            <ArrowRight className="text-muted-foreground group-hover:translate-x-2 group-hover:text-foreground transition-all duration-300" />
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative overflow-hidden rounded-3xl p-8 text-white"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-blue" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-3">Ready to collaborate?</h3>
                                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                                    Whether it&apos;s a full-time role, freelance project, or open-source collaboration, I&apos;d love to hear from you.
                                </p>
                                <a
                                    href="mailto:sakshi915128@gmail.com"
                                    id="contact-email-cta"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-purple font-black rounded-2xl text-sm hover:shadow-xl transition-all hover:scale-[1.02]"
                                >
                                    Send an Email <Mail size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-10 border-t border-border" aria-label="Footer">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-black text-sm">
                        S
                    </div>
                    <span className="font-bold text-sm">Sakshi Singh</span>
                    <span className="text-muted-foreground text-sm">· Frontend Engineer</span>
                </div>
                <p className="text-muted-foreground text-sm text-center">
                    © {new Date().getFullYear()} Sakshi Singh. Built with Next.js, Tailwind CSS & Framer Motion.
                </p>
                <div className="flex gap-5">
                    <a href="mailto:sakshi915128@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
                    <a href="https://linkedin.com/in/sakshi-singh-frontend" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

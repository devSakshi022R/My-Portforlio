"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, Github, ArrowRight, ExternalLink } from "lucide-react";

const contactItems = [
    {
        icon: Mail,
        label: "Direct Email",
        value: "sakshi915128@gmail.com",
        href: "mailto:sakshi915128@gmail.com",
        color: "text-primary",
    },
    {
        icon: Phone,
        label: "Contact No.",
        value: "+91-8303786753",
        href: "tel:+918303786753",
        color: "text-secondary",
    },
    {
        icon: Linkedin,
        label: "LinkedIn Professional",
        value: "in/sakshi-singh-frontend",
        href: "https://linkedin.com/in/sakshi-singh-frontend",
        color: "text-tertiary",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden" aria-label="Contact section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-20">
                        {/* Left Side: Call to Action */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8"
                            >
                                Get in Touch
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-[0.85]">
                                Let&apos;s build <br />
                                <span className="text-muted-foreground italic font-medium">remarkable</span> <br />
                                Products
                            </h2>
                            <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-sm">
                                I&apos;m currently open to new opportunities and interesting projects.
                                Let&apos;s turn your ideas into high-performance code.
                            </p>
                        </div>

                        {/* Right Side: Contact List */}
                        <div className="space-y-6">
                            {contactItems.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-8 glass rounded-3xl group hover:border-primary/30 transition-all hover:bg-muted/50"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`h-14 w-14 rounded-2xl bg-muted/50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                            <item.icon size={26} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                                            <p className="text-lg font-black uppercase tracking-tight">{item.value}</p>
                                        </div>
                                    </div>
                                    <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-20 border-t border-border" aria-label="Footer">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center font-black text-xl">
                                S
                            </div>
                            <div>
                                <p className="font-black uppercase tracking-tight leading-tight">Sakshi Singh</p>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Engineering Portfolio</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {["About", "Projects", "Skills", "LinkedIn"].map((link) => (
                            <a
                                key={link}
                                href={link === "LinkedIn" ? "https://linkedin.com/in/sakshi-singh-frontend" : `#${link.toLowerCase()}`}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground text-center">
                        © {new Date().getFullYear()} / Design by Sakshi / Built with Precision
                    </p>
                </div>
            </div>
        </footer>
    );
}


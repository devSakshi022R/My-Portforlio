"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500 flex justify-center",
                isScrolled ? "mt-4 px-4" : "py-5"
            )}
        >
            <div className={cn(
                "w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500",
                isScrolled ? "glass rounded-full py-2.5 shadow-2xl shadow-black/10 max-w-5xl" : "bg-transparent"
            )}>
                {/* Logo */}
                <a href="#" className="group flex items-center gap-3" aria-label="Sakshi Singh - Home">
                    <div className="relative h-10 w-10 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary animate-pulse" />
                        <span className="relative text-white font-black text-xl">S</span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-black leading-tight tracking-tight uppercase">Sakshi Singh</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Engineer</p>
                    </div>
                </a>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative group text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground px-4 py-2 transition-colors"
                        >
                            {link.name}
                            <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <button
                        id="theme-toggle"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground border border-border"
                        aria-label="Toggle dark/light mode"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-xs font-black uppercase tracking-widest rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-black/10"
                    >
                        Hire Me
                        <ArrowRight size={14} />
                    </a>

                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-full hover:bg-muted transition-colors border border-border"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="md:hidden fixed inset-x-4 top-24 z-50 glass rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-muted-foreground hover:text-foreground px-4 py-3 rounded-2xl hover:bg-muted/50 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 flex items-center justify-between px-6 py-4 bg-foreground text-background font-black uppercase tracking-widest rounded-2xl"
                            >
                                Let&apos;s Connect
                                <ArrowRight size={20} />
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}


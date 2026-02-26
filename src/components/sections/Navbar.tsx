"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
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
                "fixed top-0 z-50 w-full transition-all duration-500",
                isScrolled ? "nav-blur shadow-lg shadow-black/10 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="group flex items-center gap-3" aria-label="Sakshi Singh - Home">
                    <div className="relative h-9 w-9 rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-blue" />
                        <span className="relative text-white font-black text-lg tracking-tight">S</span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-bold leading-tight">Sakshi Singh</p>
                        <p className="text-xs text-muted-foreground">Frontend Engineer</p>
                    </div>
                </a>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-purple to-accent-blue text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/30"
                    >
                        Let&apos;s Connect
                    </a>

                    <button
                        id="theme-toggle"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground border border-border"
                        aria-label="Toggle dark/light mode"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl hover:bg-muted transition-colors border border-border"
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
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden glass border-t border-border mx-4 mt-2 rounded-2xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-muted/50 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-2 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-xl"
                            >
                                Let&apos;s Connect
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

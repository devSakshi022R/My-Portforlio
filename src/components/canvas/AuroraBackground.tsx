"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

const COLORS = ["#818cf8", "#22d3ee", "#f472b6", "#a78bfa", "#34d399"];

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -999, y: -999 });
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(
        Math.floor((canvas.width * canvas.height) / 14000),
        80
      );
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.5 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    };

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      tRef.current += 0.004;
      const t = tRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // === Animated aurora blobs (soft, large, slow) ===
      const auroraBlobs = [
        {
          cx: canvas.width * 0.1 + Math.sin(t * 0.5) * canvas.width * 0.08,
          cy: canvas.height * 0.25 + Math.cos(t * 0.4) * canvas.height * 0.06,
          r: canvas.width * 0.38,
          rgb: "99,102,241",
          alpha: 0.10,
        },
        {
          cx: canvas.width * 0.88 + Math.cos(t * 0.45) * canvas.width * 0.07,
          cy: canvas.height * 0.18 + Math.sin(t * 0.35) * canvas.height * 0.05,
          r: canvas.width * 0.32,
          rgb: "6,182,212",
          alpha: 0.09,
        },
        {
          cx: canvas.width * 0.55 + Math.sin(t * 0.55) * canvas.width * 0.06,
          cy: canvas.height * 0.78 + Math.cos(t * 0.5) * canvas.height * 0.07,
          r: canvas.width * 0.30,
          rgb: "236,72,153",
          alpha: 0.08,
        },
        {
          cx: canvas.width * 0.35 + Math.cos(t * 0.38) * canvas.width * 0.05,
          cy: canvas.height * 0.6 + Math.sin(t * 0.42) * canvas.height * 0.04,
          r: canvas.width * 0.22,
          rgb: "167,139,250",
          alpha: 0.07,
        },
      ];

      for (const blob of auroraBlobs) {
        const grad = ctx.createRadialGradient(blob.cx, blob.cy, 0, blob.cx, blob.cy, blob.r);
        grad.addColorStop(0, `rgba(${blob.rgb},${blob.alpha})`);
        grad.addColorStop(0.55, `rgba(${blob.rgb},${blob.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${blob.rgb},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // === Particle constellation ===
      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse gentle attraction
        const dxm = mx - p.x;
        const dym = my - p.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        if (distm < 150 && distm > 0) {
          const force = ((150 - distm) / 150) * 0.015;
          p.vx += (dxm / distm) * force;
          p.vy += (dym / distm) * force;
        }

        // Speed cap + dampen
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx *= 0.95; p.vy *= 0.95; }
        p.vx *= 0.992;
        p.vy *= 0.992;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing opacity
        const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(t * 60 * p.pulseSpeed + p.pulsePhase));
        const rgb = hexToRgb(p.color);

        // Glow halo
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6);
        grd.addColorStop(0, `rgba(${rgb},${pulseOpacity * 0.6})`);
        grd.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${pulseOpacity})`;
        ctx.fill();

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 110) {
            const alpha = (1 - d / 110) * 0.18 * pulseOpacity;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${rgb},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}

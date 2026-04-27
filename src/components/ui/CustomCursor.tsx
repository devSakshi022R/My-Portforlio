"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
}

const colors = ["#ff5f56", "#ffbd2e", "#27c93f", "#22d3ee", "#f472b6"];

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let lastTime = 0;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);

      // Create particles, limit frequency
      const now = Date.now();
      if (now - lastTime > 20) {
        lastTime = now;
        particleIdRef.current += 1;
        const id = particleIdRef.current;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2; // Random direction
        
        setParticles((prev) => [...prev.slice(-20), { id, x: e.clientX, y: e.clientY, color, angle }]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter(p => p.id !== id));
        }, 800);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Background Interactive Glow (Spotlight) */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[-1]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(244,114,182,0.05) 30%, rgba(0,0,0,0) 70%)"
        }}
      />
      
      {/* Dynamic Particle Trail */}
      {particles.map((p) => {
        // Random drift for particles
        const driftX = Math.cos(p.angle) * 30;
        const driftY = Math.sin(p.angle) * 30 + 20; // slight gravity

        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.8, scale: 1, x: p.x - 4, y: p.y - 4 }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              x: p.x - 4 + driftX, 
              y: p.y - 4 + driftY 
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
            style={{
              backgroundColor: p.color,
              boxShadow: `0 0 12px ${p.color}, 0 0 24px ${p.color}`,
            }}
          />
        );
      })}

      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          backgroundColor: isPointer ? "rgba(255,255,255, 0.1)" : "transparent",
        }}
      />
      
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
          boxShadow: "0 0 10px white"
        }}
      />
    </>
  );
}

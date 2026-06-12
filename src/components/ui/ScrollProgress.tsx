"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress — a hairline vermillion bar pinned to the very top that
 * fills as you read down the page. A small, classy signal of progress.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
    />
  );
}

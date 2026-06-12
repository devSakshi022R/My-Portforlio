"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * RotatingWord — cycles through a list of words in place, each swapping with a
 * small vertical wipe. Inline by design so it sits inside a sentence. Width is
 * reserved by the longest word so the surrounding copy never jumps.
 */
export function RotatingWord({
  words,
  interval = 2200,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="relative inline-grid align-baseline">
      {/* invisible sizer reserves space for the widest word */}
      <span aria-hidden className={`invisible col-start-1 row-start-1 ${className ?? ""}`}>
        {longest}
      </span>
      <span className="col-start-1 row-start-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[i]}
            initial={{ y: "0.9em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-0.9em", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block ${className ?? ""}`}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SplashScreenProps = {
  onFinish: () => void;
  durationMs?: number;
  message?: string;
};

export default function SplashScreen({
  onFinish,
  durationMs = 1600,
  message = "Welcome to Anas Ahmed’s Portfolio",
}: SplashScreenProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeout = window.setTimeout(() => onFinish(), prefersReducedMotion ? 300 : durationMs);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timeout);
    };
  }, [onFinish, durationMs, prefersReducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
      animate={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.25 : durationMs / 1000, ease: "easeOut" }}
    >
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
        animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center px-6"
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400 drop-shadow-[0_1px_8px_rgba(255,255,255,0.15)]">
          {message}
        </div>
      </motion.div>
    </motion.div>
  );
}



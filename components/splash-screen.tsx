"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SplashScreenProps = {
  onFinish: () => void;
  /** Total duration (backwards-compatible). If provided, visibleMs/fadeMs are derived. */
  durationMs?: number;
  /** Time to fully show before fading out */
  visibleMs?: number;
  /** Fade-out duration */
  fadeMs?: number;
  message?: string;
};

export default function SplashScreen({
  onFinish,
  durationMs,
  visibleMs,
  fadeMs,
  message = "Welcome to Anas Ahmed’s Portfolio",
}: SplashScreenProps) {
  const prefersReducedMotion = useReducedMotion();
  const computedVisibleMs = typeof visibleMs === "number"
    ? visibleMs
    : typeof durationMs === "number"
      ? Math.round(durationMs * 0.65)
      : 1800;
  const computedFadeMs = typeof fadeMs === "number"
    ? fadeMs
    : typeof durationMs === "number"
      ? Math.max(300, durationMs - Math.round(durationMs * 0.65))
      : 1200;
  const totalMs = prefersReducedMotion ? 500 : computedVisibleMs + computedFadeMs;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeout = window.setTimeout(() => onFinish(), totalMs);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timeout);
    };
  }, [onFinish, totalMs, prefersReducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={
        prefersReducedMotion
          ? { opacity: [1, 1, 0] }
          : { opacity: [1, 1, 0] }
      }
      transition={{
        duration: totalMs / 1000,
        times: [0, (computedVisibleMs / (computedVisibleMs + computedFadeMs)), 1],
        ease: ["linear", "easeOut", "easeOut"],
      }}
    >
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.94 }}
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



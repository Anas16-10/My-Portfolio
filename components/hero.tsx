"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/reveal";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const slides = [
  { src: "/a1.jpeg", alt: "Anas Ahmed" },
  { src: "/a2.jpeg", alt: "Anas Ahmed" },
  { src: "/a3.jpeg", alt: "Anas Ahmed" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
            Hi, I&apos;m <span className="gradient-text">Anas Ahmed</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            AI/ML trainee, Full-Stack Developer &amp; Data Analyst. IEEE Community Member.
            Curious and driven, I excel at problem-solving, thrive in collaborative teams,
            and continuously learn to turn challenges into innovative solutions.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a href="https://github.com/Anas16-10" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Github size={18} /> GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/anas-ahmed-024b12363" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Linkedin size={18} /> LinkedIn
              </Button>
            </a>
            <a href="https://www.instagram.com/anas_ahmed_16?igsh=MWFtbjQ5cTVwMGl5bQ==" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Instagram size={18} /> Instagram
              </Button>
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            Based in Hubli, Karnataka, India • Email: shaikhanas99199@gmail.com • +91 7795373221
          </div>
        </motion.div>

        {/* Image Slider Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-border p-4 md:p-6 bg-card shadow-xl w-full max-w-md mx-auto md:mx-0"
        >
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].src}
                  alt={slides[current].alt}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                  ? "bg-primary w-4"
                  : "bg-muted-foreground/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

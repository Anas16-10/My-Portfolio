"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="gradient-text">Anas Ahmed</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            AI/ML trainee, Full-Stack Developer &amp; Data Analyst. IEEE Community Member.
            Curious and driven, I excel at problem-solving, thrive in collaborative teams,
            and continuously learn to turn challenges into innovative solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Anas16-10" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github size={18}/> GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/anas-ahmed-024b12363" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin size={18}/> LinkedIn
              </Button>
            </a>
            <a href="https://www.instagram.com/anas_ahmed_16?igsh=MWFtbjQ5cTVwMGl5bQ==" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Instagram size={18}/> Instagram
              </Button>
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Based in Hubli, Karnataka, India • Email: shaikhanas99199@gmail.com • +91 7795373221
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-border p-6 bg-card shadow-xl"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/a4.jpg"
              alt="Anas Ahmed"
              width={400}       // Adjust based on your design
              height={300}      // Adjust based on your design
              className="w-full h-full object-cover rounded-2xl"
              priority           // Ensures this image loads quickly
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

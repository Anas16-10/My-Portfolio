"use client";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 md:px-0 py-12">
      <Reveal>
        <div className="rounded-2xl border border-border p-8 bg-card">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Get in touch</h2>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Open to internships, collaborations, and community work.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <a href="mailto:shaikhanas99199@gmail.com">
              <Button className="w-full sm:w-auto">Email me</Button>
            </a>
            <a href="https://github.com/Anas16-10" target="_blank" rel="noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">GitHub</Button>
            </a>
            <a href="https://www.linkedin.com/in/anas-ahmed-024b12363" target="_blank" rel="noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">LinkedIn</Button>
            </a>
            <a href="https://www.instagram.com/anas_ahmed_16?igsh=MWFtbjQ5cTVwMGl5bQ==" target="_blank" rel="noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">Instagram</Button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

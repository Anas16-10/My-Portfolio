"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/60 border-b border-border">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-0">
        {/* Logo / Name */}
        <Link href="/" className="font-semibold text-lg gradient-text">
          Anas Ahmed
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#education" className="hover:opacity-80">Education</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border w-full px-4 py-4 flex flex-col gap-3 text-sm">
          <a href="#projects" className="hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#skills" className="hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#experience" className="hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#education" className="hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Education</a>
          <a href="#contact" className="hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/60 border-b border-border">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg gradient-text">
          Anas Ahmed
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#education" className="hover:opacity-80">Education</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </div>

        {/* Mobile menu placeholder if needed in future */}
      </nav>
    </header>
  );
}

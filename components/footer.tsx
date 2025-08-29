import Reveal from "@/components/reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <Reveal>
        <div className="container py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anas Ahmed. All rights reserved.
        </div>
      </Reveal>
    </footer>
  )
}

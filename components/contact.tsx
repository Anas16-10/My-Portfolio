import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="container py-12">
      <div className="rounded-2xl border border-border p-8 bg-card">
        <h2 className="text-3xl font-bold mb-3">Get in touch</h2>
        <p className="text-muted-foreground mb-6">
          Open to internships, collaborations, and community work.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:shaikhanas99199@gmail.com"><Button>Email me</Button></a>
          <a href="https://github.com/Anas16-10" target="_blank" rel="noreferrer"><Button variant="outline">GitHub</Button></a>
          <a href="https://www.linkedin.com/in/anas-ahmed-024b12363" target="_blank" rel="noreferrer"><Button variant="outline">LinkedIn</Button></a>
          <a href="https://www.instagram.com/anas_ahmed_16?igsh=MWFtbjQ5cTVwMGl5bQ==" target="_blank" rel="noreferrer"><Button variant="outline">Instagram</Button></a>

        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "FactFlow — AI-Powered Fact Checking System",
    desc: "Detect and verify fake news in text/images with OCR, multilingual input, and AI scoring.",
    stack: "Python, Flask, React.js, MongoDB, Hugging Face, Google Gemini API, Tesseract OCR, ML, NLP",
    link: "https://github.com/Anas16-10"
  },
  {
    title: "SAMS — Student Attendance Management System",
    desc: "Role-based web system for marking & reporting attendance with secure MySQL backend.",
    stack: "Java, JSP, Servlets, MySQL, HTML, CSS, JS, Apache Tomcat, JDBC",
    link: "https://github.com/Anas16-10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>{p.desc}</p>
                <p className="text-xs">{p.stack}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}

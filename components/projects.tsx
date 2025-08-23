"use client";

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
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-stretch">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <Card className="hover:shadow-lg transition w-full">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base text-muted-foreground space-y-2">
                <p>{p.desc}</p>
                <p className="text-xs sm:text-sm">{p.stack}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/reveal";

export default function Education() {
  const items = [
    { school: "KLE Institute of Technology — B.E CSE", place: "Hubli, Karnataka", time: "2022 – Present", detail: "GPA: 9.2/10.0" },
    { school: "KLE Prerana PU Science College — Class 12", place: "Hubli, Karnataka", time: "2022", detail: "90.17%" },
    { school: "St Antony’s Public School — Class 10", place: "Hubli, Karnataka", time: "2020", detail: "86.4%" }
  ];

  return (
    <section id="education" className="container mx-auto px-4 sm:px-6 md:px-0 py-12">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {items.map((i, idx) => (
          <Reveal key={i.school} delay={idx * 0.05}>
            <div className="rounded-2xl border border-border p-6 bg-card w-full">
              <div className="font-semibold text-base sm:text-lg">{i.school}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{i.place}</div>
              <div className="text-sm sm:text-base mt-1">{i.time} • {i.detail}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

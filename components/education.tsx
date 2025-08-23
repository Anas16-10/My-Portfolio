export default function Education() {
  const items = [
    { school: "KLE Institute of Technology — B.E CSE", place: "Hubli, Karnataka", time: "2022 – Present", detail: "GPA: 9.2/10.0" },
    { school: "KLE Prerana PU Science College — Class 12", place: "Hubli, Karnataka", time: "2022", detail: "90.17%" },
    { school: "St Antony’s Public School — Class 10", place: "Hubli, Karnataka", time: "2020", detail: "86.4%" }
  ]
  return (
    <section id="education" className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(i => (
          <div key={i.school} className="rounded-2xl border border-border p-6 bg-card">
            <div className="font-semibold">{i.school}</div>
            <div className="text-sm text-muted-foreground">{i.place}</div>
            <div className="text-sm mt-1">{i.time} • {i.detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

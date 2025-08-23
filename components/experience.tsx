export default function Experience() {
  const roles = [
    { role: "AI & ML Trainee", org: "Samsung Innovation Campus", time: "Aug 21, 2025 — Ongoing", bullets: [
      "Learning Python, probability, statistics, linear algebra.",
      "Hands-on with supervised & unsupervised learning and intro to deep learning."
    ]},
    { role: "Founding Vice Chair", org: "IEEE Computer Society", time: "July 2, 2025 — Ongoing", bullets: [
      "Led chapter ops, event planning, online outreach campaigns."
    ]},
    { role: "Social Media Coordinator", org: "IEEE AESS Chapter", time: "April 12, 2025 — Ongoing", bullets: [
      "Managed social presence, coordinated events, promoted programs."
    ]},
  ]
  return (
    <section id="experience" className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Experience & Leadership</h2>
      <div className="space-y-6">
        {roles.map(r => (
          <div key={r.role} className="rounded-2xl border border-border p-6 bg-card">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{r.role} — {r.org}</h3>
              <div className="text-sm text-muted-foreground">{r.time}</div>
            </div>
            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
              {r.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

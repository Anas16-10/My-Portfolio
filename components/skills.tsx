export default function Skills() {
  const categories = [
    { name: "Programming & Web", items: ["Python", "C", "Java", "React.js", "Node.js"] },
    { name: "AI/ML & Analytics", items: ["ML", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Power Query"] },
    { name: "Databases & OS", items: ["MySQL", "MongoDB", "Snowflake", "Windows", "Linux"] },
    { name: "Visualization", items: ["Tableau", "Power BI", "DAX", "Dashboard Design"] },
    { name: "Dev Tools", items: ["VS Code", "Colab", "Jupyter Notebook"] }
  ];

  return (
    <section id="skills" className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat.name} className="rounded-2xl border border-border p-6 bg-card">
            <h3 className="font-semibold mb-2">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(i => (
                <span key={i} className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/50">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

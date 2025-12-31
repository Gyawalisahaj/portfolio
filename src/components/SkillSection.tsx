export default function SkillSection() {
  const list = [
    { cat: "Languages", items: "Python / MySQL / C++" },
    { cat: "Frameworks", items: "React / Next.js / FastAPI" },
    { cat: "Machine Learning", items: "Scikit-Learn / Pandas / Numpy" }
  ];

  return (
    <div className="lance-card divide-y divide-white/10">
      {list.map((s, i) => (
        <div key={i} className="py-6 flex justify-between items-center group">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{s.cat}</span>
          <span className="text-xl font-bold italic group-hover:text-[#64ffda] transition-colors">{s.items}</span>
        </div>
      ))}
    </div>
  );
}
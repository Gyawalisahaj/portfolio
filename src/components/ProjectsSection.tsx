export default function ProjectsSection() {
  const projects = [
    { title: "HOUSE Price PREDICTION", tag: "AI / ML", year: "2024" },
    { title: "NEPALI MOVIE RECOMMENDATION   ", tag: "NLP / WEB", year: "2024" }
  ];

  return (
    <div className="space-y-4">
      {projects.map((p, i) => (
        <div key={i} className="lance-card flex justify-between items-center group cursor-pointer">
          <div className="flex items-center gap-10">
            <span className="font-mono text-xs text-slate-600 group-hover:text-[#64ffda]">0{i+1}</span>
            <h3 className="text-4xl font-bold italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
              {p.title}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-[#64ffda] pl-10 font-mono text-[10px] tracking-widest">{p.tag}</p>
            <p className="text-slate-600 font-mono text-[10px]">{p.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
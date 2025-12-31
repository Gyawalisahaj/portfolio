export default function SkillSection() {
  const skillGroups = [
    { 
      cat: "Core Languages", 
      items: "Python / MySQL / C++",
      details: "Database management & logic"
    },
    { 
      cat: "Data Science & Viz", 
      items: "Pandas / NumPy / Power BI / Matplotlib / Seaborn",
      details: "End-to-end data pipelines & storytelling"
    },
    { 
      cat: "AI / Machine Learning", 
      items: "Scikit-Learn / TensorFlow / Keras / PyTorch",
      details: "Predictive modeling & Neural Architectures"
    },
    { 
      cat: "Engineering & Web", 
      items: "FastAPI / React / Next.js / Docker",
      details: "Scalable deployment & interfaces"
    },
    { 
      cat: "Dev Environment", 
      items: "Git / GitHub / Linux / Jupyter / VS Code",
      details: "Version control & optimized workflow"
    }
  ];

  return (
    <div className="lance-card">
      {/* SECTION TITLE */}
      <div className="flex items-center gap-4 mb-8">
        {/* <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.3em] uppercase">02 // Stack</span> */}
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Technical Arsenal</h2>
      </div>

      <div className="divide-y divide-white/10">
        {skillGroups.map((group, i) => (
          <div key={i} className="py-8 group flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.4em] mb-1">
                [{group.cat}]
              </span>
              <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest">
                {group.details}
              </span>
            </div>
            
            <div className="text-left md:text-right max-w-xl">
              <span className="text-xl md:text-2xl font-bold italic text-slate-300 group-hover:text-[#64ffda] transition-all duration-500 leading-tight block">
                {group.items}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* SOFT SKILLS BAR */}
      <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4">
        {["Problem Solving", "Critical Thinking", "Software Optimization", "Communication"].map((skill) => (
          <div key={skill} className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#64ffda] rotate-45" />
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
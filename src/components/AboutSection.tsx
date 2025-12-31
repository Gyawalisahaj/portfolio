"use client";

export default function AboutSection() {
  const hobbies = [
    { name: "Cricket", icon: "运动" },
    { name: "Photography", icon: "视觉" },
    { name: "Problem Solving", icon: "逻辑" },
    { name: "Continuous Learning", icon: "进化" }
  ];

  const corePhilosophy = [
    "Applied Statistics & Linear Algebra",
    "End-to-End Project Architecture",
    "Deterministic Problem Solving",
    "Scalable Industry Solutions"
  ];

  return (
    <div className="lance-card space-y-12">
      {/* 01. THE MISSION */}
      <div className="flex items-center gap-4">
        <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.3em] uppercase">01 // Profile</span>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Mission Statement</h2>
      </div>

      <div className="max-w-3xl">
        <p className="text-slate-300 leading-relaxed text-lg">
          I am a <span className="text-white font-semibold">CSIT student at Tribhuvan University</span> with a 
          distinguished passion for Data Science and Artificial Intelligence. I architect solutions where 
          <span className="text-[#64ffda]"> mathematics, data, and algorithms</span> converge to solve 
          complex real-world challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-10">
        
        {/* LEFT COLUMN: ACADEMIC LOG */}
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] text-[#64ffda] tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-[1px] bg-[#64ffda]"></span> Academic Path
          </h4>
          <div className="space-y-6">
            <div className="relative pl-4 border-l border-white/5">
              <p className="text-white font-bold italic text-lg uppercase tracking-tight">B.Sc. CSIT // Ongoing</p>
              <p className="text-slate-500 font-mono text-[10px] uppercase">Bhaktapur Multiple Campus</p>
              <p className="text-slate-600 font-mono text-[9px] uppercase">Tribhuvan University</p>
            </div>
            <div className="relative pl-4 border-l border-white/5">
              <p className="text-slate-300 font-bold italic text-lg uppercase tracking-tight">Higher Secondary</p>
              <p className="text-slate-500 font-mono text-[10px] uppercase">Kathmandu Model College</p>
              <p className="text-slate-600 font-mono text-[9px] uppercase">Major: Physics, Chemistry, Math, Bio</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PERSONAL SPECIFICATIONS (HOBBIES) */}
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] text-[#64ffda] tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-[1px] bg-[#64ffda]"></span> Beyond the Code
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="flex flex-col p-4 bg-white/[0.01] border border-white/5 rounded-sm group hover:border-[#64ffda]/30 transition-all duration-500">
                <span className="text-slate-700 font-mono text-[8px] mb-1 group-hover:text-[#64ffda] transition-colors">
                  {hobby.icon}
                </span>
                <span className="text-slate-400 text-xs font-mono tracking-widest uppercase group-hover:text-white">
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* CORE PHILOSOPHY & SKILLS FOOTER */}
      <div className="bg-white/[0.03] p-6 rounded-sm border-l-2 border-[#64ffda] mt-10">
        <h4 className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase mb-4">Core Philosophy</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {corePhilosophy.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[10px] font-mono text-slate-400 group cursor-default">
              <span className="text-[#64ffda] group-hover:translate-x-1 transition-transform">→</span> 
              <span className="group-hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-slate-600 font-mono text-[9px] uppercase tracking-[0.4em] pt-4 text-center md:text-left">
        Currently architecting predictive systems in Hetauda, Nepal.
      </p>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";

export default function SkillSection() {
  const skillGroups = [
    { 
      cat: "Core Languages", 
      items: ["Python", "MySQL", "C++"],
      details: "Database management & logic"
    },
    { 
      cat: "Data Science & Viz", 
      items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn"],
      details: "End-to-end data pipelines & storytelling"
    },
    { 
      cat: "AI / Machine Learning", 
      items: ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch"],
      details: "Predictive modeling & Neural Architectures"
    },
    { 
      cat: "Engineering & Web", 
      items: ["FastAPI", "React", "Next.js", "Docker"],
      details: "Scalable deployment & interfaces"
    },
    { 
      cat: "Dev Environment", 
      items: ["Git", "GitHub", "Linux", "Jupyter", "VS Code"],
      details: "Version control & optimized workflow"
    }
  ];

  const softSkills = ["Problem Solving", "Critical Thinking", "Software Optimization", "Communication"];

  return (
    <div className="w-full relative">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#64ffda]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter">Technical Arsenal</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Skill Groups */}
        <div className="space-y-6">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-[#64ffda]/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#64ffda] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#64ffda] uppercase tracking-[0.2em] mb-2">
                    [{group.cat}]
                  </span>
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest max-w-[200px]">
                    {group.details}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 md:justify-end flex-1">
                  {group.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-200 font-mono text-[10px] uppercase tracking-wider rounded-md group-hover:border-white/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Soft Skills & Abstract Visuals */}
        <div className="flex flex-col justify-between glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 space-y-12">
            <div>
              <h3 className="text-xl font-bold italic uppercase tracking-tighter mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#64ffda] rotate-45" />
                Soft Skills Matrix
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, idx) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-3 p-4 bg-black/20 rounded-lg border border-white/5"
                  >
                    <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full shadow-[0_0_10px_#64ffda]" />
                    <span className="font-mono text-xs text-slate-300 uppercase tracking-widest">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-auto pt-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
              <div className="flex justify-between items-end">
                <div className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.4em] leading-loose">
                  System Status<br/>
                  <span className="text-[#64ffda]">Optimized & Ready</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [10, 24, 10] }}
                      transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                      className="w-1 bg-[#64ffda]/30 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "01",
      title: "AI Developer",
      company: "Ambition College HackFest 2025",
      location: "Kathmandu, NP",
      period: "72-Hour Rapid Development Cycle",
      description: "Selected as a core team member to architect and deploy a complete tech solution within a 3-day, 2-night intensive hackathon environment.",
      bullets: [
        "Collaborated in a cross-functional team of four, leading the integration between AI models and the frontend/backend architecture.",
        "Facilitated real-time brainstorming and rapid prototyping to pivot ideas into functional features under strict deadlines.",
        "Implemented robust version control and coordination using GitHub, ensuring seamless deployment during late-night coding sessions.",
        "Engineered a production-ready prototype that demonstrated practical problem-solving and effective feature scaling."
      ],
      tags: ["Teamwork", "AI Integration", "Rapid Prototyping", "Frontend", "Backend", "GitHub", "Communication"]
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter">Experience</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="space-y-16">
        {experiences.map((exp) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Timeline Accent */}
            <div className="absolute left-[3px] top-0 h-full w-[2px] bg-gradient-to-b from-[#64ffda] via-[#64ffda]/20 to-transparent" />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -left-[5px] top-2 w-4 h-4 bg-[#030712] border-2 border-[#64ffda] rounded-full shadow-[0_0_15px_#64ffda]" 
            />
            
            <div className="glass p-8 sm:p-10 rounded-2xl border border-white/5 hover:border-[#64ffda]/30 transition-all duration-500 relative overflow-hidden group-hover:bg-white/[0.04]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#64ffda]/5 rounded-full blur-[50px] -z-10 group-hover:bg-[#64ffda]/10 transition-colors" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] animate-pulse" />
                    {exp.period}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 font-mono text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                    {exp.company} 
                    <span className="w-1 h-1 rounded-full bg-slate-600" /> 
                    <span className="text-slate-500">{exp.location}</span>
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic border-l-2 border-white/10 pl-4">
                    &quot;{exp.description}&quot;
                  </p>
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        key={i} 
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-400 leading-relaxed"
                      >
                        <span className="text-[#64ffda] mt-1 shrink-0">▹</span>
                        <span className="group-hover:text-slate-300 transition-colors">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Competencies Column */}
                <div className="space-y-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                  <div>
                    <h4 className="font-mono text-xs text-slate-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                      <span className="w-2 h-[1px] bg-slate-500" />
                      Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (tIdx * 0.05) }}
                          key={tag} 
                          className="px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-slate-300 font-mono text-[10px] sm:text-xs uppercase tracking-wider hover:bg-[#64ffda]/10 hover:border-[#64ffda]/30 hover:text-[#64ffda] transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Proof Link */}
                  <div className="pt-2">
                    <a 
                      href="./certificate.jpeg" 
                      target="_blank" 
                      className="inline-flex items-center gap-3 group/link px-4 py-3 bg-[#64ffda]/5 border border-[#64ffda]/20 rounded-lg hover:bg-[#64ffda]/10 transition-colors w-full justify-center md:justify-start"
                    >
                      <ExternalLink className="w-4 h-4 text-[#64ffda]" />
                      <span className="text-[#64ffda] font-mono text-xs uppercase tracking-widest font-bold">View Proof</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
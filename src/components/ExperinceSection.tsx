"use client";

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
    <div className="lance-card">
      {/* SECTION HEADER */}
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.3em] uppercase">03 // Field Work</span>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Experience</h2>
      </div>

      <div className="space-y-16">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l border-white/10 group">
            {/* Timeline Accent */}
            <div className="absolute -left-[1px] top-0 h-full w-[1px] bg-gradient-to-b from-[#64ffda] to-transparent opacity-50" />
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#64ffda] rotate-45 shadow-[0_0_10px_#64ffda]" />
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-[#64ffda] font-mono text-[9px] tracking-[0.4em] uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-3xl font-black italic uppercase tracking-tight text-white group-hover:text-[#64ffda] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-slate-400 font-mono text-[11px] uppercase tracking-widest mt-1">
                  {exp.company} <span className="text-slate-700 mx-2">//</span> {exp.location}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{exp.description}"
                </p>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-slate-400 leading-relaxed">
                      <span className="text-[#64ffda] mt-1.5 font-bold text-[10px]">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase mb-4">Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/[0.03] border border-white/5 text-slate-400 font-mono text-[9px] uppercase tracking-widest hover:border-[#64ffda]/40 hover:text-white transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Proof Link */}
                <div className="pt-4">
                  <a 
                    href="./certificate.jpeg" 
                    target="_blank" 
                    className="inline-flex items-center gap-3 group/link"
                  >
                    <span className="text-[#64ffda] font-mono text-[10px] uppercase tracking-[0.4em]">View Proof</span>
                    <span className="h-[1px] w-6 bg-[#64ffda] group-hover/link:w-10 transition-all duration-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
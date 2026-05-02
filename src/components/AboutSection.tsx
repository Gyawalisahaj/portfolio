"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  const hobbies = [
    { name: "Cricket", icon: "🏏" },
    { name: "Photography", icon: "📸" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Continuous Learning", icon: "📚" }
  ];

  const corePhilosophy = [
    "Applied Statistics & Linear Algebra",
    "End-to-End Project Architecture",
    "Deterministic Problem Solving",
    "Scalable Industry Solutions"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div 
      className="glass rounded-2xl p-8 sm:p-12 border border-white/5 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* 01. THE MISSION */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter">About Statement</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </motion.div>

      <motion.div variants={itemVariants} className="max-w-4xl mb-16">
        <p className="text-slate-300 leading-relaxed text-lg sm:text-xl font-light">
          I am a <span className="text-white font-semibold">CSIT student at Tribhuvan University</span> with a 
          distinguished passion for Data Science and Artificial Intelligence. I architect solutions where 
          <span className="text-[#64ffda]"> mathematics, data, and algorithms</span> converge to solve 
          complex real-world challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/10 pt-12">
        
        {/* LEFT COLUMN: ACADEMIC LOG */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h4 className="font-mono text-sm sm:text-base text-[#64ffda] tracking-[0.2em] uppercase flex items-center gap-3">
            <span className="w-3 h-[1px] bg-[#64ffda]"></span> Academic Path
          </h4>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300/10 before:to-transparent">
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#64ffda] shadow-[0_0_10px_#64ffda]" />
              <p className="text-white font-bold italic text-lg sm:text-xl uppercase tracking-tight mb-1">B.Sc. CSIT // Ongoing</p>
              <p className="text-slate-400 font-mono text-xs sm:text-sm uppercase mb-1">Bhaktapur Multiple Campus</p>
              <p className="text-slate-500 font-mono text-xs sm:text-sm uppercase">Tribhuvan University</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-slate-600" />
              <p className="text-slate-300 font-bold italic text-lg sm:text-xl uppercase tracking-tight mb-1">Higher Secondary</p>
              <p className="text-slate-400 font-mono text-xs sm:text-sm uppercase mb-1">Kathmandu Model College</p>
              <p className="text-slate-500 font-mono text-xs sm:text-sm uppercase">Major: Physics, Chemistry, Math, Bio</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: PERSONAL SPECIFICATIONS (HOBBIES) */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h4 className="font-mono text-sm sm:text-base text-[#64ffda] tracking-[0.2em] uppercase flex items-center gap-3">
            <span className="w-3 h-[1px] bg-[#64ffda]"></span> Beyond the Code
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hobbies.map((hobby) => (
              <motion.div 
                key={hobby.name} 
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col p-5 bg-white/[0.02] border border-white/5 rounded-xl group hover:border-[#64ffda]/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-2xl mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                  {hobby.icon}
                </span>
                <span className="text-slate-300 text-xs sm:text-sm font-mono tracking-widest uppercase group-hover:text-[#64ffda] transition-colors">
                  {hobby.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CORE PHILOSOPHY & SKILLS FOOTER */}
      <motion.div variants={itemVariants} className="bg-white/[0.02] p-8 rounded-xl border border-white/5 border-l-4 border-l-[#64ffda] mt-16 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
        <h4 className="font-mono text-xs sm:text-sm text-slate-400 tracking-[0.3em] uppercase mb-6">Core Philosophy</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {corePhilosophy.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 text-sm sm:text-base font-mono text-slate-300 group cursor-default"
            >
              <span className="text-[#64ffda] opacity-50 group-hover:opacity-100 transition-opacity">→</span> 
              <span className="group-hover:text-white transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
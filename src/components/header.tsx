"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

export default function Header({ onSectionChange }: HeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.header
      className="relative w-full pt-20 sm:pt-32 mb-20 sm:mb-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Decoration */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-[#64ffda] shadow-[0_0_10px_#64ffda]"
        />
        <span className="text-[#64ffda] font-mono text-xs sm:text-sm uppercase tracking-[0.3em]">
          Welcome to My World
        </span>
      </motion.div>

      {/* Hero Name */}
      <motion.div variants={itemVariants} className="relative mb-10 z-10">
        <h1 className="text-[12vw] sm:text-[9vw] font-black italic uppercase leading-[0.8] tracking-tighter-extreme">
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Sahaj</span> <br />
          <span className="text-outline hover:text-white transition-all duration-700 relative group cursor-pointer">
            Gyawali
            <span className="absolute -inset-4 bg-[#64ffda]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants} className="max-w-2xl mb-12">
        <p className="text-slate-400 font-mono text-sm sm:text-base leading-loose">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-indigo-400 text-2xl sm:text-3xl font-bold mb-4 inline-block">
            Aspiring Data Scientist
          </span>
          <br />
          Bridging the gap between raw data and actionable intelligence.
          <br /> Based in Kathmandu, Nepal.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
        <a
          href="/SGCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#64ffda] text-[#030712] font-bold font-mono text-xs sm:text-sm uppercase tracking-[0.2em] overflow-hidden rounded-sm transition-all hover:scale-105"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
          <span className="relative z-10 flex items-center gap-2">
            Download CV
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </span>
        </a>

        <button
          onClick={() => onSectionChange("projects")}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-bold font-mono text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm hover:border-[#64ffda] hover:text-[#64ffda] transition-all hover:bg-[#64ffda]/5"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </motion.div>
    </motion.header>
  );
}
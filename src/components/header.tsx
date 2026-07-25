"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import HeroFigure from "./HeroFigure";
import ResumeGateModal from "./ResumeGateModal";

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

export default function Header({ onSectionChange }: HeaderProps) {
  const [resumeGateOpen, setResumeGateOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.p variants={itemVariants} className="fig-caption mb-6">
          Portfolio — B.Sc. CSIT, Tribhuvan University
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display font-semibold text-ink leading-[1.02] text-[13vw] sm:text-[7vw] lg:text-[4.6vw] tracking-tight mb-6"
        >
          Sahaj
          <br />
          Gyawali
        </motion.h1>

        <motion.p variants={itemVariants} className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-lg mb-4">
          A <span className="text-ink font-medium">data scientist &amp; AI/ML engineer</span> who
          finds the fitted line through messy, real-world data — then ships it as software people
          actually use.
        </motion.p>

        <motion.p variants={itemVariants} className="font-mono text-xs text-ink-faint uppercase tracking-[0.14em] mb-10">
          Based in Kathmandu, Nepal
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <button onClick={() => setResumeGateOpen(true)} className="btn-primary">
            Download résumé
            <Download className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => onSectionChange("projects")} className="btn-secondary">
            View the work
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="hidden sm:block">
        <HeroFigure />
      </motion.div>

      <ResumeGateModal open={resumeGateOpen} onClose={() => setResumeGateOpen(false)} />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export default function Navbar({ onSectionChange, currentSection }: NavbarProps) {
  const navLinks = [
    { name: "Home", id: "home", num: "01" },
    { name: "About", id: "about", num: "02" },
    { name: "Experience", id: "experience", num: "03" },
    { name: "Projects", id: "projects", num: "04" },
    { name: "Skills", id: "skills", num: "05" },
    { name: "Contact", id: "contact", num: "06" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4"
    >
      <div className="flex items-center gap-1 sm:gap-6 px-3 sm:px-6 py-2 sm:py-3 bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-w-[95vw] overflow-x-auto no-scrollbar">
        {navLinks.map((link) => {
          const isActive = currentSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => onSectionChange(link.id)}
              className="relative px-2 sm:px-3 py-2 group whitespace-nowrap"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="flex items-center gap-2">
                <span
                  className={`hidden sm:inline-block font-mono text-[10px] transition-colors ${
                    isActive ? "text-[#64ffda]" : "text-slate-500 group-hover:text-[#64ffda]"
                  }`}
                >
                  {link.num}
                </span>
                <span
                  className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest transition-colors ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
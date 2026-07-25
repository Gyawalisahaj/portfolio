"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Log", id: "experience" },
  { name: "Work", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ onSectionChange, currentSection }: NavbarProps) {
  return (
    <>
      {/* Desktop: fixed margin column, like a notebook's side margin */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:flex fixed left-0 top-0 h-screen w-[220px] flex-col justify-between border-r border-line px-8 py-10 z-40"
      >
        <div>
          <a href="#home" className="font-display text-lg font-semibold text-ink block mb-10">
            SG
          </a>
          <div className="font-mono text-[10px] tracking-[0.15em] text-ink-faint leading-relaxed uppercase">
            27.7172° N<br />
            85.3240° E<br />
            Kathmandu
          </div>
        </div>

        <ul className="space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => onSectionChange(link.id)}
                  className="group relative flex items-center gap-3 py-2 w-full text-left"
                >
                  <motion.span
                    animate={{ width: isActive ? 16 : 6, backgroundColor: isActive ? "var(--brick)" : "var(--line-strong)" }}
                    transition={{ duration: 0.25 }}
                    className="h-[1.5px] shrink-0"
                  />
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                      isActive ? "text-ink" : "text-ink-faint group-hover:text-ink-soft"
                    }`}
                  >
                    {link.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-moss" />
          </span>
          Open to internships
        </div>
      </nav>

      {/* Mobile / tablet: slim top bar */}
      <nav
        aria-label="Section navigation"
        className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-line"
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="font-display text-base font-semibold text-ink">
            SG
          </a>
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[75vw]">
            {NAV_LINKS.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSectionChange(link.id)}
                  className={`font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1.5 whitespace-nowrap transition-colors ${
                    isActive ? "text-paper-raised bg-ink rounded-sm" : "text-ink-soft"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

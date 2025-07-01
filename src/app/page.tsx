"use client";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

const sections = [
  { name: "ABOUT", id: "about" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "PROJECTS", id: "projects" },
];

export default function Home() {
  const [active, setActive] = useState("about");

  const getSectionClass = (section: string) =>
    `absolute left-0 top-0 w-full transition-all duration-700 ease-in-out ${
      active === section
        ? "translate-x-0 opacity-100 z-10"
        : "translate-x-full opacity-0 pointer-events-none z-0"
    }`;

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col items-center">
      {/* Header */}
      <header className="mt-16 text-center">
        <h1 className="text-5xl font-extrabold">Your Name</h1>
        <div className="text-xl text-[#64ffda] font-medium mt-2">
          Front End Engineer
        </div>
        <p className="max-w-xl mx-auto mt-6 text-slate-300">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        {/* Navigation */}
        <nav className="mt-10 flex justify-center gap-10">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`uppercase tracking-widest text-lg px-2 py-1 transition ${
                active === s.id
                  ? "text-[#64ffda] font-semibold border-b-2 border-[#64ffda]"
                  : "text-slate-400 hover:text-[#64ffda]"
              }`}
              onClick={() => setActive(s.id)}
            >
              {s.name}
            </button>
          ))}
        </nav>
      </header>
      {/* Sliding Content */}
      <div className="relative w-full max-w-5xl h-[360px] mt-16 overflow-hidden">
        <div className={getSectionClass("about")}>
          <AboutSection />
        </div>
        <div className={getSectionClass("experience")}>
          <ExperienceSection />
        </div>
        <div className={getSectionClass("projects")}>
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";



const sections = [
  { name: "ABOUT", id: "about" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "PROJECTS", id: "projects" },
  { name: "EDUCATION", id: "education" },
  { name: "CONTACTS", id: "contact" }
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
      <div className="w-60 h-60 mt-16 overflow-hidden rounded-xl shadow-lg">
        <img
        src="/image.jpg"
        alt="Your Name"
        className="w-60 h-60 rounded-full border-4 border-[#233554] mb-3 shadow-lg object-cover"
        />
      </div>
      {/* Header */}
      <header className="mt-8 text-center">
        <h1 className="text-5xl font-extrabold">SAHAJ GYAWALI</h1>
        <div className="text-xl text-[#64ffda] font-medium mt-2">
          Student
        </div>
        <p className="max-w-xl mx-auto mt-6 text-slate-300">
          I’m passionate about building practical AI solutions using machine learning, deep learning, and data science.
        </p>
        <div className="flex flex-col items-center">
  {/* Profile Image, Name, Title */}
        <a
          href="/SGCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-[#64ffda] text-[#0a192f] rounded font-semibold shadow hover:bg-[#52c7b8] transition"
        >
         Download CV
        </a>
</div>
        {/* Navigation */}
        <nav className="mt-10 flex justify-center  flex-wrap gap-4 sm:gap-10 ">
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
      <div className="relative w-full max-w-5xl h-[790px] mt-16 overflow-hidden ">
        <div className={getSectionClass("about")}>
          <AboutSection />
        </div>
        <div className={getSectionClass("experience")}>
          <ExperienceSection />
        </div>
        <div className={getSectionClass("projects")}>
          <ProjectsSection />
        </div>
        <div className={getSectionClass("education")}>
          <EducationSection />
        </div>
        <div className={getSectionClass("contact")}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
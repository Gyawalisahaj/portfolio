"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/header";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/ExperinceSection";
import ContactSection from "../components/ContactSection";

const sections = [
  { id: "home", component: Header },
  { id: "about", component: AboutSection },
  { id: "experience", component: EducationSection },
  { id: "projects", component: ProjectsSection },
  { id: "skills", component: SkillSection },
  { id: "contact", component: ContactSection },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSection = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const currentSection = sections[currentIndex].id;

  return (
    <main className="relative min-h-screen selection:bg-[#64ffda] selection:text-black">
      {/* FIXED TOP NAVIGATION BAR */}
      <Navbar onSectionChange={(sectionId) => {
        const index = sections.findIndex(s => s.id === sectionId);
        if (index !== -1) goToSection(index);
      }} currentSection={currentSection} />

      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#030712]">
        <Image
          src="/bg-cinematic.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/60 to-[#030712]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* SLIDER CONTAINER */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sections.map((section, index) => {
              const Component = section.component;
              return (
                <div key={section.id} className="w-full h-full flex-shrink-0 flex items-center justify-center">
                  <div className="w-full max-w-7xl px-6">
                    {section.id === "home" ? (
                      <Header onSectionChange={(sectionId: string) => {
                        const idx = sections.findIndex(s => s.id === sectionId);
                        if (idx !== -1) goToSection(idx);
                      }} />
                    ) : section.id === "about" ? (
                      <AboutSection />
                    ) : section.id === "experience" ? (
                      <EducationSection />
                    ) : section.id === "projects" ? (
                      <ProjectsSection />
                    ) : section.id === "skills" ? (
                      <SkillSection />
                    ) : (
                      <ContactSection />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* NAVIGATION ARROWS */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#64ffda]/20 backdrop-blur-sm border border-[#64ffda]/30 rounded-full flex items-center justify-center text-[#64ffda] hover:bg-[#64ffda]/30 transition-all duration-300 group"
            aria-label="Previous section"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#64ffda]/20 backdrop-blur-sm border border-[#64ffda]/30 rounded-full flex items-center justify-center text-[#64ffda] hover:bg-[#64ffda]/30 transition-all duration-300 group"
            aria-label="Next section"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* SLIDER INDICATORS */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#64ffda] scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
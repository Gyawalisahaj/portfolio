"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/header";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "home":
        return (
          <section id="hero" className="min-h-screen flex items-center">
            <Header onSectionChange={setCurrentSection} />
          </section>
        );
      case "about":
        return (
          <section id="about" className="min-h-screen flex items-center">
            <AboutSection />
          </section>
        );
      case "experience":
        return (
          <section id="experience" className="min-h-screen flex items-center">
            <EducationSection />
          </section>
        );
      case "projects":
        return (
          <section id="projects" className="min-h-screen flex items-center">
            <ProjectsSection />
          </section>
        );
      case "skills":
        return (
          <section id="skills" className="min-h-screen flex items-center">
            <SkillSection />
          </section>
        );
      case "contact":
        return (
          <section id="contact" className="min-h-screen flex items-center">
            <ContactSection />
          </section>
        );
      default:
        return (
          <section id="hero" className="min-h-screen flex items-center">
            <Header onSectionChange={setCurrentSection} />
          </section>
        );
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-[#64ffda] selection:text-black">
      {/* FIXED TOP NAVIGATION BAR */}
      <Navbar onSectionChange={setCurrentSection} currentSection={currentSection} />

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
        {/* CURRENT SECTION - FULL SCREEN */}
        {renderCurrentSection()}
      </div>
    </main>
  );
}
"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/header";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/ExperinceSection";
import ContactSection from "../components/ContactSection";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentSection(sectionId);
  };

  // Detect which section is currently in view
  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "skills", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar onSectionChange={scrollToSection} currentSection={currentSection} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24">
          <div className="w-full max-w-4xl xl:max-w-6xl mx-auto">
            <Header onSectionChange={scrollToSection} />
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-4xl mx-auto">
            <AboutSection />
          </div>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-4xl mx-auto">
            <EducationSection />
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-4xl mx-auto">
            <ProjectsSection />
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-4xl mx-auto">
            <SkillSection />
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-4xl mx-auto">
            <ContactSection />
          </div>
        </section>
      </div>
    </main>
  );
}
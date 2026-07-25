"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/header";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentSection(sectionId);
  };

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar onSectionChange={scrollToSection} currentSection={currentSection} />

      <div className="lg:pl-[220px]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-0">
            <div className="w-full">
              <Header onSectionChange={scrollToSection} />
            </div>
          </section>

          <section id="about" className="py-24 sm:py-32">
            <AboutSection />
          </section>

          <section id="experience" className="py-24 sm:py-32">
            <ExperienceSection />
          </section>

          <section id="projects" className="py-24 sm:py-32">
            <ProjectsSection />
          </section>

          <section id="skills" className="py-24 sm:py-32">
            <SkillSection />
          </section>

          <section id="contact" className="py-24 sm:py-32">
            <ContactSection />
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}

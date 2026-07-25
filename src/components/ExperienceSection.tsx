"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Developer",
      company: "Ambition College HackFest 2025",
      location: "Kathmandu, NP",
      period: "72-hour build",
      description:
        "Selected as a core team member to architect and deploy a complete tech solution within a 3-day, 2-night hackathon.",
      bullets: [
        "Collaborated in a cross-functional team of four, leading integration between AI models and the frontend/backend.",
        "Facilitated real-time brainstorming and rapid prototyping to pivot ideas into working features under strict deadlines.",
        "Kept version control and coordination clean with Git, enabling smooth deploys during late-night sessions.",
        "Shipped a production-ready prototype that demonstrated practical problem-solving under real constraints.",
      ],
      tags: ["Teamwork", "AI Integration", "Rapid Prototyping", "Frontend", "Backend", "Git"],
    },
  ];

  return (
    <div className="w-full">
      <p className="fig-caption mb-4">Fig. 3 — Field log</p>
      <div className="flex items-baseline gap-6 mb-14 border-b border-line pb-8">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="surface rounded-sm p-8 sm:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-moss mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss" />
                  {exp.period}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-2">
                  {exp.title}
                </h3>
                <p className="text-ink-soft font-mono text-xs uppercase tracking-wide">
                  {exp.company} <span className="text-ink-faint mx-1">·</span> {exp.location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-5">
                <p className="text-ink-soft leading-relaxed italic border-l-2 border-line-strong pl-4">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                      <span className="text-brick mt-1 shrink-0">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 border-t md:border-t-0 md:border-l border-line pt-6 md:pt-0 md:pl-8">
                <div>
                  <h4 className="fig-caption mb-3">Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 border border-line-strong rounded-sm text-ink-soft font-mono text-[10px] uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="/certificate.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brick font-mono text-xs uppercase tracking-wide hover:text-brick-dark transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View proof
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  const hobbies = [
    { name: "Cricket", icon: "🏏" },
    { name: "Photography", icon: "📸" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Continuous Learning", icon: "📚" },
  ];

  const corePhilosophy = [
    "Applied statistics & linear algebra",
    "End-to-end project architecture",
    "Deterministic problem solving",
    "Scalable, production-minded builds",
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full"
    >
      <motion.p variants={item} className="fig-caption mb-4">
        Background & Education
      </motion.p>
      <motion.div variants={item} className="flex items-baseline gap-6 mb-12 border-b border-line pb-8">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">About</h2>
      </motion.div>

      <motion.p variants={item} className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-3xl mb-16">
        I&apos;m a <span className="text-ink font-medium">CSIT student at Tribhuvan University</span>{" "}
        specializing in data science and artificial intelligence. My work focuses on engineering end-to-end machine learning pipelines, building robust backend architectures, and deploying data-driven applications to production.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div variants={item}>
          <h3 className="fig-caption mb-6">Academic path</h3>
          <div className="space-y-8 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-line-strong" />

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full bg-brick" />
              <p className="text-ink font-display font-semibold text-lg mb-1">
                B.Sc. CSIT <span className="text-ink-faint font-body font-normal text-sm">— ongoing</span>
              </p>
              <p className="text-ink-soft font-mono text-xs uppercase tracking-wide mb-0.5">
                Bhaktapur Multiple Campus
              </p>
              <p className="text-ink-faint font-mono text-xs uppercase tracking-wide">Tribhuvan University</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full bg-ink-faint" />
              <p className="text-ink font-display font-semibold text-lg mb-1">Higher Secondary</p>
              <p className="text-ink-soft font-mono text-xs uppercase tracking-wide mb-0.5">
                Kathmandu Model College
              </p>
              <p className="text-ink-faint font-mono text-xs uppercase tracking-wide">
                Physics, Chemistry, Math, Biology
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h3 className="fig-caption mb-6">Personal Interests</h3>
          <div className="grid grid-cols-2 gap-3">
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.name}
                whileHover={{ y: -3 }}
                className="surface rounded-sm p-4 flex flex-col gap-2"
              >
                <span className="text-xl">{hobby.icon}</span>
                <span className="text-ink-soft text-xs font-mono uppercase tracking-wide">
                  {hobby.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={item} className="surface rounded-sm p-8 border-l-[3px]" style={{ borderLeftColor: "var(--brick)" }}>
        <h3 className="fig-caption mb-6">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {corePhilosophy.map((line, i) => (
            <div key={i} className="flex items-center gap-3 text-ink-soft text-sm">
              <span className="text-brick">→</span>
              {line}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

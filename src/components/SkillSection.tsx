"use client";
import { motion } from "framer-motion";

export default function SkillSection() {
  const skillGroups = [
    { cat: "Core languages", items: ["Python", "MySQL", "C++"], details: "Database logic & fundamentals" },
    { cat: "Data science & viz", items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn"], details: "Pipelines & storytelling" },
    { cat: "AI / machine learning", items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch"], details: "Predictive modeling & neural nets" },
    { cat: "Engineering & web", items: ["FastAPI", "React", "Next.js", "Docker"], details: "Deployment & interfaces" },
    { cat: "Dev environment", items: ["Git", "GitHub", "Linux", "Jupyter", "VS Code"], details: "Version control & workflow" },
  ];

  const softSkills = ["Problem solving", "Critical thinking", "Communication", "Software optimization"];

  return (
    <div className="w-full">
      <p className="fig-caption mb-4">Table 1 — Technical skills</p>
      <div className="flex items-baseline gap-6 mb-12 border-b border-line pb-8">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">Skills</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="surface rounded-sm p-5"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] text-indigo uppercase tracking-[0.14em] mb-1">{group.cat}</p>
                  <p className="text-ink-faint font-mono text-[10px] uppercase tracking-wide">{group.details}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[60%]">
                  {group.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 border border-line-strong text-ink-soft font-mono text-[10px] uppercase tracking-wide rounded-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="surface rounded-sm p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink mb-6">Soft skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  className="flex items-center gap-2.5 p-3 bg-paper rounded-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brick shrink-0" />
                  <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wide">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-line flex items-end justify-between">
            <div className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.2em] leading-relaxed">
              Status
              <br />
              <span className="text-moss">Learning in public</span>
            </div>
            <div className="flex gap-1 items-end h-6">
              {[10, 18, 12, 22, 16].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 4 }}
                  whileInView={{ height: h }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="w-1 bg-brick/40 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

const projects = [
  {
    title: "House Prediction Model",
    details: [
      "→ Created prediction model using RandomForestRegressor to predict house price with good accuracy.",
      "→ Performed data preprocessing, including handling missing values, encoding categorical features, and feature scaling.",
      "→ Used Pandas and Numpy for data manipulation and Matplotlib & Seaborn for data & feature visualization.",
      "→ Used Scikit-learn for preprocessing and evaluation.",
    ],
    tech: [
      "Random Forest Regressor",
      "Scikit_learn",
      "Numpy/Pandas",
      "Seaborn/Matplotlib",
      "Fastapi",
      "React",
    ],
  },
  
];

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div>
        {projects.map((project, idx) => (
          <div key={project.title} className="mb-4">
            <button
              className="text-xl font-semibold text-[#64ffda] focus:outline-none flex items-center gap-2"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{project.title}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  openIndex === idx ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === idx ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {openIndex === idx && (
                <>
                  {project.details.map((desc, i) => (
                    <p key={i} className="mt-1 text-slate-300">
                      {desc}
                    </p>
                  ))}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
"use client";
import { useState } from "react";

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "HOUSE PRICE PREDICTION",
      tag: "AI / ML",
      year: "2024",
      github: "https://github.com/Gyawalisahaj/Nepal_Housepricepred",
      details: [
        "Created prediction model using RandomForestRegressor to predict house price with high accuracy.",
        "Performed data preprocessing: handling missing values, encoding categorical features, and feature scaling.",
        "Utilized Pandas and Numpy for manipulation; Matplotlib & Seaborn for feature visualization.",
        "Implemented Scikit-learn for model training, hyperparameter tuning, and performance evaluation."
      ],
      tech: ["Random Forest", "Scikit-learn", "Numpy", "Pandas", "FastAPI", "React"]
    },
    {
      title: "NEPALI MOVIE RECOMMENDATION",
      tag: "NLP / WEB",
      year: "2024",
      github: "https://github.com/Gyawalisahaj/Nepalimovierecommendation",
      details: [
        "Developed a full-stack recommendation engine using content-based filtering with Cosine Similarity.",
        "Engineered a custom web scraper using BeautifulSoup to collect movie metadata from online sources.",
        "Implemented JWT-based authentication in FastAPI to manage secure user sessions and protected routes.",
        "Built a dynamic React interface with live search suggestions and integrated movie posters/trailers."
      ],
      tech: ["FastAPI", "JWT Auth", "BeautifulSoup", "Cosine Similarity", "Scikit-learn", "React", "TailwindCSS"]
    }
  ];

  return (
    <div className="space-y-6">
      {projects.map((p, i) => {
        const isExpanded = expandedIndex === i;
        
        return (
          <div 
            key={i} 
            onClick={() => setExpandedIndex(isExpanded ? null : i)}
            className={`lance-card group cursor-pointer transition-all duration-500 ${isExpanded ? 'border-[#64ffda]/40 bg-white/[0.04]' : ''}`}
          >
            {/* TOP ROW: PERSISTENT VIEW */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6 md:gap-10">
                <span className={`font-mono text-xs transition-colors duration-300 ${isExpanded ? 'text-[#64ffda]' : 'text-slate-600 group-hover:text-[#64ffda]'}`}>
                  0{i + 1}
                </span>
                <h3 className={`text-2xl md:text-4xl font-bold italic tracking-tighter transition-all duration-500 ${isExpanded ? 'text-white translate-x-2' : 'group-hover:translate-x-4'}`}>
                  {p.title}
                </h3>
              </div>
              <div className="text-right flex flex-col items-end">
                <p className="text-[#64ffda] font-mono text-[10px] tracking-widest uppercase">{p.tag}</p>
                <p className="text-slate-600 font-mono text-[10px]">{p.year}</p>
                <span className={`text-[10px] mt-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  {isExpanded ? '▲' : '▼'}
                </span>
              </div>
            </div>

            {/* EXPANDABLE DETAILS */}
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[800px] mt-10 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6 border-t border-white/5">
                
                {/* Description List */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase mb-4">Implementation Details</h4>
                  {p.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <span className="text-[#64ffda] font-bold text-xs mt-1">→</span>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech & Links */}
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-[#64ffda]/5 border border-[#64ffda]/10 text-[#64ffda] font-mono text-[9px] uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevents collapsing when clicking link
                      className="inline-flex items-center gap-4 group/link"
                    >
                      <span className="text-white font-mono text-[10px] uppercase tracking-[0.4em] group-hover/link:text-[#64ffda] transition-colors">Source Code</span>
                      <span className="h-[1px] w-8 bg-[#64ffda] group-hover/link:w-12 transition-all duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.38-3.6 5.3 5.3 0 0 0-.1-3.5s-1.1-.35-3.5 1.25a12.1 12.1 0 0 0-6.4 0C6.1 2.5 5 2.85 5 2.85a5.3 5.3 0 0 0-.1 3.5A5.2 5.2 0 0 0 3.5 9.94c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8.5 19v3"></path>
  </svg>
);

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [

    {
      title: "COVID-19 DATA ANALYSIS & VISUALIZATION",
      tag: "DATA ANALYSIS / EDA / VISUALIZATION",
      year: "2024",
      github: "https://github.com/Gyawalisahaj/Covid19-Dataanalysis",
      details: [
        "Performed exploratory data analysis (EDA) on COVID-19 datasets to identify global and country-level trends.",
        "Visualized confirmed, deaths, recovered, and active cases worldwide and specifically for Nepal using line plots and bar charts.",
        "Created heatmaps to compare countries and WHO regions, highlighting concentrations of confirmed cases, recovery rates, and active cases.",
        "Implemented sorting functions to identify the top 5 countries by confirmed, recovered, active cases, and deaths.",
        "Focused on clear, insightful visualizations using Matplotlib and Seaborn for actionable interpretation of pandemic trends."
      ],
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "HOUSE PRICE PREDICTION",
      tag: "AI / ML",
      year: "2025",
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
      year: "2025",
      github: "https://github.com/Gyawalisahaj/Nepalimovierecommendation",
      details: [
        "Developed a full-stack recommendation engine using content-based filtering with Cosine Similarity logic.",
        "Engineered a custom web scraper using BeautifulSoup to aggregate movie metadata and plot synopses.",
        "Built an interactive UI using Streamlit to provide real-time recommendations and live movie details.",
        "Implemented NLP techniques for text vectorization using Scikit-learn to measure feature similarities."
      ],
      tech: ["Python", "Scikit-learn", "Cosine Similarity", "BeautifulSoup", "Streamlit", "Pandas"]
    },
    {
      title: "LLM-POWERED LINKEDIN Generator",
      tag: "NLP / LLM / WEB",
      year: "2025",
      github: "https://github.com/Gyawalisahaj/Linkedinpostllm",
      live: "https://linkedinpostllm-fbtk8rm9aqxbjgwcoyossr.streamlit.app/",
      details: [
        "Developed a sophisticated LLM-powered content tool that bridges raw data analysis and creative LinkedIn post generation.",
        "Implemented a 'Data-to-Draft' pipeline using preprocess.py for metadata extraction, hashtag unification, and style alignment.",
        "Built a few-shot learning engine (few_shot.py) to retrieve contextually relevant examples from processed_posts.json for dynamic prompt engineering.",
        "Integrated LangChain with Groq's llama-3.3-70b-versatile model for fast, style-aligned content generation.",
        "Delivered an intuitive Streamlit dashboard allowing toggling of post length, language (English/Nepali), and specific tags."
      ],
      tech: ["Python", "LangChain", "Groq Llama 3.3", "Streamlit", "Pandas"]
    },
    {
      title: "TELCO CUSTOMER CHURN",
      tag: "ML / WEB / DATA SCIENCE",
      year: "2026",
      github: "https://github.com/Gyawalisahaj/telco-churn-prediction",
      live: "https://telco-churn-prediction-hq2y2n5cf5prntakqy97er.streamlit.app/",
      details: [
        "Developed a production-ready churn prediction system bridging research notebooks to an interactive UI.",
        "Implemented a clean separation of concerns: Pydantic for data validation, Model Service for business logic, and FastAPI + Streamlit for delivery.",
        "Loaded and served trained ANN model (.keras) and scaler (.pkl) using a Singleton pattern for efficient inference.",
        "Enhanced UX with churn probability, risk levels, and retention recommendations displayed on a real-time Streamlit dashboard."
      ],
      tech: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "Streamlit"]
    },
    {
      title: "MEDIQUERY AI — MEDICAL RAG CHATBOT",
      tag: "AI / NLP / FULL-STACK",
      year: "2026",
      github: "https://github.com/Gyawalisahaj/MED_CHATBOT",
      details: [
        "Designed and developed a Retrieval-Augmented Generation (RAG) chatbot that lets users query medical textbooks (e.g. Harrison's, Guyton, Kumar & Clark's) and get answers with exact page citations.",
        "Built a retrieval pipeline using Sentence Transformers for semantic search over ingested PDF chunks, paired with Groq's high-speed inference running Llama 3.3-70b for answer generation.",
        "Developed a modular FastAPI backend (routes, RAG pipeline, services, schemas) and a Next.js/React frontend with chat, auth, and conversation-state management.",
        "Implemented dual persistence — SQLite for chat history and PostgreSQL for user authentication — and fully containerized the stack with Docker and Docker Compose."
      ],
      tech: ["Python", "FastAPI", "Next.js", "Groq Llama 3", "Docker", "SQLite", "PostgreSQL"]
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter">Featured Work</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="space-y-4">
        {projects.map((p, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <motion.div
              key={i}
              layout
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className={`group cursor-pointer glass rounded-xl overflow-hidden transition-all duration-500 hover:border-[#64ffda]/30 ${isExpanded ? 'bg-white/[0.05] border-[#64ffda]/50 shadow-[0_0_30px_rgba(100,255,218,0.1)]' : 'bg-white/[0.02] border-white/5'
                }`}
            >
              {/* TOP ROW: PERSISTENT VIEW */}
              <motion.div layout className="p-6 sm:p-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div className="flex items-center gap-4 md:gap-8">
                  <span className={`font-mono text-sm transition-colors duration-300 ${isExpanded ? 'text-[#64ffda]' : 'text-slate-500 group-hover:text-[#64ffda]'}`}>
                    0{i + 1}
                  </span>
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold italic tracking-tight transition-all duration-500 ${isExpanded ? 'text-white' : 'text-slate-300 group-hover:text-white group-hover:translate-x-2'}`}>
                    {p.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 md:gap-8 w-full md:w-auto">
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-[#64ffda] font-mono text-[10px] tracking-widest uppercase">{p.tag}</span>
                    <span className="text-slate-500 font-mono text-xs">{p.year}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#64ffda]/10 group-hover:border-[#64ffda]/30 transition-all"
                  >
                    ▼
                  </motion.div>
                </div>
              </motion.div>

              {/* EXPANDABLE DETAILS */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 pt-0 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-t border-white/5 mt-2">

                      {/* Description List */}
                      <div className="md:col-span-2 space-y-4 pt-6">
                        <h4 className="font-mono text-[11px] text-slate-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-[#64ffda]" />
                          Project Scope
                        </h4>
                        {p.details.map((detail, idx) => (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + (idx * 0.1) }}
                            key={idx}
                            className="flex gap-4 group/item"
                          >
                            <ArrowUpRight className="w-4 h-4 text-[#64ffda] shrink-0 mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                            <p className="text-slate-300 text-sm leading-relaxed">
                              {detail}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech & Links */}
                      <div className="space-y-8 pt-6">
                        <div>
                          <h4 className="font-mono text-[11px] text-slate-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-[#64ffda]" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {p.tech.map((t, tIdx) => (
                              <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 + (tIdx * 0.05) }}
                                key={t}
                                className="px-3 py-1.5 bg-[#64ffda]/5 border border-[#64ffda]/20 text-[#64ffda] font-mono text-[10px] uppercase tracking-wider rounded-md"
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 grid gap-4 border-t border-white/10">
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="group/link flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                            >
                              <span className="text-slate-400 group-hover/link:text-white transition-colors">
                                <GithubIcon />
                              </span>
                              <span className="text-sm text-slate-300 group-hover/link:text-white font-medium">View Source</span>
                              <ArrowUpRight className="w-4 h-4 text-[#64ffda] ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                            </a>
                          )}
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="group/link flex items-center gap-3 px-4 py-3 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 border border-[#64ffda]/20 rounded-lg transition-all"
                            >
                              <ExternalLink className="w-4 h-4 text-[#64ffda]" />
                              <span className="text-sm text-[#64ffda] font-medium">Live Demo</span>
                              <ArrowUpRight className="w-4 h-4 text-[#64ffda] ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
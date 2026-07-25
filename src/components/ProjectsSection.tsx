"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.38-3.6 5.3 5.3 0 0 0-.1-3.5s-1.1-.35-3.5 1.25a12.1 12.1 0 0 0-6.4 0C6.1 2.5 5 2.85 5 2.85a5.3 5.3 0 0 0-.1 3.5A5.2 5.2 0 0 0 3.5 9.94c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8.5 19v3"></path>
  </svg>
);

// Ordered most-recent-first — the log reads like a running record of the work.
const projects = [
  {
    title: "MediQuery AI — Medical RAG Chatbot",
    tag: "AI / NLP / Full-stack",
    year: "2026",
    github: "https://github.com/Gyawalisahaj/MED_CHATBOT",
    details: [
      "Designed a Retrieval-Augmented Generation chatbot for medical students and professionals to query medical textbooks directly.",
      "Built a retrieval pipeline with Sentence Transformers for semantic search, served through Groq's Llama 3.3-70b for fast inference.",
      "Shipped a RESTful API in FastAPI with a Streamlit frontend, returning precise answers alongside exact page citations.",
      "Persisted chat history in SQLite and containerized the full stack with Docker and Docker Compose.",
    ],
    tech: ["Python", "FastAPI", "Streamlit", "Groq Llama 3", "Docker", "SQLite"],
  },
  {
    title: "Telco Customer Churn",
    tag: "ML / Web / Data science",
    year: "2026",
    github: "https://github.com/Gyawalisahaj/telco-churn-prediction",
    live: "https://telco-churn-prediction-hq2y2n5cf5prntakqy97er.streamlit.app/",
    details: [
      "Built a production-ready churn prediction system bridging research notebooks to an interactive UI.",
      "Separated concerns cleanly: Pydantic for validation, a model service for business logic, FastAPI + Streamlit for delivery.",
      "Served a trained ANN model (.keras) and scaler (.pkl) via a singleton pattern for efficient inference.",
      "Surfaced churn probability, risk level, and retention recommendations on a real-time dashboard.",
    ],
    tech: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "Streamlit"],
  },
  {
    title: "LLM-Powered LinkedIn Generator",
    tag: "NLP / LLM / Web",
    year: "2025",
    github: "https://github.com/Gyawalisahaj/Linkedinpostllm",
    live: "https://linkedinpostllm-fbtk8rm9aqxbjgwcoyossr.streamlit.app/",
    details: [
      "Built a content tool bridging raw data analysis and LinkedIn post generation — a 'data-to-draft' pipeline.",
      "Wrote a few-shot retrieval engine pulling contextually relevant examples for dynamic prompt engineering.",
      "Integrated LangChain with Groq's Llama-3.3-70b-versatile for fast, style-aligned generation.",
      "Shipped a Streamlit dashboard with controls for post length, language (English/Nepali), and tags.",
    ],
    tech: ["Python", "LangChain", "Groq Llama 3.3", "Streamlit", "Pandas"],
  },
  {
    title: "Nepali Movie Recommendation",
    tag: "NLP / Web",
    year: "2025",
    github: "https://github.com/Gyawalisahaj/Nepalimovierecommendation",
    details: [
      "Built a full-stack recommendation engine using content-based filtering with cosine similarity.",
      "Wrote a BeautifulSoup scraper to aggregate Nepali movie metadata and plot synopses from scratch.",
      "Delivered real-time recommendations and movie details through an interactive Streamlit UI.",
      "Vectorized text with Scikit-learn to measure feature similarity across the catalog.",
    ],
    tech: ["Python", "Scikit-learn", "Cosine Similarity", "BeautifulSoup", "Streamlit"],
  },
  {
    title: "House Price Prediction",
    tag: "AI / ML",
    year: "2025",
    github: "https://github.com/Gyawalisahaj/Nepal_Housepricepred",
    details: [
      "Trained a RandomForestRegressor to predict Nepali house prices with strong accuracy.",
      "Handled missing values, categorical encoding, and feature scaling as part of a full preprocessing pipeline.",
      "Visualized features with Matplotlib and Seaborn to guide model iteration.",
      "Tuned hyperparameters and evaluated performance with Scikit-learn.",
    ],
    tech: ["Random Forest", "Scikit-learn", "Pandas", "FastAPI", "React"],
  },
  {
    title: "COVID-19 Data Analysis",
    tag: "Data analysis / EDA",
    year: "2024",
    github: "https://github.com/Gyawalisahaj/Covid19-Dataanalysis",
    details: [
      "Ran exploratory data analysis on global COVID-19 datasets to surface country-level and global trends.",
      "Visualized confirmed, death, recovery, and active cases worldwide and for Nepal specifically.",
      "Built heatmaps comparing countries and WHO regions across case concentration and recovery rate.",
      "Ranked the top five countries by confirmed, recovered, active, and death counts.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <p className="fig-caption mb-4">Fig. 4 — Research log, 2024–2026</p>
      <div className="flex items-baseline gap-6 mb-10 border-b border-line pb-8">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">Selected work</h2>
      </div>

      <div className="space-y-3">
        {projects.map((p, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={p.title}
              layout
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className={`cursor-pointer surface rounded-sm overflow-hidden transition-colors duration-300 ${
                isExpanded ? "border-brick/40" : "hover:border-line-strong"
              }`}
            >
              <motion.div layout className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-ink-faint w-10 shrink-0">{p.year}</span>
                  <h3 className={`font-display text-lg sm:text-xl font-semibold transition-colors ${isExpanded ? "text-brick" : "text-ink"}`}>
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-6 pl-[60px] sm:pl-0">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">{p.tag}</span>
                  <motion.span animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.25 }} className="text-ink-faint text-lg leading-none">
                    +
                  </motion.span>
                </div>
              </motion.div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pb-8 pt-2 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-line">
                      <div className="md:col-span-2 space-y-3 pt-6">
                        {p.details.map((d, idx) => (
                          <div key={idx} className="flex gap-3">
                            <ArrowUpRight className="w-4 h-4 text-brick shrink-0 mt-1" />
                            <p className="text-sm text-ink-soft leading-relaxed">{d}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-6 pt-6">
                        <div>
                          <h4 className="fig-caption mb-3">Tech stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                              <span key={t} className="px-2.5 py-1 bg-moss-tint text-moss font-mono text-[10px] uppercase tracking-wide rounded-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="grid gap-3 pt-4 border-t border-line">
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-3 px-4 py-3 border border-line-strong rounded-sm hover:border-ink transition-colors text-sm text-ink-soft hover:text-ink"
                            >
                              <GithubIcon />
                              Source
                              <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                            </a>
                          )}
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-3 px-4 py-3 bg-brick-tint rounded-sm hover:bg-brick/15 transition-colors text-sm text-brick"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              Live demo
                              <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
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

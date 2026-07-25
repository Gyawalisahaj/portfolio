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
      "Developed a Retrieval-Augmented Generation (RAG) chatbot allowing medical professionals to query textbooks with precise page citations.",
      "Implemented a semantic retrieval pipeline using Sentence Transformers for PDF chunking and embedding, integrated with Groq's Llama 3.3-70b for low-latency inference.",
      "Engineered a modular FastAPI backend with decoupled layers for routing, RAG processing, and Pydantic validation.",
      "Integrated SQLite for local chat history persistence and PostgreSQL for secure user authentication.",
      "Created an automated ingestion script for seamless indexing of new PDF materials into the vector store.",
      "Containerized the application using Docker and Docker Compose for consistent local and server deployments.",
    ],
    tech: ["Python", "FastAPI", "Next.js", "Groq Llama 3", "Docker", "SQLite", "PostgreSQL"],
  },
  {
    title: "Telco Customer Churn",
    tag: "ML / Web / Data science",
    year: "2026",
    github: "https://github.com/Gyawalisahaj/telco-churn-prediction",
    live: "https://telco-churn-prediction-hq2y2n5cf5prntakqy97er.streamlit.app/",
    details: [
      "Engineered an end-to-end churn prediction pipeline integrating machine learning models with an interactive web dashboard.",
      "Trained and evaluated XGBoost and Keras-based Artificial Neural Networks on telecom datasets mapped to Nepal's regional demographics.",
      "Structured backend architecture using Pydantic for data validation and a dedicated FastAPI model service layer.",
      "Optimized inference speed by serving the trained Keras model and scalers via a singleton pattern to maintain a warm state.",
      "Developed interactive Power BI dashboards utilizing GeoJSON overlays for regional churn analysis.",
      "Deployed a Streamlit application surfacing real-time churn probability, risk metrics, and retention strategies.",
    ],
    tech: ["Python", "TensorFlow", "XGBoost", "Scikit-learn", "FastAPI", "Streamlit", "Power BI"],
  },
  {
    title: "LLM-Powered LinkedIn Generator",
    tag: "NLP / LLM / Web",
    year: "2025",
    github: "https://github.com/Gyawalisahaj/Linkedinpostllm",
    live: "https://linkedinpostllm-fbtk8rm9aqxbjgwcoyossr.streamlit.app/",
    details: [
      "Developed a content generation tool automating the creation of style-consistent LinkedIn posts from minimal user inputs.",
      "Engineered a few-shot retrieval system to source contextually relevant historical posts for dynamic prompt augmentation.",
      "Integrated LangChain and Groq's Llama-3.3-70b-versatile model to achieve high-quality, low-latency text generation.",
      "Implemented NLP pipelines for style extraction and automated tag unification to enforce consistent content categorization.",
      "Deployed a Streamlit user interface featuring dynamic controls for post length, language, and topic filtering.",
      "Structured and processed historical dataset using Pandas and JSON to optimize retrieval performance.",
    ],
    tech: ["Python", "LangChain", "Groq Llama 3.3", "Streamlit", "Pandas"],
  },
  {
    title: "Nepali Movie Recommendation",
    tag: "NLP / Web",
    year: "2025",
    github: "https://github.com/Gyawalisahaj/Nepalimovierecommendation",
    live: "https://nepalimovierecommendation.vercel.app",
    details: [
      "Engineered a full-stack content-based recommendation system processing over 500 Nepali movie titles.",
      "Constructed a TF-IDF vectorization pipeline resulting in a 5000-dimension feature space, utilizing precomputed cosine-similarity matrices for optimal query times.",
      "Developed a custom BeautifulSoup scraper to aggregate and clean movie metadata and plot synopses from various web sources.",
      "Architected a FastAPI backend leveraging SQLAlchemy ORM to serve REST endpoints for movie metadata and similarity scoring.",
      "Built a responsive frontend with Streamlit, surfacing match confidence scores, posters, and detailed metadata.",
      "Formalized the core ML algorithm in Jupyter Notebooks to facilitate testing and continuous iteration.",
    ],
    tech: ["Python", "Scikit-learn", "TF-IDF", "FastAPI", "BeautifulSoup", "Streamlit"],
  },
  {
    title: "House Price Prediction",
    tag: "AI / ML",
    year: "2025",
    github: "https://github.com/Gyawalisahaj/Nepal_Housepricepred",
    live: "https://nepal-housepricepred.vercel.app",
    details: [
      "Developed an end-to-end real estate price prediction platform tailored to the Nepali housing market.",
      "Aggregated custom datasets via BeautifulSoup, capturing critical property attributes including location, area, and structural configuration.",
      "Executed data preprocessing pipelines encompassing missing value imputation, categorical encoding, and feature scaling.",
      "Trained and optimized a Random Forest Regressor using Scikit-learn, achieving robust predictive performance.",
      "Deployed the predictive model via a FastAPI backend to expose low-latency estimation endpoints.",
      "Designed and deployed a responsive React and Tailwind CSS frontend on Vercel for real-time user interaction.",
    ],
    tech: ["Random Forest", "Scikit-learn", "Pandas", "FastAPI", "React", "Tailwind"],
  },
  {
    title: "COVID-19 Data Analysis",
    tag: "Data analysis / EDA",
    year: "2024",
    github: "https://github.com/Gyawalisahaj/Covid19-Dataanalysis",
    details: [
      "Conducted comprehensive exploratory data analysis on global COVID-19 datasets, isolating macro trends and regional anomalies.",
      "Generated time-series visualizations tracking infection, recovery, and mortality rates, correlating global baselines with Nepal-specific data.",
      "Developed comparative heatmaps aggregating metrics across WHO regions to identify areas of critical transmission.",
      "Analyzed statistical distributions to rank key national metrics including active case density and recovery efficacy.",
      "Utilized Matplotlib and Seaborn for clear, publication-quality graphical representation of data.",
      "Maintained reproducibility by documenting the entire analytical pipeline within a structured Jupyter Notebook.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <p className="fig-caption mb-4">Selected Projects, 2024–2026</p>
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
              className={`cursor-pointer surface rounded-sm overflow-hidden transition-colors duration-300 ${isExpanded ? "border-brick/40" : "hover:border-line-strong"}`}
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
                              Source Code
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
                              Live Demo
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
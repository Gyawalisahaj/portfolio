"use client";
import { useState } from "react";

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
      title: "LLM-POWERED LINKEDIN CONTENT ENGINEERING",
      tag: "NLP / LLM / WEB",
      year: "2025",
      github: "https://github.com/Gyawalisahaj/LinkedInContentEngineer",
      live: "https://linkedinpostllm-fbtk8rm9aqxbjgwcoyossr.streamlit.app/", 
      details: [
        "Developed a sophisticated LLM-powered content tool that bridges raw data analysis and creative LinkedIn post generation.",
        "Implemented a 'Data-to-Draft' pipeline using preprocess.py for metadata extraction, hashtag unification, and style alignment.",
        "Built a few-shot learning engine (few_shot.py) to retrieve contextually relevant examples from processed_posts.json for dynamic prompt engineering.",
        "Integrated LangChain with Groq's llama-3.3-70b-versatile model for fast, style-aligned content generation.",
        "Delivered an intuitive Streamlit dashboard allowing toggling of post length, language (English/Nepali), and specific tags.",
        "Strategic enhancements planned include Engagement Prediction (Viral Score), Semantic Style Matching with vector embeddings, and Automated Image/Graphic pairing for complete content automation."
      ],
      tech: ["Python", "LangChain", "Groq Llama 3.3", "Streamlit", "Pandas"]
     },
    {
      title: "TELCO CUSTOMER CHURN PREDICTION",
      tag: "ML / WEB / DATA SCIENCE",
      year: "2026",
      github: "https://github.com/Gyawalisahaj/telco-churn-prediction",
      live: "https://telco-churn-prediction-hq2y2n5cf5prntakqy97er.streamlit.app/",
      details: [
        "Developed a production-ready churn prediction system bridging research notebooks to an interactive UI.",
        "Implemented a clean separation of concerns: Pydantic for data validation, Model Service for business logic, and FastAPI + Streamlit for delivery.",
        "Loaded and served trained ANN model (.keras) and scaler (.pkl) using a Singleton pattern for efficient inference.",
        "Enhanced UX with churn probability, risk levels, and retention recommendations displayed on a real-time Streamlit dashboard.",
        "Strategic enhancements include planned integration of SHAP/LIME for model explainability and GeoJSON-based province-level churn visualization."
      ],
      tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "FastAPI", "Streamlit", "Joblib", "GeoJSON"]
    },
];

  return (
    <div className="exp-card">
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
  </div>
  );
}
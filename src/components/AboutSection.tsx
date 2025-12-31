export default function AboutSection() {
  return (
    <div className="lance-card space-y-12">
      {/* SECTION HEADER */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.3em] uppercase">01 // Profile</span>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Mission Statement</h2>
      </div>

      {/* CORE INTRO */}
      <div className="max-w-3xl">
        <p className="text-slate-300 leading-relaxed text-lg">
          I am a <span className="text-white font-semibold">CSIT student at Tribhuvan University</span> with a 
          distinguished passion for Data Science and Artificial Intelligence. I architect solutions where 
          <span className="text-[#64ffda]"> mathematics, data, and algorithms</span> converge to solve 
          complex real-world challenges.
        </p>
      </div>

      {/* TECHNICAL FOCUS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] text-[#64ffda] tracking-widest uppercase">Analysis & Viz</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Mastering the end-to-end pipeline using <span className="text-white">Pandas, NumPy, and SQL</span>. 
            Transforming raw noise into actionable visual narratives through <span className="text-white">Power BI and Seaborn</span>.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-mono text-[10px] text-[#64ffda] tracking-widest uppercase">Machine Learning</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Engineering predictive models with <span className="text-white">Scikit-learn</span>. 
            Deep focus on feature engineering, performance optimization, and rigorous model evaluation.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-mono text-[10px] text-[#64ffda] tracking-widest uppercase">Deep Learning</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Architecting neural networks using <span className="text-white">TensorFlow & Keras</span>. 
            Exploring high-level model workflows and scalable AI applications.
          </p>
        </div>
      </div>

      {/* BEYOND THE BASICS / FOOTER INFO */}
      <div className="bg-white/[0.03] p-6 rounded-sm border-l-2 border-[#64ffda]">
        <h4 className="font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-4">Core Philosophy</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {[
            "Applied Statistics & Linear Algebra",
            "End-to-End Project Architecture",
            "Deterministic Problem Solving",
            "Scalable Industry Solutions"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <span className="text-[#64ffda]">→</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CALL TO ACTION TEXT */}
      <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] pt-4">
        Currently seeking high-impact collaborations in the AI/ML landscape.
      </p>
    </div>
  );
}
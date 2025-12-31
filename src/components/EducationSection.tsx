export default function EducationSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="lance-card">
        <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.4em] mb-6 block uppercase">Academic Path</span>
        <div className="space-y-8">
          <div>
            <h4 className="text-white font-bold italic text-xl">CSIT BACHELORS</h4>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">Tribhuvan University / Ongoing</p>
          </div>
          <div>
            <h4 className="text-white font-bold italic text-xl">HIGHER SECONDARY</h4>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">KMC / 2020-2022</p>
          </div>
        </div>
      </div>
      
      <div className="lance-card border-[#64ffda]/20">
        <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.4em] mb-6 block uppercase">Experience</span>
        <h4 className="text-white font-bold italic text-xl">HACKFEST 2025</h4>
        <p className="text-slate-400 text-sm mt-4 leading-relaxed">
          Intensive 3-day rapid prototyping and AI integration. 
          Developed full-stack solutions under high-pressure environments.
        </p>
      </div>
    </div>
  );
}
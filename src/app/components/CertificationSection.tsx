export default function CertificationSection() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Certification</h2>

      {/* Hackathon Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-1">
          🧠 Hackathon Participation – Ambition College HackFest 2025
        </h3>
        <span className="text-[#64ffda]">Team Member</span>
        <span className="ml-4 text-slate-400">3 days, 2 nights</span>
        <p className="mt-2 text-slate-300">
          → The event lasted for 3 days and 2 nights, providing an intense yet exciting opportunity to build and present a complete tech solution within a limited timeframe.
        </p>
        <p className="mt-2 text-slate-300">
         →  Worked in a team of four, where we divided responsibilities across backend, frontend, and AI integration.
          We collaborated through real-time brainstorming, late-night coding sessions, and clear communication to keep everything on track.
          GitHub and other tools helped us manage version control and smooth coordination.
        </p>
        <p className="mt-2 text-slate-300">
         →  This hackathon sharpened my ability to solve real-world problems under pressure. I improved my collaboration and communication skills,
          gained hands-on experience in rapid prototyping, and learned how to integrate features effectively within strict deadlines.
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Teamwork</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">AI Integration</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Rapid Prototyping</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Frontend</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Backend</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">GitHub</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Communication</span>
        </div>
      </div>
    </div>
  );
}
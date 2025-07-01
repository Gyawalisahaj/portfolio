export default function ExperienceSection() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div>
        <h3 className="text-xl font-semibold mb-1">Senior Frontend Engineer, Accessibility</h3>
        <span className="text-[#64ffda]">Klaviyo</span>
        <span className="ml-4 text-slate-400">2024 — Present</span>
        <p className="mt-2 text-slate-300">
          Build and maintain critical components used to construct Klaviyo’s frontend...
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">JavaScript</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">TypeScript</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">React</span>
          <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Storybook</span>
        </div>
      </div>
    </div>
  );
}
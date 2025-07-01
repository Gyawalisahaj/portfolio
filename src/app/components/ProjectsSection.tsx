export default function ProjectsSection() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div>
        <div>
          <span className="text-xl font-semibold text-[#64ffda]">Portfolio Website</span>
          <p className="mt-1 text-slate-300">
            A modern personal website built with Next.js and Tailwind CSS.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Next.js</span>
            <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">Tailwind CSS</span>
            <span className="bg-[#233554] text-[#64ffda] rounded px-2 py-1 text-xs">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}
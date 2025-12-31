"use client";

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

export default function Header({ onSectionChange }: HeaderProps) {
  return (
    <header className="relative w-full pt-32 mb-32">
      {/* Top Decoration */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-[1px] w-12 bg-[#64ffda]" />
        <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.4em] uppercase">
          Portfolio
        </span>
      </div>

      {/* Hero Name */}
      <div className="relative mb-12">
        <h1 className="text-[15vw] font-black italic uppercase leading-[0.75] tracking-tighter">
          Sahaj <br />
          <span className="text-outline">Gyawali</span>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-2xl mb-12">
        <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest leading-loose">
          <span className="text-white font-bold">Creative Developer</span>
          <br /> Crafting AI-driven experiences
          <br /> from Hetauda, Nepal.
        </p>
      </div>

      {/* CV Button */}
      <div className="flex gap-6">
        <a
          href="/SGCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#64ffda] text-black font-mono text-[10px] uppercase tracking-widest rounded-sm hover:bg-[#64ffda]/80 transition-colors"
        >
          <span>Download CV</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>

        <button
          onClick={() => onSectionChange("projects")}
          className="inline-flex items-center gap-3 px-6 py-3 border border-[#64ffda] text-[#64ffda] font-mono text-[10px] uppercase tracking-widest rounded-sm hover:bg-[#64ffda] hover:text-black transition-colors"
        >
          <span>Explore Work</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </header>
  );
}
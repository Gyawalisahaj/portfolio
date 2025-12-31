"use client";

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

export default function Header({ onSectionChange }: HeaderProps) {
  return (
    <header className="relative w-full pt-20 sm:pt-32 mb-20 sm:mb-32">
      {/* Top Decoration */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="h-[1px] w-8 sm:w-12 bg-[#64ffda]" />
        <span className="text-[#64ffda] font-mono text-[10px] sm:text-[12px] uppercase tracking-widest">Welcome to My World</span>
      </div>

      {/* Hero Name */}
      <div className="relative mb-8 sm:mb-12">
        <h1 className="text-[12vw] sm:text-[10vw] font-black italic uppercase leading-[0.75] tracking-tighter">
          <span className="text-white">Sahaj</span> <br />
          <span className="text-outline hover:text-white transition-all duration-700">Gyawali</span>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-3xl mb-8 sm:mb-12">
        <p className="text-slate-500 font-mono text-[14px] sm:text-[16px] uppercase tracking-widest leading-loose">
          <span className="text-white text-2xl font-bold">Aspiring Data Scientist</span>
          <br /> Focused on transforming data into meaningful insights
          <br /> Kathmandu, Nepal.
        </p>
      </div>

      {/* CV Button */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          href="/SGCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-3 bg-[#64ffda] text-black font-mono text-[10px] sm:text-[12px] uppercase tracking-widest rounded-sm hover:bg-[#64ffda]/80 transition-colors"
        >
          <span>Download CV</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>

        <button
          onClick={() => onSectionChange("projects")}
          className="inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-3 border border-[#64ffda] text-[#64ffda] font-mono text-[9px] sm:text-[10px] uppercase tracking-widest rounded-sm hover:bg-[#64ffda] hover:text-black transition-colors"
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
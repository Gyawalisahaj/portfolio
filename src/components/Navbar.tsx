"use client";

interface NavbarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export default function Navbar({ onSectionChange, currentSection }: NavbarProps) {
  const navLinks = [
    { name: "Home", id: "home", num: "01" },
    { name: "About", id: "about", num: "02" },
    { name: "Experience", id: "experience", num: "03" },
    { name: "Projects", id: "projects", num: "04" },
    { name: "Skills", id: "skills", num: "05" },
    { name: "Contact", id: "contact", num: "06" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Menu Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSectionChange(link.id)}
              className={`group flex items-center gap-2 transition-all ${
                currentSection === link.id ? "text-[#64ffda]" : ""
              }`}
            >
              <span className={`font-mono text-[9px] transition-colors ${
                currentSection === link.id
                  ? "text-[#64ffda]"
                  : "text-slate-600 group-hover:text-[#64ffda]"
              }`}>
                {link.num}
              </span>
              <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                currentSection === link.id
                  ? "text-white"
                  : "text-slate-400 group-hover:text-white"
              }`}>
                {link.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
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

  // Dynamic colors based on current section
  const getSectionColors = (section: string) => {
    const colorMap: { [key: string]: { hover: string; active: string } } = {
      home: { hover: "#64ffda", active: "#64ffda" }, // Cyan
      about: { hover: "#ff6b6b", active: "#ff6b6b" }, // Red
      experience: { hover: "#4ecdc4", active: "#4ecdc4" }, // Teal
      projects: { hover: "#ffd93d", active: "#ffd93d" }, // Yellow
      skills: { hover: "#a78bfa", active: "#a78bfa" }, // Purple
      contact: { hover: "#f472b6", active: "#f472b6" }, // Pink
    };
    return colorMap[section] || colorMap.home;
  };

  const currentColors = getSectionColors(currentSection);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/40 backdrop-blur-md border-b border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex justify-center">
        {/* Menu Links */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSectionChange(link.id)}
              className="group flex items-center gap-1 sm:gap-2 transition-all whitespace-nowrap"
            >
              <span
                className="font-mono text-[8px] sm:text-[9px] transition-colors"
                style={{
                  color: currentSection === link.id
                    ? currentColors.active
                    : "rgb(100 116 139)" // slate-600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = currentColors.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = currentSection === link.id
                    ? currentColors.active
                    : "rgb(100 116 139)"; // slate-600
                }}
              >
                {link.num}
              </span>
              <span
                className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest transition-colors"
                style={{
                  color: currentSection === link.id
                    ? "white"
                    : "rgb(148 163 184)" // slate-400
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = currentSection === link.id
                    ? "white"
                    : "rgb(148 163 184)"; // slate-400
                }}
              >
                {link.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
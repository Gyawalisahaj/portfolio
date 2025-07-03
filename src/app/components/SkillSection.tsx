export default function SkillSection() {
  return (
    <div className="mt-2 p-4 flex flex-col items-start">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      {/* Programming Languages */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">Programming Languages</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Python</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">MySQL</span>
        </div>
      </div>

      {/* Frontend */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">Frontend</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">React</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Next.js</span>
        </div>
      </div>

      {/* Data Analysis Tools */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">Data Analysis Tools</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Pandas</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">NumPy</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Matplotlib</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Seaborn</span>
        </div>
      </div>

      {/* ML/AI Frameworks */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">ML/AI Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">TensorFlow</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">PyTorch</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Scikit-learn</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Keras</span>
        </div>
      </div>

      {/* Deployment */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">Deployment</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Docker</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">FastAPI</span>
        </div>
      </div>

      {/* Development Tools / Version Control */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">Development Tools & Version Control</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Jupyter Notebook</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">PyCharm</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">VS Code</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Git</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">GitHub</span>
        </div>
      </div>

      {/* Other Skills */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-1">Other Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Linux (Familiar)</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Problem-solving</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Software Optimization</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Critical Thinking</span>
          <span className="bg-[#233554] px-3 py-1 rounded text-[#64ffda] text-sm">Communication</span>
        </div>
      </div>
    </div>
  );
}
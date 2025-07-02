export default function EducationSection() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>

      {/* Bachelor's Degree */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">
          Bachelor’s Degree in Computer Science and Information Technology <span className="text-sm text-slate-400">(Ongoing)</span>
        </h3>
        <span className="text-[#64ffda]">Bhaktapur Multiple Campus, Tribhuvan University</span>
        <span className="ml-4 text-slate-400">Bhaktapur, Nepal</span>
      </div>

      {/* Higher Secondary Education */}
      <div>
        <h3 className="text-xl font-semibold mb-1">
          Higher Secondary Education <span className="text-sm text-slate-400">(2020 – 2022)</span>
        </h3>
        <span className="text-[#64ffda]">Kathmandu Model College</span>
        <span className="ml-4 text-slate-400">Kathmandu, Nepal</span>
        <p className="mt-2 text-slate-300">
          Major Subjects: Physics, Chemistry, Mathematics, Biology
        </p>
      </div>
    </div>
  );
}
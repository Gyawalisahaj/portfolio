export default function ContactSection() {
  return (
    <div className=" mt-2  p-4 flex flex-col items-start">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-slate-300 text-center mb-8">
        Feel free to connect with me via the following platforms:                                                                                                                                                                                        
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a
          href="mailto:sahajgnawali@gmail.com"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M16 12l-4 4-4-4" />
            <rect width="20" height="16" x="2" y="4" rx="2" />
          </svg>
          sahajgnawali@gmail.com
        </a>
        <a
          href="https://github.com/Gyawalisahaj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.32.68.97.68 1.95v2.89c0 .27.16.58.67.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
          github.com//Gyawalisahaj                                                                                                                           
        </a>
        <a
          href="https:www.linkedin.com/in/sahajgyawali/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.97 3.55 4.53v4.78z"/>
          </svg>
          linkedin.com/in/sahajgyawali
        </a>
      </div>
    </div>
  );
}
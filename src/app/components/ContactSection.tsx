export default function ContactSection() {
  return (
    <div className="mt-2 p-4 flex flex-col items-start">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-slate-300 text-center mb-8">
        Feel free to connect with me via the following platforms:
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {/* Email */}
        <a
          href="mailto:sahajgnawali@gmail.com"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth={2} fill="none" />
          </svg>
          sahajgnawali@gmail.com
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Gyawalisahaj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.32.68.97.68 1.95v2.89c0 .27.16.58.67.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
          github.com/Gyawalisahaj
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sahajgyawali/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.97 3.55 4.53v4.78z"/>
          </svg>
          linkedin.com/in/sahajgyawali
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/sahaj.gyawali.0327"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0"/>
          </svg>
          Sahaj Gyawali
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/gyawali_sahaj45"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-g h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.973.973 1.245 2.24 1.307 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.634-1.307 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.634-.334-3.608-1.308-.973-.974-1.245-2.242-1.307-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.634 1.307-3.608C4.513 2.567 5.78 2.295 7.146 2.233 8.412 2.175 8.792 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.76.131 4.635.335 3.678 1.293c-.958.958-1.162 2.083-1.221 3.374C2.013 5.668 2 6.072 2 12c0 5.927.013 6.332.072 7.613.059 1.291.263 2.416 1.221 3.374.958.958 2.083 1.162 3.374 1.221C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.291-.059 2.416-.263 3.374-1.221.958-.958 1.162-2.083 1.221-3.374C23.987 18.332 24 17.928 24 12c0-5.927-.013-6.332-.072-7.613-.059-1.291-.263-2.416-1.221-3.374-.958-.958-2.083-1.162-3.374-1.221C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-11.406a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
          gyawali_sahaj45 
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+977 9849965881"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded bg-[#233554] text-[#64ffda] hover:bg-[#112240] transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.25 4.58a1 1 0 0 0 1.22 1.22l4.58-1.25A12 12 0 1 0 20.52 3.48zm-8.52 17A9 9 0 1 1 21 12a9 9 0 0 1-9 8.48zm4.2-6.7c-.26-.13-1.53-.76-1.76-.85s-.41-.13-.58.13-.66.85-.81 1c-.15.17-.3.19-.56.06a7.41 7.41 0 0 1-2.17-1.33 8.12 8.12 0 0 1-1.5-1.88c-.16-.28 0-.43.12-.56.13-.13.28-.33.41-.5s.17-.28.26-.47.04-.33-.02-.46-.58-1.4-.8-1.93c-.22-.53-.45-.44-.62-.45h-.53a1 1 0 0 0-.7.33 2.9 2.9 0 0 0-.9 2.13 5.1 5.1 0 0 0 1.09 2.91 11.27 11.27 0 0 0 3.74 3.34c.52.23.92.37 1.24.47a3.18 3.18 0 0 0 1.46.09c.45-.07 1.38-.56 1.58-1.09s.2-1 .13-1.08zm-4.2-10.8A10 10 0 1 0 22 12a10 10 0 0 0-10-10z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
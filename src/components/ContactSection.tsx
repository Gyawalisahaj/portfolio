"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    // Pulling credentials from .env.local
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
        setStatus("SUCCESS");
        formRef.current?.reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      }, (error) => {
        console.error("EmailJS Error:", error.text);
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 5000);
      });
  };

  return (
    <div className="exp-card overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <div>
          {/* <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.4em] uppercase block mb-2">05 // Terminal</span> */}
          <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">Contact</h2>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className={`w-1.5 h-1.5 rounded-full ${status === "SENDING" ? "bg-yellow-400 animate-pulse" : "bg-[#64ffda] animate-ping"}`}></span>
            <span className="font-mono text-[11px] text-white tracking-widest uppercase">
              {status === "SENDING" ? "Transmitting..." : "Server Ready"}
            </span>
          </div>
          <p className="text-slate-600 font-mono text-[8px] mt-1 uppercase">Protocol: SMTP_SECURE</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* SOCIAL NODES */}
        <div className="space-y-10">
          <div className="space-y-4">
             <h4 className="font-mono text-[20px] text-slate-500 tracking-[0.3em] uppercase">Connect</h4>
             <div className="grid grid-cols-2 gap-6">
                <a href="https://github.com/Gyawalisahaj" target="_blank" className="group block">
                   <p className="text-slate-600 font-mono text-[15px] uppercase">Github</p>
                   <p className="text-white font-bold italic group-hover:text-[#64ffda] transition-colors uppercase tracking-widest">Access _</p>
                </a>
                <a href="https://www.linkedin.com/in/sahajgyawali/" target="_blank" className="group block">
                   <p className="text-slate-600 font-mono text-[15px] uppercase">LinkedIn</p>
                   <p className="text-white font-bold italic group-hover:text-[#64ffda] transition-colors uppercase tracking-widest">Connect _</p>
                </a>
             </div>
          </div>
          
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
             <p className="text-slate-600 font-mono text-[12px] uppercase mb-1">Direct Address</p>
             <p className="text-slate-300 font-mono text-lg underline decoration-[#64ffda]/30">sahajgnawali@gmail.com</p>
          </div>
        </div>

        {/* EMAILJS FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
          <div className="space-y-6">
            <div className="relative">
              <input 
                required
                name="user_name"
                placeholder="NAME / IDENTIFIER"
                className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[12px] text-white focus:border-[#64ffda] outline-none transition-all placeholder:opacity-30"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  required
                  name="user_email"
                  type="email"
                  placeholder="SENDER_EMAIL"
                  className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[12px] text-white focus:border-[#64ffda] outline-none transition-all placeholder:opacity-30"
                />
              </div>
              <div className="relative">
                <input 
                  required
                  name="user_phone"
                  type="text"
                  placeholder="WHATSAPP_NO"
                  className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[12px] text-white focus:border-[#64ffda] outline-none transition-all placeholder:opacity-30"
                />
              </div>
            </div>

            <div className="relative">
              <textarea 
                required
                name="message"
                rows={3}
                placeholder="MESSAGE_PAYLOAD"
                className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[12px] text-white focus:border-[#64ffda] outline-none transition-all resize-none placeholder:opacity-30"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={status === "SENDING"}
            className={`w-full py-4 font-mono text-[18px] font-black tracking-[0.5em] uppercase transition-all duration-300 ${
              status === "SUCCESS" 
                ? "bg-green-500 text-white" 
                : status === "ERROR" 
                  ? "bg-red-500 text-white" 
                  : "bg-[#64ffda] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(100,255,218,0.2)]"
            }`}
          >
            {status === "IDLE" && "Execute Send →"}
            {status === "SENDING" && "Transmitting..."}
            {status === "SUCCESS" && "Success // Logged"}
            {status === "ERROR" && "Error // Retry"}
          </button>
        </form>
      </div>
    </div>
  );
}
"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
        setStatus("SUCCESS");
        formRef.current?.reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      }, (error) => {
        console.error(error.text);
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 5000);
      });
  };

  return (
    <div className="lance-card overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="text-[#64ffda] font-mono text-[10px] tracking-[0.4em] uppercase block mb-2">05 // Terminal</span>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Contact</h2>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className={`w-1.5 h-1.5 rounded-full ${status === "SENDING" ? "bg-yellow-400 animate-pulse" : "bg-[#64ffda] animate-ping"}`}></span>
            <span className="font-mono text-[9px] text-white tracking-widest uppercase">
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
             <h4 className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase">Connect</h4>
             <div className="grid grid-cols-2 gap-6">
                <a href="https://github.com/Gyawalisahaj" className="group block">
                   <p className="text-slate-600 font-mono text-[9px] uppercase">Github</p>
                   <p className="text-white font-bold italic group-hover:text-[#64ffda] transition-colors uppercase tracking-widest">Access _</p>
                </a>
                <a href="https://www.linkedin.com/in/sahajgyawali/" className="group block">
                   <p className="text-slate-600 font-mono text-[9px] uppercase">LinkedIn</p>
                   <p className="text-white font-bold italic group-hover:text-[#64ffda] transition-colors uppercase tracking-widest">Connect _</p>
                </a>
             </div>
          </div>
          
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
             <p className="text-slate-600 font-mono text-[8px] uppercase mb-1">Direct Address</p>
             <p className="text-slate-300 font-mono text-xs">sahajgnawali@gmail.com</p>
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
                className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[10px] text-white focus:border-[#64ffda] outline-none transition-all"
              />
            </div>
            <div className="relative">
              <input 
                required
                name="user_email"
                type="email"
                placeholder="SENDER_EMAIL"
                className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[10px] text-white focus:border-[#64ffda] outline-none transition-all"
              />
            </div>
            <div className="relative">
              <textarea 
                required
                name="message"
                rows={3}
                placeholder="MESSAGE_PAYLOAD"
                className="w-full bg-transparent border-b border-white/10 py-3 font-mono text-[10px] text-white focus:border-[#64ffda] outline-none transition-all resize-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={status === "SENDING"}
            className={`w-full py-4 font-mono text-[11px] font-black tracking-[0.5em] uppercase transition-all duration-300 ${
              status === "SUCCESS" ? "bg-green-500 text-white" : "bg-[#64ffda] text-black hover:bg-white"
            }`}
          >
            {status === "IDLE" && "Execute Send →"}
            {status === "SENDING" && "Sending..."}
            {status === "SUCCESS" && "Success // Logged"}
            {status === "ERROR" && "Retry Transmission"}
          </button>
        </form>
      </div>
    </div>
  );
}
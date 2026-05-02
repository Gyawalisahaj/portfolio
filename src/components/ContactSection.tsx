"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send, TerminalSquare } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.38-3.6 5.3 5.3 0 0 0-.1-3.5s-1.1-.35-3.5 1.25a12.1 12.1 0 0 0-6.4 0C6.1 2.5 5 2.85 5 2.85a5.3 5.3 0 0 0-.1 3.5A5.2 5.2 0 0 0 3.5 9.94c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8.5 19v3"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    // Pulling credentials from .env.local
    const SERVICE_ID = 'service_yd90owe';
    const TEMPLATE_ID = 'template_o904iig';
    const PUBLIC_KEY = 'xQVI20j-txN1eOwsG';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div 
      className="glass rounded-2xl p-8 sm:p-12 border border-white/5 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#64ffda]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-white flex items-center gap-4">
            <TerminalSquare className="w-8 h-8 text-[#64ffda]" />
            Contact
          </h2>
        </div>
        <div className="text-left sm:text-right bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3 justify-start sm:justify-end mb-1">
            <span className={`w-2 h-2 rounded-full ${status === "SENDING" ? "bg-yellow-400 animate-pulse shadow-[0_0_10px_yellow]" : "bg-[#64ffda] animate-pulse shadow-[0_0_10px_#64ffda]"}`}></span>
            <span className="font-mono text-[10px] sm:text-xs text-[#64ffda] tracking-[0.2em] uppercase font-bold">
              {status === "SENDING" ? "Transmitting..." : "Server Ready"}
            </span>
          </div>
          <p className="text-slate-500 font-mono text-[9px] uppercase tracking-widest">Protocol: SMTP_SECURE // PORT: 465</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* SOCIAL NODES */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
             <h4 className="font-mono text-sm text-slate-400 tracking-[0.3em] uppercase flex items-center gap-2">
               <span className="w-2 h-[1px] bg-[#64ffda]" />
               Digital Presence
             </h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <a href="https://github.com/Gyawalisahaj" target="_blank" className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#64ffda]/30 hover:bg-white/[0.05] transition-all">
                   <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-slate-400 group-hover:text-[#64ffda] group-hover:bg-[#64ffda]/10 transition-colors">
                     <GithubIcon />
                   </div>
                   <div>
                     <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-1">GitHub</p>
                     <p className="text-white font-bold text-sm tracking-widest uppercase group-hover:text-[#64ffda] transition-colors">Access _</p>
                   </div>
                </a>
                <a href="https://www.linkedin.com/in/sahajgyawali/" target="_blank" className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#64ffda]/30 hover:bg-white/[0.05] transition-all">
                   <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-slate-400 group-hover:text-[#64ffda] group-hover:bg-[#64ffda]/10 transition-colors">
                     <LinkedinIcon />
                   </div>
                   <div>
                     <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-1">LinkedIn</p>
                     <p className="text-white font-bold text-sm tracking-widest uppercase group-hover:text-[#64ffda] transition-colors">Connect _</p>
                   </div>
                </a>
             </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#64ffda]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-4">
                 <Mail className="w-5 h-5 text-[#64ffda]" />
                 <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Direct Comm Channel</p>
               </div>
               <a href="mailto:sahajgnawali@gmail.com" className="text-slate-200 font-mono text-sm sm:text-base hover:text-[#64ffda] transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#64ffda]/50 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform">
                 sahajgnawali@gmail.com
               </a>
             </div>
          </div>
        </motion.div>

        {/* EMAILJS FORM */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8 p-6 sm:p-8 bg-black/20 rounded-xl border border-white/5 backdrop-blur-md">
            <h4 className="font-mono text-sm text-slate-400 tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
               <span className="w-2 h-[1px] bg-[#64ffda]" />
               Initialize Connection
            </h4>
            
            <div className="space-y-6">
              <div className="relative group">
                <input 
                  required
                  name="user_name"
                  placeholder="IDENTIFIER [NAME]"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-4 font-mono text-xs sm:text-sm text-white focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    required
                    name="user_email"
                    type="email"
                    placeholder="RETURN_ADDRESS [EMAIL]"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-4 font-mono text-xs sm:text-sm text-white focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="relative group">
                  <input 
                    required
                    name="user_phone"
                    type="text"
                    placeholder="COMM_NODE [PHONE/WA]"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-4 font-mono text-xs sm:text-sm text-white focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="PAYLOAD_DATA [MESSAGE]"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-4 font-mono text-xs sm:text-sm text-white focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]/50 outline-none transition-all resize-none placeholder:text-slate-600"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === "SENDING"}
              className={`w-full group relative overflow-hidden rounded-lg py-4 flex items-center justify-center gap-3 font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                status === "SUCCESS" 
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                  : status === "ERROR" 
                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/50" 
                    : "bg-[#64ffda] text-[#030712] hover:bg-white hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] border border-transparent"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "IDLE" && (
                  <>
                    Transmit Data <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {status === "SENDING" && "Encrypting & Sending..."}
                {status === "SUCCESS" && "Transmission Successful"}
                {status === "ERROR" && "Connection Failed - Retry"}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
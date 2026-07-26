"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

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

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setErrorMsg("Network error — please try again, or email directly.");
      setStatus("error");
    }
  }

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="w-full">
      <motion.p variants={item} className="fig-caption mb-4">
        Fig. 5 — Contact
      </motion.p>
      <motion.div variants={item} className="flex items-baseline gap-6 mb-12 border-b border-line pb-8">
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">Get in touch</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <motion.div variants={item} className="lg:col-span-2 space-y-8">
          <div className="space-y-3">
            <a
              href="https://github.com/Gyawalisahaj"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 surface rounded-sm hover:border-ink transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-paper flex items-center justify-center text-ink-soft group-hover:text-brick transition-colors">
                <GithubIcon />
              </div>
              <div>
                <p className="text-ink-faint font-mono text-[10px] uppercase tracking-wide mb-0.5">GitHub</p>
                <p className="text-ink font-medium text-sm">@Gyawalisahaj</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sahajgyawali/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 surface rounded-sm hover:border-ink transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-paper flex items-center justify-center text-ink-soft group-hover:text-brick transition-colors">
                <LinkedinIcon />
              </div>
              <div>
                <p className="text-ink-faint font-mono text-[10px] uppercase tracking-wide mb-0.5">LinkedIn</p>
                <p className="text-ink font-medium text-sm">Sahaj Gyawali</p>
              </div>
            </a>
          </div>

          <div className="p-6 surface rounded-sm">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-4 h-4 text-brick" />
              <p className="text-ink-faint font-mono text-[10px] uppercase tracking-wide">Direct email</p>
            </div>
            <a href="mailto:sahajgnawali@gmail.com" className="text-ink font-medium text-sm hover:text-brick transition-colors break-all">
              sahajgnawali@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 surface rounded-sm">
            {/* Honeypot — hidden from real visitors, silently rejected on the server if filled */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-2">
                  Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-paper border border-line-strong rounded-sm px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brick outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-2">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-paper border border-line-strong rounded-sm px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brick outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-2">
                Phone / WhatsApp <span className="text-ink-faint normal-case">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="+977 ..."
                className="w-full bg-paper border border-line-strong rounded-sm px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brick outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-2">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                placeholder="What are you working on?"
                className="w-full bg-paper border border-line-strong rounded-sm px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brick outline-none transition-colors resize-none"
              />
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
              {status === "idle" && (
                <>
                  Send message <Send className="w-3.5 h-3.5" />
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "success" && "Message sent"}
              {status === "error" && "Try again"}
            </button>

            {status === "error" && errorMsg && <p className="text-brick text-xs font-mono">{errorMsg}</p>}
            {status === "success" && (
              <p className="text-moss text-xs font-mono">Thanks — I&apos;ll get back to you soon.</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

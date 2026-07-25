"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

interface ResumeGateModalProps {
  open: boolean;
  onClose: () => void;
}

const RESUME_PATH = "/SGCV.pdf";
const RESUME_FILENAME = "Sahaj_Gyawali_CV.pdf";

function triggerFileDownload() {
  const link = document.createElement("a");
  link.href = RESUME_PATH;
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ResumeGateModal({ open, onClose }: ResumeGateModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setEmail("");
      setStatus("idle");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("/api/analytics/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "download", email }),
        keepalive: true,
      });
    } catch {
      // Even if the beacon fails, don't block the download over it.
    }

    triggerFileDownload();
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: "rgba(27,27,23,0.45)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-gate-title"
            className="w-full max-w-sm surface rounded-sm p-8 relative"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink-faint hover:text-ink transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="fig-caption mb-3">Fig. 6 — One quick thing</p>
            <h3 id="resume-gate-title" className="font-display text-2xl font-semibold text-ink mb-2">
              Get the résumé
            </h3>
            <p className="text-ink-soft text-sm leading-relaxed mb-6">
              Drop your email and the download starts right away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={inputRef}
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-paper border border-line-strong rounded-sm px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brick outline-none transition-colors"
              />
              <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
                {status === "sending" ? (
                  "One sec..."
                ) : (
                  <>
                    Download résumé <Download className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

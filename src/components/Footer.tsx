export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-ink-faint uppercase tracking-wide">
          © {new Date().getFullYear()} Sahaj Gyawali — Kathmandu, Nepal
        </p>
      </div>
    </footer>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-paper">
      <div className="absolute inset-0 paper-grid opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(168,64,31,0.06), transparent)",
        }}
      />
    </div>
  );
}

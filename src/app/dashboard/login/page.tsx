"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(json.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Network error — please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center text-ink-faint">
          <Lock className="w-4 h-4" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Dashboard</span>
        </div>

        <form onSubmit={handleSubmit} className="surface rounded-sm p-8 space-y-5">
          <div>
            <label htmlFor="password" className="block font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-paper border border-line-strong rounded-sm px-4 py-3 text-sm text-ink outline-none focus:border-brick transition-colors"
            />
          </div>

          {error && <p className="text-brick text-xs font-mono">{error}</p>}

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Checking..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}

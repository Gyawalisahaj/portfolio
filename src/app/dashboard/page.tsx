"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Mail, FileDown, Eye, MessageSquare } from "lucide-react";

interface Stats {
  totalViews: number;
  viewsByDay: { day: string; count: number }[];
  topPaths: { path: string; count: number }[];
  resumeViews: number;
  resumeDownloads: number;
  resumeRequests: { email: string; createdAt: string }[];
  totalMessages: number;
  unreadMessages: number;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  read: boolean;
  createdAt: string;
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="surface rounded-sm p-6">
      <div className="flex items-center gap-2 text-ink-faint mb-3">
        {icon}
        <span className="font-mono text-[10px] uppercase tracking-wide">{label}</span>
      </div>
      <p className="font-display text-3xl font-semibold text-ink">{value.toLocaleString()}</p>
    </div>
  );
}

function ViewsChart({ data }: { data: { day: string; count: number }[] }) {
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <div className="surface rounded-sm p-6">
      <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-6">
        Page views — last 14 days
      </p>
      <div className="flex items-end gap-1.5 h-32">
        {data.map((d) => (
          <div key={d.day} className="flex-1 flex flex-col items-center justify-end gap-1 group">
            <div
              className="w-full bg-brick/70 group-hover:bg-brick transition-colors rounded-t-sm min-h-[2px]"
              style={{ height: `${(d.count / max) * 100}%` }}
              title={`${d.day}: ${d.count}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-mono text-[9px] text-ink-faint">{data[0]?.day.slice(5)}</span>
        <span className="font-mono text-[9px] text-ink-faint">{data[data.length - 1]?.day.slice(5)}</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [statsRes, messagesRes] = await Promise.all([
        fetch("/api/dashboard/stats"),
        fetch("/api/dashboard/messages"),
      ]);

      if (statsRes.status === 401 || messagesRes.status === 401) {
        router.push("/dashboard/login");
        return;
      }

      setStats(await statsRes.json());
      const { messages } = await messagesRes.json();
      setMessages(messages);
      setLoading(false);
    }
    load();
  }, [router]);

  async function toggleRead(id: string, read: boolean) {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read } : m)));
    await fetch("/api/dashboard/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });
  }

  async function handleLogout() {
    await fetch("/api/dashboard/logout", { method: "POST" });
    router.push("/dashboard/login");
  }

  if (loading || !stats) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <p className="font-mono text-xs text-ink-faint uppercase tracking-wide">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper px-6 sm:px-10 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="fig-caption mb-1">Private</p>
            <h1 className="font-display text-3xl font-semibold text-ink">Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-brick transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Eye className="w-3.5 h-3.5" />} label="Page views" value={stats.totalViews} />
          <StatCard icon={<FileDown className="w-3.5 h-3.5" />} label="Résumé downloads" value={stats.resumeDownloads} />
          <StatCard icon={<MessageSquare className="w-3.5 h-3.5" />} label="Messages" value={stats.totalMessages} />
          <StatCard icon={<Mail className="w-3.5 h-3.5" />} label="Unread" value={stats.unreadMessages} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <ViewsChart data={stats.viewsByDay} />

          <div className="surface rounded-sm p-6">
            <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint mb-4">
              Résumé requests ({stats.resumeRequests.length})
            </p>
            {stats.resumeRequests.length === 0 ? (
              <p className="text-ink-faint text-sm">No one has requested it yet.</p>
            ) : (
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {stats.resumeRequests.map((r, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-ink truncate">{r.email}</span>
                    <span className="font-mono text-[10px] text-ink-faint shrink-0">
                      {new Date(r.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="fig-caption mb-4">Messages</p>
          {messages.length === 0 ? (
            <div className="surface rounded-sm p-8 text-center">
              <p className="text-ink-faint text-sm">No messages yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`surface rounded-sm p-5 ${!m.read ? "border-brick/40" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-ink font-medium text-sm">
                        {m.name} {!m.read && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-brick inline-block" />}
                      </p>
                      <p className="text-ink-faint font-mono text-xs">
                        {m.email}
                        {m.phone ? ` · ${m.phone}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-[10px] text-ink-faint">
                        {new Date(m.createdAt).toLocaleString()}
                      </span>
                      <button
                        onClick={() => toggleRead(m.id, !m.read)}
                        className="font-mono text-[10px] uppercase tracking-wide text-moss hover:text-brick transition-colors"
                      >
                        {m.read ? "Mark unread" : "Mark read"}
                      </button>
                    </div>
                  </div>
                  <p className="text-ink-soft text-sm leading-relaxed whitespace-pre-wrap">{m.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

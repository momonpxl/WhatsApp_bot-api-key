import DashboardLayout from "@/components/DashboardLayout";
import { BarChart3, Key, Send, Activity } from "lucide-react";

const stats = [
  { label: "Total Request Hari Ini", value: "1,248", icon: Send, change: "+12%" },
  { label: "API Key Aktif", value: "3", icon: Key, change: "" },
  { label: "Total Request", value: "45,892", icon: BarChart3, change: "+8%" },
  { label: "Uptime", value: "99.9%", icon: Activity, change: "" },
];

const recentLogs = [
  { time: "14:32:01", endpoint: "/api/bot/send-message", status: 200, duration: "142ms" },
  { time: "14:31:45", endpoint: "/api/bot/send-message", status: 200, duration: "98ms" },
  { time: "14:30:12", endpoint: "/api/bot/check-number", status: 200, duration: "56ms" },
  { time: "14:29:33", endpoint: "/api/bot/send-media", status: 400, duration: "23ms" },
  { time: "14:28:01", endpoint: "/api/bot/send-message", status: 200, duration: "134ms" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="animate-slide-up">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <s.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{s.value}</span>
                {s.change && <span className="text-xs text-primary font-medium">{s.change}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Recent logs */}
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-lg font-semibold">Request Terbaru</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="px-5 py-3 text-left font-medium">Waktu</th>
                  <th className="px-5 py-3 text-left font-medium">Endpoint</th>
                  <th className="px-5 py-3 text-left font-medium">Status</th>
                  <th className="px-5 py-3 text-left font-medium">Durasi</th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((log, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{log.time}</td>
                    <td className="px-5 py-3 font-mono text-xs">{log.endpoint}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${log.status === 200 ? "bg-accent text-accent-foreground" : "bg-destructive/20 text-destructive"}`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{log.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

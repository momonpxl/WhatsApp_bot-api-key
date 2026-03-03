import DashboardLayout from "@/components/DashboardLayout";

const logs = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  time: `14:${String(32 - i).padStart(2, "0")}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}`,
  endpoint: ["/api/bot/send-message", "/api/bot/check-number", "/api/bot/send-media", "/api/bot/status"][i % 4],
  method: i % 4 === 0 || i % 4 === 2 ? "POST" : "GET",
  status: i === 3 || i === 8 ? 400 : i === 11 ? 429 : 200,
  ip: "103.28.1" + (i % 5),
  duration: `${Math.floor(Math.random() * 200 + 20)}ms`,
}));

const Logs = () => {
  return (
    <DashboardLayout>
      <div className="animate-slide-up">
        <h1 className="text-2xl font-bold mb-6">Logs & Statistik</h1>

        {/* Stats row */}
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {[
            { label: "Request Hari Ini", value: "1,248" },
            { label: "Rata-rata Response", value: "112ms" },
            { label: "Error Rate", value: "2.1%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <p className="text-2xl font-bold mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Log table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-lg font-semibold">Riwayat Request</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="px-5 py-3 text-left font-medium">Waktu</th>
                  <th className="px-5 py-3 text-left font-medium">Method</th>
                  <th className="px-5 py-3 text-left font-medium">Endpoint</th>
                  <th className="px-5 py-3 text-left font-medium">Status</th>
                  <th className="px-5 py-3 text-left font-medium">IP</th>
                  <th className="px-5 py-3 text-left font-medium">Durasi</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{log.time}</td>
                    <td className="px-5 py-3">
                      <span className={`font-mono text-xs font-medium ${log.method === "POST" ? "text-primary" : "text-info"}`}>{log.method}</span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs">{log.endpoint}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${log.status === 200 ? "bg-accent text-accent-foreground" : log.status === 429 ? "bg-warning/20 text-warning" : "bg-destructive/20 text-destructive"}`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{log.ip}</td>
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

export default Logs;

import DashboardLayout from "@/components/DashboardLayout";
import { Shield, Users, Activity, Key } from "lucide-react";

const users = [
  { name: "John Doe", email: "john@email.com", keys: 3, requests: 12480, status: "Aktif" },
  { name: "Jane Smith", email: "jane@email.com", keys: 2, requests: 8320, status: "Aktif" },
  { name: "Ahmad Rizki", email: "ahmad@email.com", keys: 1, requests: 2100, status: "Aktif" },
  { name: "Siti Nurhaliza", email: "siti@email.com", keys: 0, requests: 0, status: "Nonaktif" },
];

const Admin = () => (
  <DashboardLayout>
    <div className="animate-slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      {/* Global stats */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        {[
          { label: "Total Users", value: "156", icon: Users },
          { label: "Total API Keys", value: "342", icon: Key },
          { label: "Request Hari Ini", value: "28,450", icon: Activity },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="text-2xl font-bold">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Users table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-lg font-semibold">Semua User</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="px-5 py-3 text-left font-medium">Nama</th>
                <th className="px-5 py-3 text-left font-medium">Email</th>
                <th className="px-5 py-3 text-left font-medium">API Keys</th>
                <th className="px-5 py-3 text-left font-medium">Total Request</th>
                <th className="px-5 py-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="px-5 py-3 font-medium">{u.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-5 py-3">{u.keys}</td>
                  <td className="px-5 py-3 font-mono text-xs">{u.requests.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${u.status === "Aktif" ? "bg-accent text-accent-foreground" : "bg-destructive/20 text-destructive"}`}>
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Admin;

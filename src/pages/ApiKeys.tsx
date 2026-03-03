import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Plus, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ApiKeyItem {
  id: string;
  name: string;
  key: string;
  type: "live" | "test";
  active: boolean;
  createdAt: string;
  lastUsed: string;
}

const initialKeys: ApiKeyItem[] = [
  { id: "1", name: "Production Bot", key: "wa_live_kd8s7fh3jf83j", type: "live", active: true, createdAt: "2026-01-15", lastUsed: "2 menit lalu" },
  { id: "2", name: "Staging Bot", key: "wa_test_m9x2kl4p7qw1n", type: "test", active: true, createdAt: "2026-02-01", lastUsed: "1 jam lalu" },
  { id: "3", name: "Dev Testing", key: "wa_test_r3t5y8u2i0o4p", type: "test", active: false, createdAt: "2026-02-20", lastUsed: "3 hari lalu" },
];

const ApiKeys = () => {
  const [keys, setKeys] = useState<ApiKeyItem[]>(initialKeys);
  const [newName, setNewName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success("API Key berhasil disalin!");
  };

  const toggleKey = (id: string) => {
    setKeys(keys.map(k => k.id === id ? { ...k, active: !k.active } : k));
    toast.success("Status API key diperbarui");
  };

  const deleteKey = (id: string) => {
    setKeys(keys.filter(k => k.id !== id));
    toast.success("API Key berhasil dihapus");
  };

  const createKey = () => {
    if (!newName.trim()) return;
    const rand = Math.random().toString(36).substring(2, 15);
    const newKey: ApiKeyItem = {
      id: Date.now().toString(),
      name: newName,
      key: `wa_live_${rand}`,
      type: "live",
      active: true,
      createdAt: new Date().toISOString().split("T")[0],
      lastUsed: "Belum digunakan",
    };
    setKeys([newKey, ...keys]);
    setNewName("");
    setDialogOpen(false);
    toast.success("API Key baru berhasil dibuat!");
  };

  return (
    <DashboardLayout>
      <div className="animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">API Keys</h1>
            <p className="text-sm text-muted-foreground mt-1">{keys.filter(k => k.active).length}/3 key aktif (paket Gratis)</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2"><Plus className="h-4 w-4" /> Buat API Key</Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border">
              <DialogHeader>
                <DialogTitle>Buat API Key Baru</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label>Nama Key</Label>
                  <Input placeholder="Contoh: Production Bot" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
                <Button onClick={createKey} className="w-full">Generate API Key</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          {keys.map((k) => (
            <div key={k.id} className={`rounded-xl border bg-card p-5 transition-all ${k.active ? "border-border" : "border-border opacity-60"}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{k.name}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${k.type === "live" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
                      {k.type}
                    </span>
                    {!k.active && <span className="rounded-full bg-destructive/20 px-2 py-0.5 text-xs text-destructive">Nonaktif</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-secondary px-3 py-1 font-mono text-sm text-secondary-foreground">{k.key}</code>
                    <button onClick={() => copyKey(k.key)} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Dibuat: {k.createdAt}</span>
                    <span>Terakhir: {k.lastUsed}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => toggleKey(k.id)} className="gap-1.5">
                    {k.active ? <ToggleRight className="h-4 w-4 text-primary" /> : <ToggleLeft className="h-4 w-4" />}
                    {k.active ? "Aktif" : "Nonaktif"}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => deleteKey(k.id)} className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApiKeys;

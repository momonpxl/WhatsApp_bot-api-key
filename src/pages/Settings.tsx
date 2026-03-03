import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SettingsPage = () => {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pengaturan berhasil disimpan!");
  };

  return (
    <DashboardLayout>
      <div className="animate-slide-up max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Pengaturan</h1>

        <form onSubmit={handleSave} className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 space-y-5">
            <h2 className="text-lg font-semibold">Profil</h2>
            <div className="space-y-2">
              <Label>Nama</Label>
              <Input defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="john@email.com" type="email" />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-5">
            <h2 className="text-lg font-semibold">Ganti Password</h2>
            <div className="space-y-2">
              <Label>Password Lama</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label>Password Baru</Label>
              <Input type="password" placeholder="Min. 8 karakter" />
            </div>
          </div>

          <Button type="submit">Simpan Perubahan</Button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

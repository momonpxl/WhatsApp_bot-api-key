import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registrasi berhasil! Silakan login.");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative w-full max-w-md animate-slide-up">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Key className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">WA<span className="text-gradient-primary">API</span></span>
          </Link>
          <h1 className="text-2xl font-bold">Buat Akun Baru</h1>
          <p className="mt-2 text-sm text-muted-foreground">Daftar gratis dan mulai gunakan API WhatsApp</p>
        </div>

        <form onSubmit={handleRegister} className="rounded-xl border border-border bg-card p-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nama@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input id="password" type={showPass ? "text" : "password"} placeholder="Min. 8 karakter" required />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full font-semibold">Daftar Gratis</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Sudah punya akun? <Link to="/login" className="text-primary hover:underline font-medium">Masuk</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

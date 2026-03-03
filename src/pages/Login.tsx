import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo - redirect to dashboard
    toast.success("Login berhasil!");
    window.location.href = "/dashboard";
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
          <h1 className="text-2xl font-bold">Selamat Datang Kembali</h1>
          <p className="mt-2 text-sm text-muted-foreground">Masuk ke akun Anda untuk mengelola API key</p>
        </div>

        <form onSubmit={handleLogin} className="rounded-xl border border-border bg-card p-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nama@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input id="password" type={showPass ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full font-semibold">Masuk</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Belum punya akun? <Link to="/register" className="text-primary hover:underline font-medium">Daftar gratis</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

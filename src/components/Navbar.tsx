import { Link, useLocation } from "react-router-dom";
import { Key, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAuth = location.pathname.startsWith("/dashboard");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Key className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">WA<span className="text-gradient-primary">API</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Dokumentasi</Link>
          <Link to="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Harga</Link>
          {isAuth ? (
            <Link to="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm">Masuk</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Daftar Gratis</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/docs" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Dokumentasi</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Harga</Link>
            <Link to="/login" onClick={() => setOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full">Masuk</Button>
            </Link>
            <Link to="/register" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full">Daftar Gratis</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

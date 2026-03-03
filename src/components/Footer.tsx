import { Key } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Key className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">WA<span className="text-gradient-primary">API</span></span>
          </div>
          <p className="text-sm text-muted-foreground">Platform API WhatsApp Bot terpercaya untuk bisnis Anda.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Produk</h4>
          <div className="flex flex-col gap-2">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">Dokumentasi</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Harga</Link>
            <span className="text-sm text-muted-foreground">Status</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Perusahaan</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Tentang</span>
            <span className="text-sm text-muted-foreground">Blog</span>
            <span className="text-sm text-muted-foreground">Kontak</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © 2026 WAAPI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

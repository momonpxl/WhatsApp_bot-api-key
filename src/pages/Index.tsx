import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3, Code2, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Zap, title: "Kirim Pesan Instan", desc: "Kirim pesan teks, media, dan dokumen melalui WhatsApp secara otomatis via API." },
  { icon: Shield, title: "API Key Aman", desc: "Sistem manajemen API key terenkripsi dengan rate limiting dan monitoring real-time." },
  { icon: BarChart3, title: "Analytics Lengkap", desc: "Pantau setiap request, lihat statistik penggunaan, dan optimasi performa bot Anda." },
  { icon: Code2, title: "Dokumentasi Jelas", desc: "Contoh kode dalam berbagai bahasa pemrograman, siap copy-paste dan gunakan." },
  { icon: Send, title: "Multi-Device", desc: "Dukungan multi-device WhatsApp, tanpa perlu scan QR berulang kali." },
  { icon: CheckCircle2, title: "99.9% Uptime", desc: "Infrastruktur yang handal dengan monitoring 24/7 dan auto-recovery." },
];

const codeExample = `// Kirim pesan WhatsApp via API
const response = await fetch(
  "https://api.waapi.id/v1/bot/send-message",
  {
    method: "POST",
    headers: {
      "x-api-key": "wa_live_kd8s7fh3jf83j",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: "6281234567890",
      message: "Halo dari WAAPI! 🚀"
    })
  }
);

const data = await response.json();
console.log(data);
// { success: true, data: { messageId: "WA_123..." } }`;

const plans = [
  { name: "Gratis", price: "Rp 0", period: "/bulan", features: ["3 API Key aktif", "100 request/jam", "Kirim pesan teks", "Dashboard basic", "Community support"], cta: "Mulai Gratis", highlight: false },
  { name: "Pro", price: "Rp 99K", period: "/bulan", features: ["10 API Key aktif", "1.000 request/jam", "Kirim pesan & media", "Analytics lengkap", "Priority support", "Webhook events"], cta: "Langganan Pro", highlight: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited API Key", "Unlimited request", "Semua fitur Pro", "Dedicated server", "SLA 99.99%", "Account manager"], cta: "Hubungi Kami", highlight: false },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              WhatsApp Bot API v2.0 — Now Available
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Kirim Pesan WhatsApp<br />
              <span className="text-gradient-primary">Lewat API</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Platform API WhatsApp Bot yang mudah diintegrasikan. Generate API key, kirim pesan, dan pantau semua aktivitas dalam satu dashboard.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/register">
                <Button size="lg" className="gap-2 text-base font-semibold px-8">
                  Mulai Gratis <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Lihat Dokumentasi
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mx-auto mt-16 max-w-2xl animate-fade-in">
            <div className="overflow-hidden rounded-xl border border-border bg-card glow-primary">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-warning/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">send-message.js</span>
              </div>
              <pre className="overflow-x-auto p-5 text-left text-sm leading-relaxed">
                <code className="font-mono text-muted-foreground">
                  {codeExample}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Semua yang Anda Butuhkan</h2>
            <p className="mt-3 text-muted-foreground">Fitur lengkap untuk integrasi WhatsApp Bot</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:glow-primary">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <f.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Harga Sederhana</h2>
            <p className="mt-3 text-muted-foreground">Pilih paket sesuai kebutuhan Anda</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-xl border p-8 transition-all ${plan.highlight ? "border-primary bg-card glow-primary scale-[1.02]" : "border-border bg-card hover:border-primary/30"}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button className="mt-8 w-full" variant={plan.highlight ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

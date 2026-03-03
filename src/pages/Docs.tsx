import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const endpoints = [
  {
    method: "POST",
    path: "/api/bot/send-message",
    desc: "Kirim pesan teks ke nomor WhatsApp",
    body: `{
  "to": "6281234567890",
  "message": "Halo dari WAAPI!"
}`,
    response: `{
  "success": true,
  "data": {
    "messageId": "WA_123456789",
    "to": "6281234567890",
    "status": "sent"
  },
  "message": "Pesan berhasil dikirim"
}`,
  },
  {
    method: "POST",
    path: "/api/bot/send-media",
    desc: "Kirim media (gambar, video, dokumen)",
    body: `{
  "to": "6281234567890",
  "mediaUrl": "https://example.com/image.jpg",
  "caption": "Lihat gambar ini!"
}`,
    response: `{
  "success": true,
  "data": {
    "messageId": "WA_123456790",
    "type": "image",
    "status": "sent"
  }
}`,
  },
  {
    method: "GET",
    path: "/api/bot/status",
    desc: "Cek status koneksi WhatsApp",
    body: null,
    response: `{
  "success": true,
  "data": {
    "status": "connected",
    "phone": "6281234567890",
    "uptime": "2d 14h 32m"
  }
}`,
  },
  {
    method: "GET",
    path: "/api/bot/check-number",
    desc: "Cek apakah nomor terdaftar di WhatsApp",
    body: null,
    response: `{
  "success": true,
  "data": {
    "number": "6281234567890",
    "registered": true
  }
}`,
  },
];

const curlExample = `curl -X POST https://api.waapi.id/v1/bot/send-message \\
  -H "x-api-key: wa_live_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"to":"6281234567890","message":"Halo!"}'`;

const jsExample = `const response = await fetch(
  "https://api.waapi.id/v1/bot/send-message",
  {
    method: "POST",
    headers: {
      "x-api-key": "wa_live_YOUR_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: "6281234567890",
      message: "Halo!"
    })
  }
);
const data = await response.json();`;

const pythonExample = `import requests

response = requests.post(
    "https://api.waapi.id/v1/bot/send-message",
    headers={
        "x-api-key": "wa_live_YOUR_KEY",
        "Content-Type": "application/json"
    },
    json={
        "to": "6281234567890",
        "message": "Halo!"
    }
)
print(response.json())`;

const Docs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 pt-24 pb-20">
      <div className="animate-slide-up max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold md:text-4xl mb-2">Dokumentasi API</h1>
        <p className="text-muted-foreground mb-10">Panduan lengkap untuk menggunakan WAAPI.</p>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Quick Start</h2>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <p className="text-sm text-muted-foreground">1. Daftar dan dapatkan API key dari dashboard</p>
            <p className="text-sm text-muted-foreground">2. Tambahkan header <code className="font-mono bg-secondary px-1.5 py-0.5 rounded text-xs">x-api-key</code> di setiap request</p>
            <p className="text-sm text-muted-foreground">3. Kirim request ke endpoint yang tersedia</p>
          </div>
        </section>

        {/* Code examples */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Contoh Kode</h2>
          <Tabs defaultValue="curl">
            <TabsList className="bg-secondary">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="curl">
              <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-sm text-muted-foreground">{curlExample}</pre>
            </TabsContent>
            <TabsContent value="js">
              <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-sm text-muted-foreground">{jsExample}</pre>
            </TabsContent>
            <TabsContent value="python">
              <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-sm text-muted-foreground">{pythonExample}</pre>
            </TabsContent>
          </Tabs>
        </section>

        {/* Endpoints */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Endpoints</h2>
          <div className="space-y-6">
            {endpoints.map((ep) => (
              <div key={ep.path} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="border-b border-border px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${ep.method === "POST" ? "text-primary" : "text-info"}`}>{ep.method}</span>
                    <code className="font-mono text-sm">{ep.path}</code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{ep.desc}</p>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  {ep.body && (
                    <div className="p-5">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">REQUEST BODY</p>
                      <pre className="font-mono text-xs text-muted-foreground">{ep.body}</pre>
                    </div>
                  )}
                  <div className={`p-5 ${!ep.body ? "md:col-span-2" : ""}`}>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">RESPONSE</p>
                    <pre className="font-mono text-xs text-muted-foreground">{ep.response}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Error codes */}
        <section>
          <h2 className="text-xl font-bold mb-4">Kode Error</h2>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="px-5 py-3 text-left font-medium">Kode</th>
                  <th className="px-5 py-3 text-left font-medium">Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["INVALID_API_KEY", "API key tidak valid atau tidak ditemukan"],
                  ["API_KEY_EXPIRED", "API key sudah kadaluarsa"],
                  ["RATE_LIMIT_EXCEEDED", "Melebihi batas request per jam"],
                  ["INVALID_PARAMETERS", "Parameter request tidak valid"],
                  ["UNAUTHORIZED", "Tidak memiliki akses"],
                ].map(([code, desc]) => (
                  <tr key={code} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-destructive">{code}</td>
                    <td className="px-5 py-3 text-muted-foreground">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default Docs;

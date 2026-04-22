import type { Metadata } from "next";
import { Fredoka, Geist_Mono } from "next/font/google";
import Nav from "./Nav";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oma Balat Kafe — Kahve, Tat, Atölye",
  description:
    "Balat'ın kalbinde taze öğütülmüş kahveler, leziz tatlar ve renkli atölyeler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${fredoka.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--coffee)]">
        <header className="sticky top-0 z-50 bg-[var(--primary)] border-b-[3px] border-[var(--coffee)]">
          <Nav />
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-[var(--coffee)] text-[var(--cream)] mt-16">
          <div className="max-w-6xl mx-auto px-5 py-10 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black text-[var(--primary)]">
                ☕ Oma Balat
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Taze öğütülmüş mis kokulu kahveler, leziz tatlar, renkli
                etkinlikler…
              </p>
            </div>
            <div>
              <h4 className="font-black text-[var(--primary)] mb-2">
                Çalışma Saatleri
              </h4>
              <ul className="text-sm space-y-1">
                <li>Pzt – Cuma · 10:00 – 18:30</li>
                <li>Cumartesi · 10:00 – 19:00</li>
                <li>Pazar · Kapalı 🚫</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[var(--primary)] mb-2">Adres</h4>
              <a
                href="https://maps.app.goo.gl/JMfK28yW2AqjruRK9"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline hover:text-[var(--primary)]"
              >
                Balat, Sıhhiye Cd No: 40/B, 16225 Ni̇lüfer/Bursa — Haritada Aç 📍
              </a>
            </div>
          </div>
          <div className="border-t border-[var(--cream)]/20 py-4 text-center text-xs opacity-70">
            © {new Date().getFullYear()} Oma Balat · Her hakkım sende 💛
          </div>
        </footer>
      </body>
    </html>
  );
}

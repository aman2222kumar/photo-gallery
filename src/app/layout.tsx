import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumière Gallery",
  description: "A curated infinite photo gallery built with Next.js & TanStack Query",
  keywords: ["gallery", "photos", "infinite scroll", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-0 text-surface-900 font-body antialiased min-h-screen">
        <ThemeProvider>
          <QueryProvider>
            <div className="relative min-h-screen flex flex-col">
              {/* Background grid pattern */}
              <div
                className="fixed inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
              {/* Radial glow top */}
              <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-brand-600/10 via-transparent to-transparent" />
              </div>

              <Navbar />
              <main className="flex-1 pt-28 pb-16 relative z-10">
                {children}
              </main>
              <Footer />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

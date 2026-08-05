import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, FloatingContact, StickyBanner } from "@/components";
import { Footer } from "@/components/Footer";

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K Res.coders - Premium IT Developers",
  description: "Hire dedicated development teams and developers in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
    >
      <head />
      <body className="overflow-x-hidden flex flex-col bg-slate-50 text-[#0f172a]">
        <Script
          id="suppress-iframe-sizer-logs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalLog = console.log;
                const originalWarn = console.warn;
                const originalError = console.error;
                
                console.log = function(...args) {
                  if (typeof args[0] === 'string' && args[0].includes('[iFrameSizer]')) return;
                  originalLog.apply(console, args);
                };
                console.warn = function(...args) {
                  if (typeof args[0] === 'string' && args[0].includes('[iFrameSizer]')) return;
                  originalWarn.apply(console, args);
                };
                console.error = function(...args) {
                  if (typeof args[0] === 'string' && args[0].includes('[iFrameSizer]')) return;
                  originalError.apply(console, args);
                };
              }
            `,
          }}
        />
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingContact />
        <StickyBanner />
      </body>
    </html>
  );
}

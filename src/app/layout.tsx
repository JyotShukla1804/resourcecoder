import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, FloatingContact, StickyBanner } from "@/components";
import { Footer } from "@/components/Footer";

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
      <body className="overflow-x-hidden flex flex-col bg-slate-50 text-[#0f172a]">
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

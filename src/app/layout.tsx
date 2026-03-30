import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "The House of ChiChi | Imole – Paws & Pearls",
  description: "A luxury storytelling brand inspired by Imole – Paws & Pearls, a heartfelt children’s book centered around courage, individuality, and light.",
};

import FloatingSocials from "@/components/FloatingSocials";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F5EFE6] text-[#1A1A1A] antialiased`}>
        <Navbar />
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}

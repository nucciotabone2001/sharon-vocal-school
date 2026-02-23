import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/Navbar";
import GsapProvider from "./GsapProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharon Tabone Vocal School",
  description:
    "insegnante di canto a Milano, lezioni individuali e corsi di gruppo per adulti e bambini.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}

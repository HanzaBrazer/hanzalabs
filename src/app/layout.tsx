import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/providers/Cursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanzalabs.vercel.app"),
  title: {
    default: "HanzaLabs — Visionary Design Studio",
    template: "%s — HanzaLabs",
  },
  description:
    "HanzaLabs is a design studio crafting market-leading realities — websites, product design, and brand systems for ambitious brands.",
  openGraph: {
    title: "HanzaLabs — Visionary Design Studio",
    description:
      "We collaborate with ambitious brands to craft powerful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SmoothScroll>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

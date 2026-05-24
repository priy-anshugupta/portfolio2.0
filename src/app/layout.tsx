import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ClientShell } from "@/components/ClientShell";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyanshu Gupta | AI Engineer",
  description:
    "AI Engineer portfolio — Multi-Agent Systems, RAG Pipelines, Full Stack AI Applications, and Intelligent Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}

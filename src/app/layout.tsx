import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClientShell } from "@/components/ClientShell";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
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
    <html lang="en" className={geist.variable}>
      <body className="font-sans">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}

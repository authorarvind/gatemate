import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GATEMATE - India's Premier Platform for GATE & Competitive Exams",
  description: "Expert-led courses, comprehensive study material, and personalized guidance for GATE, UGC NET, BPSC TRE 4.0, and cutting-edge technology training.",
  keywords: "GATE, UGC NET, BPSC TRE, Programming, Ethical Hacking, Blockchain, Generative AI, FDP, Corporate Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = { themeColor: "#f4f4f5" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dra. Camila Andrade | Dentista em Salvador",
  description: "Clínica geral, estética dental e odontologia do esporte em Salvador. Agende sua avaliação com a Dra. Camila Andrade.",
  openGraph: { title: "Dra. Camila Andrade | Dentista em Salvador", description: "Planejamento, individualidade e ciência para o seu sorriso.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

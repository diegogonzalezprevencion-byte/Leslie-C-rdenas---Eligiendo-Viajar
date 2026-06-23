import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Rutas Nativas Chile | Viajes nacionales y experiencias turísticas",
  description: "App-web para emprendimiento de viajes nacionales en Chile con destinos, valores para personas y grupos, agenda de cotización y galería de experiencias.",
  keywords: ["viajes Chile", "turismo nacional", "experiencias turísticas", "viajes grupales", "emprendimiento viajes"],
  openGraph: {
    title: "Rutas Nativas Chile",
    description: "Viajes nacionales por Chile con experiencias grupales y personalizadas.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Eligiendo Viajar | Viajes nacionales en Chile',
  description: 'APP-web para emprendimiento de viajes nacionales en Chile con destinos, cotización y experiencias de viajeros.',
  keywords: ['viajes Chile', 'turismo nacional', 'rutas turísticas', 'Eligiendo Viajar']
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

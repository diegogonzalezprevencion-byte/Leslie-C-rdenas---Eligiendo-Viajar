import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Eligiendo Viajar</strong>
        <p>APP-web demo para emprendimiento de viajes nacionales en Chile.</p>
      </div>
      <div className="footer-links">
        <Link href="/destinos">Destinos</Link>
        <Link href="/cotizar">Cotizar</Link>
        <Link href="/politicas">Políticas</Link>
      </div>
    </footer>
  );
}

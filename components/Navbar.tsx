import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-shell">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Ir al inicio">
          <span className="brand-mark">RN</span>
          <span>
            <strong>Rutas Nativas</strong>
            <small>Viajes por Chile</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Navegación principal">
          <Link href="/#destinos">Destinos</Link>
          <Link href="/#experiencias">Experiencias</Link>
          <Link href="/agenda">Cotizar</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

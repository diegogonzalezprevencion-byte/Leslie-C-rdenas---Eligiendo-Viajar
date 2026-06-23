import Link from 'next/link';

const links = [
  ['/', 'Inicio'],
  ['/destinos', 'Destinos'],
  ['/cotizar', 'Cotizar'],
  ['/experiencias', 'Experiencias'],
  ['/contacto', 'Contacto']
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">EV</span>
        <span>
          <strong>Eligiendo Viajar</strong>
          <small>Rutas nacionales por Chile</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Navegación principal">
        {links.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}

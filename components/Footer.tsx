import Link from "next/link";
import { buildWhatsAppUrl } from "../lib/format";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Rutas Nativas Chile</h3>
          <p>App-web editable para vender experiencias turísticas nacionales, viajes grupales y escapadas personalizadas.</p>
        </div>
        <div>
          <h4>Secciones</h4>
          <Link href="/#destinos">Destinos</Link>
          <Link href="/#valores">Valores</Link>
          <Link href="/#experiencias">Experiencias</Link>
          <Link href="/agenda">Cotizar viaje</Link>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href={buildWhatsAppUrl("Hola, quiero información sobre viajes nacionales por Chile.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:contacto@rutasnativas.cl">contacto@rutasnativas.cl</a>
          <Link href="/politicas">Políticas</Link>
        </div>
      </div>
    </footer>
  );
}

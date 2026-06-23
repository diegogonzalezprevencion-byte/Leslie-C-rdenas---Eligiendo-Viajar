import Link from "next/link";
import { buildWhatsAppUrl } from "../../lib/format";

export const metadata = {
  title: "Contacto | Rutas Nativas Chile",
  description: "Información de contacto del emprendimiento turístico."
};

export default function ContactoPage() {
  return (
    <main>
      <section className="page-hero small-hero">
        <div className="container section-heading narrow">
          <p className="eyebrow">Contacto</p>
          <h1>Conversemos sobre tu próximo viaje</h1>
          <p>Actualiza estos datos con el correo, teléfono, redes sociales y dirección comercial del emprendimiento.</p>
        </div>
      </section>
      <section className="section soft">
        <div className="container contact-grid">
          <article className="contact-card">
            <h2>Datos editables</h2>
            <p><strong>WhatsApp:</strong> +56 9 1234 5678</p>
            <p><strong>Correo:</strong> contacto@rutasnativas.cl</p>
            <p><strong>Instagram:</strong> @rutasnativas.cl</p>
            <p><strong>Atención:</strong> Lunes a viernes, 09:00 a 18:00 hrs.</p>
            <div className="hero-actions">
              <a className="btn" href={buildWhatsAppUrl("Hola, quiero cotizar un viaje nacional por Chile.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <Link className="btn secondary" href="/agenda">Cotizar ruta</Link>
            </div>
          </article>
          <article className="contact-card pale">
            <h2>Mensaje para clientes</h2>
            <p>
              Somos un emprendimiento de viajes nacionales que diseña experiencias tranquilas,
              organizadas y cercanas para descubrir Chile en pareja, familia, grupos de amigos o equipos de trabajo.
            </p>
            <ul className="check-list">
              <li>Rutas flexibles según temporada y disponibilidad.</li>
              <li>Valores diferenciados para personas y grupos.</li>
              <li>Espacios para mostrar fotografías y testimonios reales.</li>
              <li>Diseño cálido con tonos crema, verdes y amarillos pastel.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}

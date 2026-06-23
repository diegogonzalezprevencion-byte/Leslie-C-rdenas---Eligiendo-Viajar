import Image from "next/image";
import Link from "next/link";
import DestinationCard from "../components/DestinationCard";
import ExperienceGallery from "../components/ExperienceGallery";
import { destinations, featuredStats } from "../data/destinations";
import { buildWhatsAppUrl, formatCLP } from "../lib/format";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Viajes nacionales por Chile</p>
            <h1>Experiencias tranquilas, cálidas y bien organizadas para descubrir Chile.</h1>
            <p>
              Una app-web lista para GitHub y Vercel, pensada para promocionar rutas turísticas nacionales,
              cotizar viajes para personas y grupos, y mostrar experiencias reales de otros viajeros.
            </p>
            <div className="badge-list">
              <span className="pill">Colores pastel</span>
              <span className="pill">Cotización por WhatsApp</span>
              <span className="pill">10 zonas de ejemplo</span>
              <span className="pill">Galería editable</span>
            </div>
            <div className="hero-actions">
              <Link className="btn" href="#destinos">Ver destinos</Link>
              <Link className="btn secondary" href="/agenda">Cotizar viaje</Link>
            </div>
          </div>

          <div className="hero-card">
            <Image src="/destinos/torres-del-paine.svg" alt="Imagen referencial de viaje por Chile" width={820} height={620} priority />
            <div className="hero-card-note">
              <strong>Rutas con calma</strong>
              <span>Experiencias para parejas, familias, grupos de amigos y empresas.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container stats-grid">
          {featuredStats.map(([number, label]) => (
            <div className="stat-card" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section soft" id="destinos">
        <div className="container section-heading">
          <p className="eyebrow">Destinos destacados</p>
          <h2>10 zonas turísticas de Chile para usar como ejemplo inicial</h2>
          <p>
            Los destinos, textos, duraciones y valores son editables. Puedes reemplazarlos por paquetes reales,
            fechas de salida, cupos disponibles e imágenes propias.
          </p>
        </div>
        <div className="container destinations-grid">
          {destinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.slug} />
          ))}
        </div>
      </section>

      <section className="section" id="valores">
        <div className="container section-heading narrow">
          <p className="eyebrow">Valores referenciales</p>
          <h2>Precios para personas y grupos</h2>
          <p>Tabla base para mostrar tarifas ficticias. Úsala como referencia visual y reemplázala por precios definitivos.</p>
        </div>
        <div className="container table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th>Destino</th>
                <th>Duración</th>
                <th>Persona</th>
                <th>Grupo</th>
                <th>Mínimo grupo</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination) => (
                <tr key={destination.slug}>
                  <td>{destination.name}</td>
                  <td>{destination.duration}</td>
                  <td>{formatCLP(destination.individualPrice)}</td>
                  <td>{formatCLP(destination.groupPrice)} p/p</td>
                  <td>{destination.groupMin} personas</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section warm">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Cómo funciona</p>
            <h2>Una experiencia de viaje simple y cercana</h2>
            <p>
              La estructura está pensada para que el usuario entienda el destino, revise valores,
              vea experiencias de otros viajeros y solicite una cotización sin fricción.
            </p>
          </div>
          <div className="steps-grid">
            {[
              ["1", "Elige destino", "La persona revisa rutas, valores y sitios a visitar."],
              ["2", "Cotiza", "Completa el formulario o escribe por WhatsApp."],
              ["3", "Personaliza", "Se ajusta fecha, grupo, alojamiento, ritmo y actividades."],
              ["4", "Viaja", "Luego puedes subir fotos reales a la galería de experiencias."]
            ].map(([num, title, text]) => (
              <article className="step-card" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="experiencias">
        <div className="container section-heading">
          <p className="eyebrow">Experiencias de viajeros</p>
          <h2>Galería editable para imágenes referenciales o fotos reales</h2>
          <p>
            Dejé tarjetas visuales con espacios preparados para reemplazar por fotografías de viajeros,
            testimonios breves, destino asociado y descripción de la experiencia.
          </p>
        </div>
        <div className="container">
          <ExperienceGallery />
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <p className="eyebrow">Cotización inicial</p>
          <h2>¿Quieres transformar esta maqueta en el sitio real del emprendimiento?</h2>
          <p>
            Solo debes editar nombre, logo, WhatsApp, correo, valores definitivos e imágenes. La base ya queda lista para subir a GitHub y desplegar en Vercel.
          </p>
          <div className="hero-actions center">
            <Link className="btn" href="/agenda">Cotizar un viaje</Link>
            <a className="btn secondary" href={buildWhatsAppUrl("Hola, quiero información sobre viajes nacionales en Chile.")} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}

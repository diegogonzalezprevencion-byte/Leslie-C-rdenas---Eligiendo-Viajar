import Link from 'next/link';
import DestinationCard from '@/components/DestinationCard';
import ExperienceSlots from '@/components/ExperienceSlots';
import { destinos, experiencias } from '@/data/destinos';

export default function HomePage() {
  const destacados = destinos.slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Turismo nacional · Chile</p>
          <h1>Viajes tranquilos, cercanos y bien organizados por Chile.</h1>
          <p className="hero-text">Diseña rutas para personas, parejas, familias y grupos que quieren conocer zonas turísticas de Chile con una experiencia cálida, simple y acompañada.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/destinos">Ver destinos</Link>
            <Link className="button secondary" href="/cotizar">Cotizar viaje</Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-image">Espacio para imagen principal</div>
          <div className="floating-note">
            <strong>10 rutas demo</strong>
            <span>Valores editables y destinos personalizables</span>
          </div>
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Propuesta</p>
          <h2>Una web pensada para vender experiencias, no solo traslados.</h2>
        </div>
        <div className="feature-list">
          <article><strong>Rutas por destino</strong><span>Sitios a visitar, duración y enfoque turístico.</span></article>
          <article><strong>Valores simples</strong><span>Precio individual y precio especial para grupos.</span></article>
          <article><strong>Galería social</strong><span>Espacios para subir fotos de viajeros reales.</span></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Destinos destacados</p>
          <h2>Rutas iniciales para comenzar a vender</h2>
          <p>Los textos y valores son referenciales para que puedas reemplazarlos por información real del emprendimiento.</p>
        </div>
        <div className="cards-grid">
          {destacados.map((destino) => <DestinationCard key={destino.slug} destino={destino} />)}
        </div>
      </section>

      <ExperienceSlots />

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">Experiencias</p>
          <h2>Comentarios de viajeros</h2>
        </div>
        <div className="testimonial-grid">
          {experiencias.map((item) => (
            <article key={item.nombre} className="testimonial-card">
              <span>{item.etiqueta}</span>
              <p>“{item.texto}”</p>
              <strong>{item.nombre}</strong>
              <small>{item.destino}</small>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import ExperienceSlots from '@/components/ExperienceSlots';
import { experiencias } from '@/data/destinos';

export const metadata = {
  title: 'Experiencias | Eligiendo Viajar',
  description: 'Galería editable y comentarios de viajeros para fortalecer la confianza del emprendimiento.'
};

export default function ExperienciasPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Historias viajeras</p>
        <h1>Experiencias de otros viajeros</h1>
        <p>Sección preparada para subir fotos reales, testimonios y momentos destacados de cada salida.</p>
      </section>
      <ExperienceSlots />
      <section className="section testimonials">
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

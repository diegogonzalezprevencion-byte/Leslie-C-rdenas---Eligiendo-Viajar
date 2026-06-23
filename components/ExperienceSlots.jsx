export default function ExperienceSlots() {
  return (
    <section className="section soft-section">
      <div className="section-heading">
        <p className="eyebrow">Galería editable</p>
        <h2>Espacios para imágenes de experiencias reales</h2>
        <p>Estos bloques están pensados para reemplazarlos después por fotografías reales de viajeros, grupos, familias o actividades realizadas.</p>
      </div>
      <div className="gallery-grid">
        {['Grupo en destino', 'Mirador natural', 'Experiencia gastronómica', 'Foto de viajeros', 'Atardecer en ruta', 'Actividad local'].map((item, index) => (
          <div className="gallery-placeholder" key={item}>
            <span>Foto {index + 1}</span>
            <strong>{item}</strong>
            <small>Reemplazar por imagen real</small>
          </div>
        ))}
      </div>
    </section>
  );
}

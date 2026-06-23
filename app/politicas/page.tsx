export const metadata = {
  title: "Políticas | Rutas Nativas Chile",
  description: "Políticas referenciales para reservas, cambios y uso de información."
};

export default function PoliticasPage() {
  return (
    <main>
      <section className="page-hero small-hero">
        <div className="container section-heading narrow">
          <p className="eyebrow">Información importante</p>
          <h1>Políticas referenciales</h1>
          <p>Texto base editable para reservas, cambios, cancelaciones y uso de fotografías.</p>
        </div>
      </section>
      <section className="section soft">
        <div className="container policy-card">
          <h2>Reservas</h2>
          <p>Las reservas quedan sujetas a disponibilidad, confirmación de fecha, número de pasajeros y pago acordado con el emprendimiento.</p>
          <h2>Cambios y cancelaciones</h2>
          <p>Los cambios se revisan caso a caso según temporada, proveedores, alojamiento, transporte y condiciones climáticas.</p>
          <h2>Valores</h2>
          <p>Los valores publicados en esta maqueta son ficticios y referenciales. Deben ser reemplazados por tarifas reales antes de publicar comercialmente.</p>
          <h2>Fotografías de viajeros</h2>
          <p>Las imágenes de experiencias deben publicarse solo con autorización de las personas correspondientes.</p>
        </div>
      </section>
    </main>
  );
}

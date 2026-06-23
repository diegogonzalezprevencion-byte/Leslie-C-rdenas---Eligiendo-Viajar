export const metadata = {
  title: 'Políticas | Eligiendo Viajar',
  description: 'Condiciones referenciales de reserva, pago y cambios para viajes nacionales.'
};

export default function PoliticasPage() {
  return (
    <section className="page-hero compact text-page">
      <p className="eyebrow">Información editable</p>
      <h1>Políticas de viaje</h1>
      <h2>Reservas</h2>
      <p>Las reservas se consideran confirmadas una vez validado el pago o abono definido para cada salida.</p>
      <h2>Cambios</h2>
      <p>Los cambios de fecha, destino o cantidad de pasajeros deben solicitarse con anticipación y quedan sujetos a disponibilidad.</p>
      <h2>Valores</h2>
      <p>Los valores publicados son referenciales y pueden variar según temporada, disponibilidad, alojamiento, transporte y servicios incluidos.</p>
      <h2>Seguridad del viaje</h2>
      <p>Las rutas pueden ajustarse por condiciones climáticas, cortes de camino u otros factores que afecten la experiencia.</p>
    </section>
  );
}

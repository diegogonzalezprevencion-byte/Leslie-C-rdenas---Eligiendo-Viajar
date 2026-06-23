import BookingForm from "../../components/BookingForm";

export const metadata = {
  title: "Cotizar viaje | Rutas Nativas Chile",
  description: "Formulario para cotizar viajes nacionales por Chile para personas y grupos."
};

export default function AgendaPage() {
  return (
    <main>
      <section className="page-hero small-hero">
        <div className="container section-heading narrow">
          <p className="eyebrow">Cotización</p>
          <h1>Agenda o cotiza tu próxima experiencia</h1>
          <p>Completa los datos básicos y envía la solicitud por WhatsApp o correo. Los valores son referenciales y editables.</p>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}

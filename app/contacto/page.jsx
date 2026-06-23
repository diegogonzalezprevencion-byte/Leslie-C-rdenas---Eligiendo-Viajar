export const metadata = {
  title: 'Contacto | Eligiendo Viajar',
  description: 'Formulario de contacto para cotizar viajes nacionales en Chile.'
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Hablemos de tu próxima ruta</p>
        <h1>Contacto y reservas</h1>
        <p>Deja este espacio conectado a correo, WhatsApp o formulario externo cuando el emprendimiento esté listo para recibir consultas.</p>
      </section>

      <section className="section contact-layout">
        <form className="quote-form">
          <label>Nombre<input type="text" placeholder="Nombre y apellido" /></label>
          <label>Correo<input type="email" placeholder="correo@ejemplo.cl" /></label>
          <label>Teléfono<input type="tel" placeholder="+56 9" /></label>
          <label>Mensaje<textarea placeholder="Cuéntanos qué destino te interesa y cuántas personas viajarían." /></label>
          <button className="button primary" type="button">Formulario demostrativo</button>
        </form>
        <aside className="contact-card">
          <h2>Datos editables</h2>
          <p><strong>WhatsApp:</strong> +56 9 0000 0000</p>
          <p><strong>Correo:</strong> contacto@eligiendoviajar.cl</p>
          <p><strong>Atención:</strong> Lunes a viernes, 09:00 a 18:00 hrs.</p>
          <p className="muted">Reemplaza estos datos por la información real del emprendimiento.</p>
        </aside>
      </section>
    </>
  );
}

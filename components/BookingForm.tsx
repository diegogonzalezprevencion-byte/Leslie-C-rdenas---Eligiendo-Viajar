"use client";

import { useEffect, useMemo, useState } from "react";
import { destinations } from "../data/destinations";
import { buildWhatsAppUrl, formatCLP } from "../lib/format";

export default function BookingForm() {
  const [destinationSlug, setDestinationSlug] = useState(destinations[0].slug);
  const [mode, setMode] = useState<"individual" | "group">("individual");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const destino = params.get("destino");
    if (destino && destinations.some((item) => item.slug === destino)) {
      setDestinationSlug(destino);
    }
  }, []);

  const selected = destinations.find((item) => item.slug === destinationSlug) ?? destinations[0];
  const unitPrice = mode === "group" ? selected.groupPrice : selected.individualPrice;
  const suggestedPeople = mode === "group" ? Math.max(people, selected.groupMin) : people;

  const total = useMemo(() => unitPrice * Math.max(1, suggestedPeople), [unitPrice, suggestedPeople]);

  const message = `Hola, quiero cotizar un viaje con Rutas Nativas Chile.%0A%0ADestino: ${selected.name}%0AModalidad: ${mode === "group" ? "Grupo" : "Persona / pareja"}%0AN° de personas: ${suggestedPeople}%0AFecha tentativa: ${date || "Por definir"}%0ANombre: ${name || "Por completar"}%0ACorreo: ${email || "Por completar"}%0AComentarios: ${notes || "Sin comentarios"}%0A%0AValor referencial estimado: ${formatCLP(total)}`;

  return (
    <div className="booking-shell">
      <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Destino
          <select value={destinationSlug} onChange={(event) => setDestinationSlug(event.target.value)}>
            {destinations.map((destination) => (
              <option value={destination.slug} key={destination.slug}>{destination.name}</option>
            ))}
          </select>
        </label>

        <div className="form-grid two">
          <label>
            Modalidad
            <select value={mode} onChange={(event) => setMode(event.target.value as "individual" | "group")}>
              <option value="individual">Persona / pareja</option>
              <option value="group">Grupo</option>
            </select>
          </label>
          <label>
            N° de personas
            <input type="number" min={1} value={people} onChange={(event) => setPeople(Number(event.target.value))} />
          </label>
        </div>

        <div className="form-grid two">
          <label>
            Fecha tentativa
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <label>
            Nombre
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nombre y apellido" />
          </label>
        </div>

        <label>
          Correo
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="correo@ejemplo.cl" />
        </label>

        <label>
          Comentarios del viaje
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Ej.: queremos alojamiento familiar, viaje de empresa, salida de amigos, ritmo tranquilo, etc." />
        </label>

        <div className="form-actions">
          <a className="btn" href={buildWhatsAppUrl(decodeURIComponent(message.replace(/%0A/g, "\n")))} target="_blank" rel="noopener noreferrer">Enviar por WhatsApp</a>
          <a className="btn secondary" href={`mailto:contacto@rutasnativas.cl?subject=Cotización ${selected.name}&body=${message}`}>Enviar por correo</a>
        </div>
      </form>

      <aside className="summary-card">
        <p className="eyebrow">Resumen referencial</p>
        <h2>{selected.name}</h2>
        <p>{selected.duration}</p>
        <div className="summary-line"><span>Modalidad</span><strong>{mode === "group" ? `Grupo desde ${selected.groupMin}` : "Individual"}</strong></div>
        <div className="summary-line"><span>Personas</span><strong>{suggestedPeople}</strong></div>
        <div className="summary-line"><span>Valor unitario</span><strong>{formatCLP(unitPrice)}</strong></div>
        <div className="summary-total"><span>Total estimado</span><strong>{formatCLP(total)}</strong></div>
        <small>Valores ficticios de ejemplo. Edita los precios en <code>data/destinations.ts</code>.</small>
      </aside>
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import { destinos, formatCLP } from '@/data/destinos';

export default function CotizarPage() {
  const [destinoSlug, setDestinoSlug] = useState(destinos[0].slug);
  const [personas, setPersonas] = useState(2);
  const [tipo, setTipo] = useState('persona');

  const destino = destinos.find((item) => item.slug === destinoSlug) || destinos[0];
  const total = useMemo(() => {
    const precio = tipo === 'grupo' ? destino.precioGrupo : destino.precioPersona;
    return precio * Number(personas || 1);
  }, [destino, personas, tipo]);

  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Cotización rápida</p>
        <h1>Simula el valor de una experiencia</h1>
        <p>Este cotizador es referencial. Puedes reemplazar los valores por tarifas reales y conectar el formulario con WhatsApp, correo o CRM.</p>
      </section>

      <section className="section quote-layout">
        <form className="quote-form">
          <label>
            Destino
            <select value={destinoSlug} onChange={(event) => setDestinoSlug(event.target.value)}>
              {destinos.map((item) => <option key={item.slug} value={item.slug}>{item.nombre}</option>)}
            </select>
          </label>

          <label>
            Cantidad de personas
            <input type="number" min="1" max="60" value={personas} onChange={(event) => setPersonas(event.target.value)} />
          </label>

          <label>
            Tipo de tarifa
            <select value={tipo} onChange={(event) => setTipo(event.target.value)}>
              <option value="persona">Tarifa por persona</option>
              <option value="grupo">Tarifa especial grupo</option>
            </select>
          </label>

          <label>
            Nombre de contacto
            <input type="text" placeholder="Ej: Leslie Cárdenas" />
          </label>

          <label>
            Comentarios del viaje
            <textarea placeholder="Indica fechas tentativas, tipo de grupo, intereses o requerimientos especiales." />
          </label>
        </form>

        <aside className="quote-summary">
          <p className="eyebrow">Resumen</p>
          <h2>{destino.nombre}</h2>
          <p>{destino.duracion}</p>
          <div className="summary-total">
            <span>Total estimado</span>
            <strong>{formatCLP(total)}</strong>
          </div>
          <p className="muted">Valor referencial calculado para {personas || 1} persona(s). No considera pasajes aéreos, alojamiento ni alimentación salvo que se agregue en la propuesta final.</p>
          <a className="button primary full" href={`https://wa.me/56900000000?text=Hola,%20quiero%20cotizar%20${encodeURIComponent(destino.nombre)}`} target="_blank" rel="noreferrer">Enviar por WhatsApp</a>
        </aside>
      </section>
    </>
  );
}

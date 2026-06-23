import DestinationCard from '@/components/DestinationCard';
import { destinos, formatCLP } from '@/data/destinos';

export const metadata = {
  title: 'Destinos | Eligiendo Viajar',
  description: 'Diez zonas turísticas de Chile con precios referenciales, sitios a visitar y duración estimada.'
};

export default function DestinosPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Catálogo editable</p>
        <h1>Destinos nacionales disponibles</h1>
        <p>Ejemplos de rutas turísticas para presentar la oferta inicial del emprendimiento. Puedes editar valores, duración, lugares y cupos.</p>
      </section>

      <section className="section">
        <div className="cards-grid">
          {destinos.map((destino) => <DestinationCard key={destino.slug} destino={destino} />)}
        </div>
      </section>

      <section className="section details-list">
        <div className="section-heading">
          <p className="eyebrow">Detalle por ruta</p>
          <h2>Sitios a visitar e información comercial</h2>
        </div>
        {destinos.map((destino) => (
          <article id={destino.slug} className="detail-card" key={destino.slug}>
            <div>
              <p className="eyebrow">{destino.zona}</p>
              <h3>{destino.nombre}</h3>
              <p>{destino.bajada}</p>
              <div className="tag-row">
                <span>{destino.duracion}</span>
                <span>{destino.cuposGrupo}</span>
              </div>
            </div>
            <div>
              <h4>Sitios a visitar</h4>
              <ul className="clean-list">
                {destino.sitios.map((sitio) => <li key={sitio}>{sitio}</li>)}
              </ul>
            </div>
            <div>
              <h4>Valores referenciales</h4>
              <p><strong>{formatCLP(destino.precioPersona)}</strong> por persona</p>
              <p><strong>{formatCLP(destino.precioGrupo)}</strong> por persona en grupo</p>
              <h4>Incluye</h4>
              <ul className="clean-list">
                {destino.incluye.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

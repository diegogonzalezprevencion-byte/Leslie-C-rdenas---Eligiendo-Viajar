import Link from 'next/link';
import { formatCLP } from '@/data/destinos';

export default function DestinationCard({ destino }) {
  return (
    <article className={`destination-card tone-${destino.tono}`}>
      <div className="image-placeholder">
        <span>Imagen referencial</span>
        <small>{destino.nombre}</small>
      </div>
      <div className="card-body">
        <p className="eyebrow">{destino.zona}</p>
        <h3>{destino.nombre}</h3>
        <p>{destino.bajada}</p>
        <div className="price-grid">
          <span><strong>{formatCLP(destino.precioPersona)}</strong><small>por persona</small></span>
          <span><strong>{formatCLP(destino.precioGrupo)}</strong><small>valor grupo</small></span>
        </div>
        <div className="tag-row">
          <span>{destino.duracion}</span>
          <span>{destino.cuposGrupo}</span>
        </div>
        <Link className="text-link" href={`/destinos#${destino.slug}`}>Ver sitios a visitar</Link>
      </div>
    </article>
  );
}

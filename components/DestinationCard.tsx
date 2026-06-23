import Image from "next/image";
import Link from "next/link";
import type { Destination } from "../data/destinations";
import { formatCLP } from "../lib/format";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="destination-card" id={destination.slug}>
      <div className="destination-image">
        <Image src={destination.image} alt={`Imagen referencial de ${destination.name}`} width={760} height={520} />
        <span className="pill floating">{destination.zone}</span>
      </div>
      <div className="destination-body">
        <p className="eyebrow">{destination.region}</p>
        <h3>{destination.name}</h3>
        <p>{destination.shortDescription}</p>
        <div className="mini-row">
          <span>{destination.duration}</span>
          <span>{destination.mood}</span>
        </div>
        <ul className="check-list compact">
          {destination.highlights.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="price-box">
          <div>
            <small>Persona</small>
            <strong>{formatCLP(destination.individualPrice)}</strong>
          </div>
          <div>
            <small>Grupo desde {destination.groupMin}</small>
            <strong>{formatCLP(destination.groupPrice)}</strong>
          </div>
        </div>
        <Link className="btn small" href={`/agenda?destino=${destination.slug}`}>Cotizar esta ruta</Link>
      </div>
    </article>
  );
}

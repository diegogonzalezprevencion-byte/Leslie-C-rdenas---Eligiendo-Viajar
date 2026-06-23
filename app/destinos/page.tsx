import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../data/destinations";

export const metadata = {
  title: "Destinos | Rutas Nativas Chile",
  description: "Listado de destinos turísticos nacionales con valores referenciales para personas y grupos."
};

export default function DestinosPage() {
  return (
    <main>
      <section className="page-hero small-hero">
        <div className="container section-heading narrow">
          <p className="eyebrow">Explora Chile</p>
          <h1>Destinos y rutas disponibles</h1>
          <p>Listado completo de paquetes de ejemplo. Reemplaza la información por tus productos turísticos reales.</p>
        </div>
      </section>
      <section className="section soft">
        <div className="container destinations-grid">
          {destinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}

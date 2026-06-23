import Image from "next/image";
import { experiences } from "../data/destinations";

export default function ExperienceGallery() {
  return (
    <div className="experience-grid">
      {experiences.map((experience) => (
        <article className="experience-card" key={experience.title}>
          <Image src={experience.image} alt={`Imagen referencial de experiencia: ${experience.title}`} width={640} height={460} />
          <div>
            <span className="pill">{experience.destination}</span>
            <h3>{experience.title}</h3>
            <p>“{experience.quote}”</p>
            <small>Reemplaza esta imagen por fotografías reales de viajeros.</small>
          </div>
        </article>
      ))}
    </div>
  );
}

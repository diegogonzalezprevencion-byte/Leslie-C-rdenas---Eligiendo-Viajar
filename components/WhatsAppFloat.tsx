import { buildWhatsAppUrl } from "../lib/format";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppUrl("Hola, quiero cotizar una experiencia turística por Chile.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  );
}

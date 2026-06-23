export function formatCLP(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value);
}

export function buildWhatsAppUrl(message: string) {
  const phone = "56912345678"; // Reemplazar por el número real del emprendimiento.
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

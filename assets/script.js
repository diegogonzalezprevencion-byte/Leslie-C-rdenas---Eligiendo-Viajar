
const destinations = [
  { id: "valle-elqui", name: "Valle del Elqui", price: 189000, group: 699000, days: "3 días / 2 noches", zone: "Coquimbo" },
  { id: "san-pedro", name: "San Pedro de Atacama", price: 329000, group: 1190000, days: "4 días / 3 noches", zone: "Antofagasta" },
  { id: "pucon", name: "Pucón y Villarrica", price: 249000, group: 899000, days: "3 días / 2 noches", zone: "Araucanía" },
  { id: "chiloe", name: "Chiloé Mágico", price: 279000, group: 990000, days: "4 días / 3 noches", zone: "Los Lagos" },
  { id: "torres-paine", name: "Torres del Paine", price: 559000, group: 1990000, days: "5 días / 4 noches", zone: "Magallanes" },
  { id: "carretera-austral", name: "Carretera Austral", price: 489000, group: 1750000, days: "5 días / 4 noches", zone: "Aysén" },
  { id: "valparaiso", name: "Valparaíso Patrimonial", price: 89000, group: 319000, days: "Full day", zone: "Valparaíso" },
  { id: "cajon-maipo", name: "Cajón del Maipo", price: 79000, group: 289000, days: "Full day", zone: "Metropolitana" },
  { id: "siete-tazas", name: "Radal Siete Tazas", price: 149000, group: 549000, days: "2 días / 1 noche", zone: "Maule" },
  { id: "huilo-huilo", name: "Huilo Huilo", price: 269000, group: 969000, days: "3 días / 2 noches", zone: "Los Ríos" }
];

const peso = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

function fillDestinationSelect(){
  const select = document.querySelector("#destino");
  if(!select) return;
  destinations.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.name} - ${item.days}`;
    select.appendChild(option);
  });
}

function calculateQuote(){
  const select = document.querySelector("#destino");
  const people = document.querySelector("#personas");
  const group = document.querySelector("#grupo");
  const output = document.querySelector("#resultadoCotizacion");
  const detail = document.querySelector("#detalleCotizacion");
  if(!select || !people || !group || !output) return;
  const selected = destinations.find(item => item.id === select.value) || destinations[0];
  const qty = Math.max(parseInt(people.value || "1", 10), 1);
  let total = selected.price * qty;
  let mode = "valor por persona";
  if(group.checked && qty >= 4){
    const baseGroups = Math.ceil(qty / 4);
    total = selected.group * baseGroups;
    mode = "tarifa grupal referencial cada 4 personas";
  }
  output.textContent = peso.format(total);
  if(detail){
    detail.textContent = `${selected.name} · ${selected.days} · ${qty} viajero(s) · ${mode}. Valores ficticios y editables.`;
  }
}

function setYear(){
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  fillDestinationSelect();
  calculateQuote();
  setYear();
  ["destino","personas","grupo"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener("input", calculateQuote);
    if(el) el.addEventListener("change", calculateQuote);
  });
});

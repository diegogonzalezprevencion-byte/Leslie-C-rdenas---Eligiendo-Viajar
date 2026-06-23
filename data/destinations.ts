export type Destination = {
  slug: string;
  name: string;
  zone: string;
  region: string;
  duration: string;
  mood: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  includes: string[];
  notIncluded: string[];
  individualPrice: number;
  groupPrice: number;
  groupMin: number;
  image: string;
  galleryHint: string;
};

export const destinations: Destination[] = [
  {
    slug: "san-pedro-de-atacama",
    name: "San Pedro de Atacama",
    zone: "Norte mágico",
    region: "Región de Antofagasta",
    duration: "4 días / 3 noches",
    mood: "Desierto, cielos y salares",
    shortDescription: "Un viaje de paisajes lunares, lagunas altiplánicas y cielos perfectos para contemplar estrellas.",
    longDescription: "Ruta pensada para viajeros que buscan naturaleza extrema, fotografía, caminatas suaves y experiencias contemplativas en el desierto más icónico de Chile.",
    highlights: ["Valle de la Luna", "Géiseres del Tatio", "Lagunas Altiplánicas", "Pueblo de San Pedro", "Tour astronómico referencial"],
    includes: ["Coordinación general", "Itinerario sugerido", "Acompañamiento de anfitrión", "Traslados locales referenciales"],
    notIncluded: ["Pasajes aéreos", "Entradas a parques", "Alimentación no indicada"],
    individualPrice: 389000,
    groupPrice: 329000,
    groupMin: 4,
    image: "/destinos/san-pedro-de-atacama.svg",
    galleryHint: "Espacio para fotos de viajeros en Valle de la Luna, salares o cielos nocturnos."
  },
  {
    slug: "valle-del-elqui",
    name: "Valle del Elqui",
    zone: "Norte sereno",
    region: "Región de Coquimbo",
    duration: "3 días / 2 noches",
    mood: "Astroturismo y descanso",
    shortDescription: "Una escapada de calma, pueblos interiores, observación astronómica y paisajes entre montañas.",
    longDescription: "Ideal para desconectarse, recorrer Vicuña y Pisco Elqui, disfrutar cielos despejados y vivir un ritmo pausado entre naturaleza y cultura local.",
    highlights: ["Vicuña", "Pisco Elqui", "Observatorio turístico", "Río Elqui", "Mercados y artesanía local"],
    includes: ["Diseño de ruta", "Coordinación de actividades", "Recomendaciones gastronómicas", "Soporte por WhatsApp"],
    notIncluded: ["Alojamiento", "Traslados interurbanos", "Consumos personales"],
    individualPrice: 219000,
    groupPrice: 179000,
    groupMin: 5,
    image: "/destinos/valle-del-elqui.svg",
    galleryHint: "Espacio para fotos de atardeceres, observatorios, valles y experiencias grupales."
  },
  {
    slug: "valparaiso-vina-del-mar",
    name: "Valparaíso y Viña del Mar",
    zone: "Costa patrimonial",
    region: "Región de Valparaíso",
    duration: "Full day",
    mood: "Cultura, costa y ciudad",
    shortDescription: "Recorrido por cerros, miradores, arte urbano, borde costero y rincones clásicos de la zona central.",
    longDescription: "Una alternativa cercana a Santiago para grupos, familias o empresas que buscan un día cultural y relajado frente al mar.",
    highlights: ["Cerro Alegre", "Cerro Concepción", "Reloj de Flores", "Borde costero", "Miradores patrimoniales"],
    includes: ["Guía anfitrión", "Ruta caminable", "Coordinación horaria", "Puntos fotográficos"],
    notIncluded: ["Almuerzo", "Propinas", "Entradas especiales"],
    individualPrice: 69000,
    groupPrice: 49000,
    groupMin: 8,
    image: "/destinos/valparaiso-vina-del-mar.svg",
    galleryHint: "Espacio para fotos de cerros coloridos, ascensores, arte urbano y costa."
  },
  {
    slug: "cajon-del-maipo",
    name: "Cajón del Maipo",
    zone: "Cordillera central",
    region: "Región Metropolitana",
    duration: "Full day",
    mood: "Montaña y aire libre",
    shortDescription: "Una salida cordillerana para conectar con ríos, miradores, embalses y paisajes de montaña cerca de Santiago.",
    longDescription: "Ruta flexible para grupos pequeños que buscan naturaleza sin alejarse demasiado de la ciudad, con paradas fotográficas y momentos de descanso.",
    highlights: ["Embalse El Yeso", "San José de Maipo", "Miradores cordilleranos", "Picnic referencial", "Rutas escénicas"],
    includes: ["Planificación del día", "Coordinación de puntos de encuentro", "Anfitrión de viaje", "Checklist previo"],
    notIncluded: ["Comidas", "Seguro personal", "Servicios no indicados"],
    individualPrice: 79000,
    groupPrice: 59000,
    groupMin: 6,
    image: "/destinos/cajon-del-maipo.svg",
    galleryHint: "Espacio para fotos de montaña, embalse, caminatas y grupos en ruta."
  },
  {
    slug: "pucon-villarrica",
    name: "Pucón y Villarrica",
    zone: "Araucanía lacustre",
    region: "Región de La Araucanía",
    duration: "4 días / 3 noches",
    mood: "Lagos, termas y aventura suave",
    shortDescription: "Una experiencia sureña con lagos, termas, miradores, bosque nativo y vistas al volcán Villarrica.",
    longDescription: "Programa pensado para viajeros que quieren mezclar descanso, naturaleza, caminatas livianas, gastronomía local y paisajes del sur de Chile.",
    highlights: ["Lago Villarrica", "Ojos del Caburgua", "Termas", "Centro de Pucón", "Miradores al volcán"],
    includes: ["Ruta organizada", "Acompañamiento", "Sugerencias de termas", "Coordinación local"],
    notIncluded: ["Pasajes", "Tickets de termas", "Actividades de aventura específicas"],
    individualPrice: 349000,
    groupPrice: 289000,
    groupMin: 4,
    image: "/destinos/pucon-villarrica.svg",
    galleryHint: "Espacio para fotos de lagos, termas, bosque nativo y experiencias de descanso."
  },
  {
    slug: "chiloe-magico",
    name: "Chiloé Mágico",
    zone: "Archipiélago austral",
    region: "Región de Los Lagos",
    duration: "5 días / 4 noches",
    mood: "Tradición, mar y patrimonio",
    shortDescription: "Una ruta para descubrir palafitos, iglesias patrimoniales, mercados, costa y relatos del archipiélago.",
    longDescription: "Experiencia cultural y natural que mezcla arquitectura, gastronomía local, paisajes marinos y pueblos con identidad propia.",
    highlights: ["Castro", "Dalcahue", "Iglesias patrimoniales", "Palafitos", "Mercados locales"],
    includes: ["Itinerario cultural", "Coordinación de rutas", "Recomendaciones locales", "Acompañamiento remoto o presencial"],
    notIncluded: ["Pasajes", "Alojamiento", "Alimentación"],
    individualPrice: 399000,
    groupPrice: 339000,
    groupMin: 4,
    image: "/destinos/chiloe-magico.svg",
    galleryHint: "Espacio para fotos de palafitos, iglesias, mercados y paisajes de mar."
  },
  {
    slug: "carretera-austral",
    name: "Carretera Austral",
    zone: "Patagonia verde",
    region: "Región de Aysén",
    duration: "6 días / 5 noches",
    mood: "Bosques, lagos y ruta escénica",
    shortDescription: "Una ruta de contemplación por caminos australes, ríos, bosques, lagos turquesa y paisajes amplios.",
    longDescription: "Diseñada para viajeros amantes de los paisajes abiertos y la fotografía, con tiempos tranquilos para recorrer y apreciar la Patagonia norte.",
    highlights: ["Coyhaique", "Puerto Río Tranquilo", "Capillas de Mármol", "Lago General Carrera", "Miradores de ruta"],
    includes: ["Diseño logístico", "Plan de paradas", "Coordinación de traslados referenciales", "Asistencia de viaje"],
    notIncluded: ["Vuelos", "Navegaciones", "Alojamiento", "Comidas"],
    individualPrice: 629000,
    groupPrice: 549000,
    groupMin: 4,
    image: "/destinos/carretera-austral.svg",
    galleryHint: "Espacio para fotos de ruta, lagos, bosques y navegación referencial."
  },
  {
    slug: "torres-del-paine",
    name: "Torres del Paine",
    zone: "Patagonia icónica",
    region: "Región de Magallanes",
    duration: "5 días / 4 noches",
    mood: "Parque nacional y paisajes épicos",
    shortDescription: "Una experiencia para conocer miradores, lagos, fauna y postales inolvidables de la Patagonia chilena.",
    longDescription: "Ruta de alto impacto visual, pensada para viajeros que desean una experiencia organizada, segura y con tiempos de contemplación en el parque.",
    highlights: ["Puerto Natales", "Parque Nacional Torres del Paine", "Lago Grey", "Lago Pehoé", "Miradores panorámicos"],
    includes: ["Coordinación de programa", "Anfitrión", "Ruta de miradores", "Checklist de equipamiento"],
    notIncluded: ["Vuelos", "Entradas al parque", "Seguro de viaje", "Comidas"],
    individualPrice: 719000,
    groupPrice: 629000,
    groupMin: 4,
    image: "/destinos/torres-del-paine.svg",
    galleryHint: "Espacio para fotos de lagos, montañas, fauna y miradores patagónicos."
  },
  {
    slug: "rapa-nui",
    name: "Rapa Nui",
    zone: "Isla y cultura viva",
    region: "Región de Valparaíso",
    duration: "5 días / 4 noches",
    mood: "Patrimonio, mar y cultura",
    shortDescription: "Una experiencia insular para descubrir paisajes volcánicos, sitios arqueológicos y cultura local.",
    longDescription: "Programa referencial para viajeros que buscan una ruta especial, con énfasis en respeto cultural, organización previa y contemplación del territorio.",
    highlights: ["Ahu Tongariki", "Rano Raraku", "Anakena", "Orongo", "Hanga Roa"],
    includes: ["Planificación de itinerario", "Coordinación previa", "Sugerencias de actividades", "Acompañamiento remoto"],
    notIncluded: ["Vuelos", "Permisos/entradas", "Alojamiento", "Alimentación"],
    individualPrice: 859000,
    groupPrice: 769000,
    groupMin: 4,
    image: "/destinos/rapa-nui.svg",
    galleryHint: "Espacio para fotos de moáis, playas, volcanes y experiencias culturales autorizadas."
  },
  {
    slug: "iquique-humberstone",
    name: "Iquique y Humberstone",
    zone: "Norte costero e histórico",
    region: "Región de Tarapacá",
    duration: "4 días / 3 noches",
    mood: "Playa, historia y desierto",
    shortDescription: "Una ruta que combina costa, patrimonio salitrero, miradores, desierto y vida urbana del norte.",
    longDescription: "Ideal para quienes buscan una mezcla de playa, cultura, historia y paisajes del norte grande en un formato cómodo y flexible.",
    highlights: ["Playa Cavancha", "Oficinas salitreras", "Baquedano", "Miradores costeros", "Pica referencial"],
    includes: ["Itinerario de viaje", "Coordinación de visitas", "Recomendaciones de ruta", "Soporte de planificación"],
    notIncluded: ["Pasajes", "Entradas", "Comidas", "Alojamiento"],
    individualPrice: 319000,
    groupPrice: 269000,
    groupMin: 5,
    image: "/destinos/iquique-humberstone.svg",
    galleryHint: "Espacio para fotos de playa, desierto, patrimonio salitrero y experiencias grupales."
  }
];

export const featuredStats = [
  ["10", "Zonas turísticas de ejemplo"],
  ["2", "Modalidades: personas y grupos"],
  ["100%", "Contenido editable"],
  ["Vercel", "Lista para publicar"]
];

export const experiences = [
  {
    title: "Atardecer en el norte",
    destination: "San Pedro de Atacama",
    image: "/experiencias/experiencia-1.svg",
    quote: "Un viaje tranquilo, muy bien organizado y con tiempos perfectos para sacar fotos."
  },
  {
    title: "Ruta de cerros y mar",
    destination: "Valparaíso y Viña del Mar",
    image: "/experiencias/experiencia-2.svg",
    quote: "La experiencia fue cercana, cultural y muy cómoda para un grupo familiar."
  },
  {
    title: "Descanso sureño",
    destination: "Pucón y Villarrica",
    image: "/experiencias/experiencia-3.svg",
    quote: "Nos encantó la mezcla de naturaleza, termas y momentos libres."
  },
  {
    title: "Patagonia inolvidable",
    destination: "Torres del Paine",
    image: "/experiencias/experiencia-4.svg",
    quote: "Paisajes enormes, logística clara y una experiencia que repetiríamos."
  },
  {
    title: "Cultura chilota",
    destination: "Chiloé Mágico",
    image: "/experiencias/experiencia-5.svg",
    quote: "Muy buena ruta para conocer pueblos, mercados y tradiciones locales."
  },
  {
    title: "Cielos del Elqui",
    destination: "Valle del Elqui",
    image: "/experiencias/experiencia-6.svg",
    quote: "El ritmo fue perfecto para desconectarse y disfrutar sin apuro."
  }
];

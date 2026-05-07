export type ActivityItem = {
  slug: string;
  year: number;
  title: string;
  summary: string;
  description: string[];
  heroImage: string;
  gallery: string[];
  dateLabel: string;
  location: string;
};

export const activityYears = [2022, 2023, 2024, 2025, 2026];

export const activities: ActivityItem[] = [
  {
    slug: "primeras-alianzas-comunitarias",
    year: 2022,
    title: "Primeras Alianzas Comunitarias",
    summary: "Inicio del trabajo conjunto con organizaciones amigas para ampliar el alcance de Joaju.",
    description: [
      "Durante 2022 dimos los primeros pasos para consolidar a Joaju como una red de voluntariado con presencia real en la comunidad.",
      "Esta etapa estuvo marcada por reuniones con referentes locales, definición de prioridades y jornadas de integración para construir confianza con las personas y organizaciones vinculadas al proyecto.",
      "Las alianzas formadas permitieron sentar bases para futuras campañas, sumar manos voluntarias y dar forma a una identidad solidaria sostenida en el tiempo."
    ],
    heroImage: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Agosto 2022",
    location: "Asunción, Paraguay"
  },
  {
    slug: "jornadas-de-integracion-social",
    year: 2022,
    title: "Jornadas de Integración Social",
    summary: "Encuentros para activar la participación voluntaria y fortalecer el vínculo humano en territorio.",
    description: [
      "Las jornadas de integración reunieron a voluntarios, familias y organizaciones en espacios pensados para compartir, escuchar y proyectar acciones conjuntas.",
      "Se realizaron dinámicas recreativas, actividades de acompañamiento y momentos de conversación para identificar necesidades prioritarias dentro de cada comunidad.",
      "La experiencia dejó aprendizajes valiosos y mostró que la cercanía humana es una de las principales fortalezas del programa."
    ],
    heroImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Noviembre 2022",
    location: "Gran Asunción"
  },
  {
    slug: "expansion-del-voluntariado",
    year: 2023,
    title: "Expansión del Voluntariado",
    summary: "Más personas, nuevas ideas y una agenda de acciones con mayor continuidad.",
    description: [
      "En 2023 Joaju amplió su red de participación con nuevos voluntarios, familiares y colaboradores cercanos a Datapar.",
      "La incorporación de más personas permitió organizar mejor cada actividad y abrir espacios para la planificación, la logística y la comunicación.",
      "Este crecimiento consolidó al programa como una comunidad activa con energía para sostener proyectos solidarios durante todo el año."
    ],
    heroImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Junio 2023",
    location: "Asunción, Paraguay"
  },
  {
    slug: "colecta-solidaria-de-fin-de-ano",
    year: 2023,
    title: "Colecta Solidaria de Fin de Año",
    summary: "Campaña de cierre anual enfocada en reunir insumos y regalos para familias acompañadas por el programa.",
    description: [
      "La colecta de fin de año reunió alimentos, juguetes, prendas y artículos esenciales a través del apoyo de voluntarios y aliados.",
      "Cada donación fue preparada y entregada con una lógica de cercanía, priorizando el encuentro con las personas por encima de la simple entrega material.",
      "La actividad dejó una huella especial por el nivel de compromiso colectivo y la emoción compartida en cada visita."
    ],
    heroImage: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Diciembre 2023",
    location: "Asunción, Paraguay"
  },
  {
    slug: "utiles-escolares-y-apoyo-educativo",
    year: 2024,
    title: "Útiles Escolares y Apoyo Educativo",
    summary: "Entrega de materiales y acompañamiento para fortalecer trayectorias escolares.",
    description: [
      "Durante esta actividad se organizaron kits escolares y espacios de intercambio con niños, adolescentes y familias.",
      "La propuesta buscó aliviar barreras de acceso a materiales básicos y, al mismo tiempo, transmitir un mensaje de apoyo y continuidad educativa.",
      "Fue una experiencia muy movilizadora, marcada por la participación activa de voluntarios en la preparación, clasificación y entrega."
    ],
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Febrero 2024",
    location: "Central, Paraguay"
  },
  {
    slug: "jornada-recreativa-comunitaria",
    year: 2024,
    title: "Jornada Recreativa Comunitaria",
    summary: "Un día de juegos, escucha y actividades compartidas para reforzar la unión comunitaria.",
    description: [
      "La jornada recreativa reunió a voluntarios y vecinos en una propuesta orientada a generar encuentro, alegría y participación.",
      "Hubo juegos colaborativos, espacios artísticos y momentos de integración pensados para todas las edades.",
      "La experiencia reafirmó que la recreación también puede ser una herramienta de contención y acompañamiento."
    ],
    heroImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Julio 2024",
    location: "Asunción, Paraguay"
  },
  {
    slug: "campana-dibujando-el-futuro",
    year: 2025,
    title: "Campaña Dibujando el Futuro",
    summary: "Acción principal del año con foco en acompañamiento, colectas y fortalecimiento comunitario.",
    description: [
      "Esta campaña reunió distintas líneas de trabajo en una misma narrativa: acompañar, escuchar y generar oportunidades reales.",
      "Se realizaron colectas, encuentros solidarios y actividades de fortalecimiento orientadas a personas en situación vulnerable.",
      "La campaña sintetiza el espíritu de Joaju al combinar organización, cercanía y compromiso humano."
    ],
    heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1453749024868-69789a8485aa?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Marzo 2025",
    location: "Asunción y alrededores"
  },
  {
    slug: "manos-que-acompanan",
    year: 2025,
    title: "Manos que Acompañan",
    summary: "Visitas, contención y apoyo directo a personas y familias vinculadas a Joaju.",
    description: [
      "Manos que Acompañan nació como una actividad para poner en valor la presencia y el tiempo compartido.",
      "Los voluntarios realizaron visitas planificadas, entregas puntuales y espacios de escucha activa para reforzar el acompañamiento cercano.",
      "Más que una acción aislada, fue una experiencia que fortaleció el sentido de comunidad dentro del programa."
    ],
    heroImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Septiembre 2025",
    location: "Central, Paraguay"
  },
  {
    slug: "banco-de-sangre",
    year: 2026,
    title: "Banco de Sangre",
    summary: "Jornada solidaria orientada a promover la donación voluntaria y la conciencia sobre su impacto.",
    description: [
      "La iniciativa Banco de Sangre busca conectar a la comunidad con una forma concreta de salvar vidas a través de la donación.",
      "La actividad combina difusión, convocatoria y acompañamiento para que más personas puedan sumarse de manera informada y segura.",
      "Además de la jornada principal, se trabaja en sensibilización para instalar el tema como parte de una cultura solidaria sostenida."
    ],
    heroImage: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Abril 2026",
    location: "Asunción, Paraguay"
  },
  {
    slug: "capacitacion-primeros-auxilios",
    year: 2026,
    title: "Capacitación Primeros Auxilios",
    summary: "Formación para actuar con rapidez, cuidado y responsabilidad en situaciones de emergencia.",
    description: [
      "La capacitación está pensada para brindar herramientas prácticas a voluntarios y participantes de la comunidad.",
      "Se trabajan nociones de prevención, asistencia inicial y respuesta organizada frente a distintos tipos de emergencias.",
      "Esta actividad refuerza la idea de que el voluntariado también se construye con preparación y aprendizaje compartido."
    ],
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Junio 2026",
    location: "Asunción, Paraguay"
  },
  {
    slug: "campana-manos-que-abrigan",
    year: 2026,
    title: "Campaña Manos que Abrigan",
    summary: "Acción solidaria enfocada en la recolección y entrega de abrigo para personas que más lo necesitan.",
    description: [
      "La campaña convoca a colaboradores, familias, amigos y clientes para reunir ropa de invierno y otros insumos esenciales.",
      "Además de la recolección, se organizan jornadas de clasificación, armado de kits y entrega acompañada por voluntarios.",
      "Es una propuesta que expresa con claridad el costado más cálido y cercano de Joaju."
    ],
    heroImage: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=75"
    ],
    dateLabel: "Invierno 2026",
    location: "Asunción y Central"
  }
];

export const activitiesByYear = activityYears.map((year) => ({
  year,
  items: activities.filter((activity) => activity.year === year)
}));

export function getYearActivities(year: number) {
  return activities.filter((activity) => activity.year === year);
}

export function getActivity(year: number, slug: string) {
  return activities.find((activity) => activity.year === year && activity.slug === slug);
}

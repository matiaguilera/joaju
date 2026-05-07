export type ActivityItem = {
  slug: string;
  year: number;
  title: string;
  summary: string;
  description: string[];
  heroImage?: string;
  gallery: string[];
  dateLabel: string;
  location: string;
};

export const activityYears = [2022, 2023, 2024, 2025, 2026];

export const activities: ActivityItem[] = [
  {
    slug: "colecta-amsap",
    year: 2022,
    title: "Colecta AMSAP",
    summary: "Participación de más de 20 voluntarios en una jornada solidaria para niñas y niños.",
    description: [
      "Más de 20 voluntarios participaron en la colecta de la Asociación Manos Solidarias de Alto Paraná (AMSAP).",
      "La jornada solidaria estuvo orientada a acompañar a niñas y niños de la comunidad.",
      "La actividad benefició a 160 niñas y niños, reforzando el compromiso de Joaju con acciones cercanas y concretas."
    ],
    gallery: [],
    dateLabel: "Febrero",
    location: "Alto Paraná, Paraguay"
  },
  {
    slug: "donacion-prendas-polideportivo-municipal",
    year: 2022,
    title: "Donación de Prendas",
    summary: "Donación de más de 100 prendas de vestir para el albergue del Polideportivo Municipal.",
    description: [
      "En mayo se realizó una donación de más de 100 prendas de vestir.",
      "La entrega fue destinada al albergue del Polideportivo Municipal, acompañando a personas que necesitaban abrigo y apoyo material.",
      "La acción reunió aportes solidarios y permitió responder a una necesidad concreta de la comunidad."
    ],
    gallery: [],
    dateLabel: "Mayo",
    location: "Ciudad del Este, Paraguay"
  },
  {
    slug: "educacion-financiera-hogar-las-tias",
    year: 2022,
    title: "Educación Financiera",
    summary: "Charlas para jóvenes y apoyo económico al Hogar las tías, con una recaudación de G. 19.529.000.",
    description: [
      "En junio se realizaron charlas sobre educación financiera para jóvenes.",
      "La actividad también incluyó apoyo económico al Hogar las tías.",
      "Gracias al compromiso de la comunidad, se logró una recaudación de G. 19.529.000."
    ],
    gallery: [],
    dateLabel: "Junio",
    location: "Paraguay"
  },
  {
    slug: "donacion-juguetes-snacks-bilal-esgaib",
    year: 2022,
    title: "Donación a Bilal Esgaib",
    summary: "Donación de juguetes y snacks a la Asociación Benéfica Bilal Esgaib.",
    description: [
      "En agosto se realizó una donación de juguetes y snacks a la Asociación Benéfica Bilal Esgaib.",
      "La acción buscó compartir un momento de alegría y acompañamiento con niñas y niños vinculados a la asociación.",
      "Cada aporte fue preparado con el espíritu cercano y solidario que caracteriza a Joaju."
    ],
    gallery: [],
    dateLabel: "Agosto",
    location: "Paraguay"
  },
  {
    slug: "aprendizaje-hogar-las-tias",
    year: 2022,
    title: "Programa de Aprendizaje",
    summary: "Programa en el Hogar las tías, beneficiando a 50 niños y adolescentes.",
    description: [
      "En octubre se desarrolló el Programa de Aprendizaje en el Hogar las tías, beneficiando a 50 niños y adolescentes.",
      "La actividad acompañó procesos educativos y de crecimiento para fortalecer oportunidades de aprendizaje."
    ],
    gallery: [],
    dateLabel: "Octubre",
    location: "Paraguay"
  },
  {
    slug: "donacion-equipos-san-felix",
    year: 2022,
    title: "Donación de Equipos Informáticos",
    summary: "Donación de 7 equipos informáticos a la Obra Social San Félix de Cantalicio.",
    description: [
      "El 6 de diciembre se realizó la donación de 7 equipos informáticos a la Obra Social San Félix de Cantalicio.",
      "La actividad buscó fortalecer oportunidades de aprendizaje y acceso a herramientas digitales.",
      "Esta acción acompañó procesos educativos y de crecimiento para la comunidad beneficiada."
    ],
    gallery: [],
    dateLabel: "Diciembre",
    location: "Paraguay"
  },
  {
    slug: "colecta-juntos-para-abrigarte",
    year: 2023,
    title: "Juntos para Abrigarte",
    summary: "Colecta de abrigos entregados en la Junta Municipal de Ciudad del Este.",
    description: [
      "En mayo se realizó una colecta de abrigos en el marco de la campaña Juntos para abrigarte.",
      "Los abrigos reunidos fueron entregados en la Junta Municipal de Ciudad del Este.",
      "La actividad acompañó a la comunidad con una acción concreta de cuidado y solidaridad."
    ],
    gallery: [],
    dateLabel: "Mayo",
    location: "Ciudad del Este, Paraguay"
  },
  {
    slug: "dia-del-nino-asentamiento-13-de-junio",
    year: 2023,
    title: "Día del Niño",
    summary: "Conmemoración del Día del Niño en el asentamiento 13 de junio de Hernandarias.",
    description: [
      "En agosto se conmemoró el Día del Niño en el asentamiento 13 de junio.",
      "La actividad se realizó en la ciudad de Hernandarias.",
      "Fue una jornada de cercanía, celebración y acompañamiento para niñas y niños de la comunidad."
    ],
    gallery: [],
    dateLabel: "Agosto",
    location: "Hernandarias, Paraguay"
  },
  {
    slug: "charla-donacion-de-sangre",
    year: 2023,
    title: "Charla sobre Donación de Sangre",
    summary: "Charla informativa sobre la importancia de la donación de sangre.",
    description: [
      "En agosto se realizó una charla informativa sobre la importancia de la donación de sangre.",
      "El espacio buscó sensibilizar y compartir información útil sobre el impacto de donar.",
      "La actividad reforzó el compromiso de Joaju con iniciativas que pueden salvar vidas."
    ],
    gallery: [],
    dateLabel: "Agosto",
    location: "Paraguay"
  },
  {
    slug: "acondicionador-casa-de-la-misericordia",
    year: 2023,
    title: "Entrega a Casa de la Misericordia",
    summary: "Compra y entrega de un acondicionador de aire a la Casa de la Misericordia.",
    description: [
      "En noviembre se realizó la compra y entrega de un acondicionador de aire a la Casa de la Misericordia.",
      "La institución está ubicada en el km 8 de Ciudad del Este.",
      "La donación buscó mejorar las condiciones del espacio y acompañar su labor comunitaria."
    ],
    gallery: [],
    dateLabel: "Noviembre",
    location: "Ciudad del Este, Paraguay"
  },
  {
    slug: "talleres-herramientas-digitales",
    year: 2023,
    title: "Talleres de Herramientas Digitales",
    summary: "Charlas y cursos sobre máquinas, Gmail, documentos, hojas de cálculo y elaboración de curriculum.",
    description: [
      "En diciembre se realizó la charla No temas a las máquinas.",
      "También se desarrollaron los cursos taller Crea e intercambia correos con Gmail y Gestiona documentos y hojas de cálculo con Google.",
      "La agenda incluyó un taller de elaboración de curriculum para fortalecer herramientas prácticas de desarrollo personal y laboral."
    ],
    gallery: [],
    dateLabel: "Diciembre",
    location: "Paraguay"
  },
  {
    slug: "utiles-colegio-santa-teresa",
    year: 2024,
    title: "Entrega de Útiles Escolares",
    summary: "Entrega de útiles escolares, libros y materiales de oficina en el Colegio Santa Teresa de Jesús.",
    description: [
      "En febrero se realizó una entrega en el Colegio Santa Teresa de Jesús, ubicado en el Barrio San Rafael.",
      "Aproximadamente 200 niños, adolescentes y profesores recibieron útiles escolares, libros y materiales de oficina.",
      "La actividad buscó acompañar el inicio del año escolar y fortalecer el acceso a recursos educativos."
    ],
    gallery: [],
    dateLabel: "Febrero",
    location: "Barrio San Rafael, Paraguay"
  },
  {
    slug: "mochilas-san-antonio-hogar-las-tias",
    year: 2024,
    title: "Entrega de Mochilas",
    summary: "Entrega de mochilas a la Escuela Básica San Antonio y presencia en la inauguración de la Fundación Hogar Las Tías.",
    description: [
      "En marzo se realizó la entrega de mochilas a la Escuela Básica San Antonio del Barrio San Agustín.",
      "Joaju también estuvo presente en la inauguración de la Fundación Hogar Las Tías.",
      "La actividad reunió apoyo educativo y acompañamiento a espacios comunitarios vinculados a la niñez."
    ],
    gallery: [],
    dateLabel: "Marzo",
    location: "Barrio San Agustín, Paraguay"
  },
  {
    slug: "minga-ambiental-santa-teresa",
    year: 2024,
    title: "Minga Ambiental",
    summary: "Jornada ambiental en la Escuela y Colegio Santa Teresa de Jesús con limpieza, donaciones y sensibilización.",
    description: [
      "En abril se realizó una minga ambiental en la Escuela y Colegio Santa Teresa de Jesús.",
      "Durante la jornada del 20-04-24 se ejecutaron actividades de limpieza y embellecimiento del entorno escolar, junto con la donación de insumos de limpieza para la institución.",
      "También se realizó sensibilización sobre el cuidado del medio ambiente, con provisión de trípticos con informaciones claves.",
      "La actividad incluyó la donación de 10 bancos de palets y 4 basureros de metal."
    ],
    gallery: [],
    dateLabel: "Abril",
    location: "Paraguay"
  },
  {
    slug: "donacion-de-sangre-ediciones-2024",
    year: 2024,
    title: "Donación de Sangre",
    summary: "2da, 3era y 4ta edición de la jornada de donación de sangre.",
    description: [
      "Durante enero, mayo y noviembre se realizaron nuevas ediciones de la jornada de donación de sangre.",
      "Estas actividades correspondieron a la 2da, 3era y 4ta edición.",
      "La iniciativa sostuvo la promoción de la donación voluntaria como una forma concreta de ayudar a salvar vidas."
    ],
    gallery: [],
    dateLabel: "Enero, mayo y noviembre",
    location: "Paraguay"
  },
  {
    slug: "todos-por-rio-grande-do-sul",
    year: 2024,
    title: "Todos por Rio Grande do Sul",
    summary: "Donación de alimentos, ropa y artículos de higiene para apoyar a comunidades afectadas en Brasil.",
    description: [
      "Del 13 al 18 de mayo se desarrolló el proyecto Todos por Rio Grande do Sul, Brasil.",
      "La actividad consistió en la donación de alimentos, ropa y artículos de higiene.",
      "El objetivo fue apoyar a comunidades afectadas y canalizar la solidaridad hacia una necesidad urgente."
    ],
    gallery: [],
    dateLabel: "Mayo",
    location: "Brasil"
  },
  {
    slug: "festividad-de-san-juan",
    year: 2024,
    title: "Festividad de San Juan",
    summary: "Celebración de la Festividad de San Juan.",
    description: [
      "En julio se realizó una actividad vinculada a la Festividad de San Juan.",
      "La jornada abrió un espacio de encuentro comunitario, tradición y participación.",
      "Fue una oportunidad para fortalecer vínculos a través de una celebración compartida."
    ],
    gallery: [],
    dateLabel: "Julio",
    location: "Paraguay"
  },
  {
    slug: "dia-del-donante-voluntario",
    year: 2024,
    title: "Día del Donante Voluntario",
    summary: "Donación de souvenirs y difusión de un video de concienciación sobre la donación voluntaria de sangre.",
    description: [
      "En julio se realizó la donación de souvenirs para el Día del Donante Voluntario de Sangre.",
      "También se difundió un video de concienciación acerca de la importancia de la donación voluntaria de sangre.",
      "La acción buscó reconocer a los donantes y promover una cultura de compromiso solidario."
    ],
    gallery: [],
    dateLabel: "Julio",
    location: "Paraguay"
  },
  {
    slug: "charla-sobre-voluntariado",
    year: 2024,
    title: "Charla sobre Voluntariado",
    summary: "Reflexión sobre el impacto positivo de ser voluntario en la comunidad.",
    description: [
      "En julio se realizó una charla sobre voluntariado.",
      "El espacio propuso una reflexión sobre el impacto positivo de ser voluntario en la comunidad.",
      "La actividad reforzó el valor del compromiso, la participación y la acción solidaria."
    ],
    gallery: [],
    dateLabel: "Julio",
    location: "Paraguay"
  },
  {
    slug: "colecta-anual-apostar-por-la-vida",
    year: 2024,
    title: "Colecta Anual Apostar por la Vida",
    summary: "Donación de G. 500.000 en la Colecta Anual de la Fundación Apostar por la Vida.",
    description: [
      "El 9 y 10 de agosto se realizó la Colecta Anual de la Fundación Apostar por la Vida.",
      "Joaju acompañó la iniciativa con una donación de G. 500.000.",
      "La acción permitió apoyar el trabajo solidario de la fundación y su impacto en la comunidad."
    ],
    gallery: [],
    dateLabel: "Agosto",
    location: "Paraguay"
  },
  {
    slug: "proyecto-nino-feliz",
    year: 2024,
    title: "Proyecto Niño Feliz",
    summary: "Donación de insumos médicos para pediatría en el marco del Proyecto Niño Feliz.",
    description: [
      "El 28 de agosto se realizó el Proyecto Niño Feliz.",
      "La actividad consistió en la donación de insumos médicos para pediatría.",
      "El aporte buscó acompañar la atención de niñas y niños desde una necesidad concreta del área de salud."
    ],
    gallery: [],
    dateLabel: "Agosto",
    location: "Paraguay"
  },
  {
    slug: "donacion-mobiliario-santa-teresa-hospital-regional",
    year: 2024,
    title: "Donación de Mobiliario",
    summary: "Donación de mobiliario al Colegio Santa Teresa de Jesús y al Hospital Regional de Ciudad del Este.",
    description: [
      "El 26 de agosto se realizó una donación al Colegio Santa Teresa de Jesús.",
      "La entrega incluyó 4 escritorios, 1 silla de oficina y 1 pizarra.",
      "También se realizó una donación al Hospital Regional de Ciudad del Este, consistente en 4 escritorios."
    ],
    gallery: [],
    dateLabel: "Agosto",
    location: "Ciudad del Este, Paraguay"
  },
  {
    slug: "insumos-hospital-ciudad-del-este",
    year: 2024,
    title: "Donación al Hospital de Ciudad del Este",
    summary: "Donación de productos de limpieza y porta sueros al Hospital de Ciudad del Este.",
    description: [
      "En noviembre se realizó una donación de insumos al Hospital de Ciudad del Este.",
      "La entrega incluyó productos de limpieza y porta sueros.",
      "La actividad acompañó necesidades operativas de la institución de salud."
    ],
    gallery: [],
    dateLabel: "Noviembre",
    location: "Ciudad del Este, Paraguay"
  },
  {
    slug: "donacion-hemocentro-cde",
    year: 2024,
    title: "Donación al Hemocentro CDE",
    summary: "Donación de hojas impresas y un banner para el Hemocentro CDE.",
    description: [
      "En diciembre se realizó una donación para el Hemocentro CDE.",
      "La entrega incluyó 1 resma de hojas impresas para interrogatorio de donantes.",
      "También se donó 1 banner para acompañar las actividades del Hemocentro CDE."
    ],
    gallery: [],
    dateLabel: "Diciembre",
    location: "Ciudad del Este, Paraguay"
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
    dateLabel: "Marzo",
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
    dateLabel: "Septiembre",
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
    dateLabel: "Abril",
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
    dateLabel: "Junio",
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
    dateLabel: "Invierno",
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

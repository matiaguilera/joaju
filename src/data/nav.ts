export const navItems = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#mision-vision", label: "Misión y visión" },
  { href: "#actividades", label: "Actividades" },
  { href: "#equipo", label: "Equipo" }
];

export const navCta = { href: "#voluntariado", label: "Quiero ser parte" };

/** En la portada los enlaces son anclas; en el resto de páginas vuelven a la portada. */
export const navHref = (href: string, home: boolean) => (home ? href : `/${href}`);

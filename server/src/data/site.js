/**
 * Contenido editable del sitio — New Style Studio.
 *
 * Los valores entre corchetes [ ] son placeholders: campos todavía
 * sin confirmar que se muestran en la página con subrayado punteado
 * como pendientes de completar.
 */

module.exports = {
  // ---------- Identidad ----------
  nombre: "New Style Studio",
  eslogan: "Cada visita es una oportunidad para renovarte y sentirte increíble.",

  // ---------- Navegación principal ----------
  navegacion: [
    { etiqueta: "Inicio", url: "#inicio" },
    { etiqueta: "Nosotros", url: "#nosotros" },
    { etiqueta: "Servicios", url: "#servicios" },
    { etiqueta: "Horarios", url: "#horarios" },
    { etiqueta: "Equipo", url: "#equipo" },
    { etiqueta: "Galería", url: "#galeria" },
    { etiqueta: "Contacto", url: "#contacto" },
  ],

  // ---------- Hero (inicio) ----------
  hero: {
    imagen: "/img/hero.svg",
    alt: "Imagen principal de barbería - reemplazar",
  },

  // ---------- Nosotros ----------
  nosotros: {
    titulo: "Nosotros",
    textos: [
      "Desde el primer momento, busco que te sientas como en casa, con un ambiente cálido y lleno de buena energía. Cada detalle está pensado para que disfrutes de una experiencia única, donde tu comodidad y bienestar son lo más importante. Aquí, cada visita es una oportunidad para renovarte y sentirte increíble.",
    ],
    fotos: [
      { src: "/img/nosotros-1.svg", alt: "Foto del establecimiento - reemplazar" },
      { src: "/img/nosotros-2.svg", alt: "Foto de ejemplo - reemplazar" },
    ],
  },

  // ---------- Características del local ----------
  caracteristicas: [
    { icono: "ambiente", texto: "Ambiente cálido y cómodo" },
    { icono: "personalizada", texto: "Atención personalizada" },
    { icono: "ninos", texto: "Apto para niños" },
    { icono: "mascotas", texto: "Admite mascotas" },
    { icono: "accesibilidad", texto: "Accesibilidad para silla de ruedas" },
    { icono: "aparcamiento", texto: "Aparcamiento disponible" },
    { icono: "transporte", texto: "Cercanía al transporte público" },
  ],

  // ---------- Servicios y precios ----------
  servicios: {
    intro: "",
    nota: "Precios en pesos argentinos (ARS).",
    items: [
      {
        nombre: "Perfilado de barba (incluye cejas)",
        descripcion: "Perfilado de barba con cejas incluidas.",
        precio: "$10.000",
        duracion: "15 min",
      },
      {
        nombre: "Corte de cabello con diseño o línea (incluye cejas)",
        descripcion: "Corte con diseño o línea, con cejas incluidas.",
        precio: "$17.000",
        duracion: "30 min",
      },
      {
        nombre: "Corte de cabello (incluye cejas)",
        descripcion: "Corte de cabello con cejas incluidas.",
        precio: "$15.000",
        duracion: "30 min",
      },
      {
        nombre: "Corte de cabello y perfilado de barba (incluye cejas)",
        descripcion: "Corte de cabello y perfilado de barba con cejas incluidas.",
        precio: "$17.000",
        duracion: "40 min",
      },
    ],
  },

  // ---------- Horarios ----------
  horarios: {
    resumen: {
      horario: "10:00 a 20:00",
      dias: "Martes a sábado",
      cierre: "Lunes y domingo: cerrado",
    },
    nota: "",
    dias: [
      { dia: "Lunes", horario: "Cerrado", cerrado: true },
      { dia: "Martes", horario: "10:00 a 20:00" },
      { dia: "Miércoles", horario: "10:00 a 20:00" },
      { dia: "Jueves", horario: "10:00 a 20:00" },
      { dia: "Viernes", horario: "10:00 a 20:00" },
      { dia: "Sábado", horario: "10:00 a 20:00" },
      { dia: "Domingo", horario: "Cerrado", cerrado: true },
    ],
  },

  // ---------- Equipo ----------
  equipo: {
    titulo: "Equipo",
    intro: "",
    // Para sumar fotos: cargá la ruta de la imagen en el campo "foto"
    integrantes: [
      { nombre: "Federico", detalle: "Federico Barbero", foto: "" },
      { nombre: "Enzo", detalle: "", foto: "" },
    ],
  },

  // ---------- Galería ----------
  // Para sumar fotos: agregá un objeto { src, alt } y subí la imagen a public/img/
  galeria: {
    intro: "",
    items: [
      { src: "/img/galeria-1.svg", alt: "Trabajo de ejemplo - reemplazar" },
      { src: "/img/galeria-2.svg", alt: "Trabajo de ejemplo - reemplazar" },
      { src: "/img/galeria-3.svg", alt: "Trabajo de ejemplo - reemplazar" },
      { src: "/img/galeria-4.svg", alt: "Trabajo de ejemplo - reemplazar" },
      { src: "/img/galeria-5.svg", alt: "Trabajo de ejemplo - reemplazar" },
      { src: "/img/galeria-6.svg", alt: "Trabajo de ejemplo - reemplazar" },
    ],
  },

  // ---------- Ubicación y contacto ----------
  contacto: {
    direccion: "Intendente Oliver 285, Florencio Varela, Provincia de Buenos Aires, Argentina",
    comoLlegar:
      "https://www.google.com/maps/dir/-34.8192768,-58.294272/New+Style+Studio+%7C+Barberia,+Int.+Oliver+285,+B1887DEL+Florencio+Varela,+Provincia+de+Buenos+Aires/@-34.8168244,-58.2975667,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95a32b8b98d7935b:0xa734067681c86ed7!2m2!1d-58.2882424!2d-34.8132252?entry=ttu",
    // Incrustación de Google Maps (sin API key)
    mapa:
      '<iframe src="https://www.google.com/maps?q=New%20Style%20Studio%2C%20Intendente%20Oliver%20285%2C%20Florencio%20Varela&hl=es&z=16&output=embed" title="New Style Studio en Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>',
    // Datos pendientes de completar (sin inventar):
    telefono: "[Número de teléfono pendiente]",
    whatsapp: "[Número de WhatsApp pendiente]",
    whatsappUrl: "", // ej: "https://wa.me/5491100000000"
    email: "[Correo electrónico pendiente]",
    mediosPago: "[Medios de pago pendientes]",
    instagram: "[Perfil de Instagram pendiente]",
    facebook: "[Perfil de Facebook pendiente]",
  },
};

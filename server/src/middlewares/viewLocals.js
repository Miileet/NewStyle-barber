/**
 * Variables disponibles en todas las vistas (EJS).
 */
const site = require("../data/site");

const escapar = (texto) =>
  String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

module.exports = (req, res, next) => {
  res.locals.site = site;
  res.locals.anio = new Date().getFullYear();

  // ¿Un dato sigue siendo un placeholder entre corchetes [ ]?
  res.locals.esPlaceholder = (valor) =>
    typeof valor === "string" && valor.trim().startsWith("[");

  // Muestra el dato y lo marca visualmente si todavía es un placeholder.
  res.locals.marcarDato = (valor) => {
    const texto = valor == null ? "" : String(valor);
    const escapado = escapar(texto);
    return res.locals.esPlaceholder(texto)
      ? `<span class="is-pending">${escapado}</span>`
      : escapado;
  };

  // ¿Es una URL válida (por ejemplo, un link de redes sociales)?
  res.locals.esUrl = (valor) =>
    typeof valor === "string" && /^https?:\/\//i.test(valor.trim());

  next();
};

/**
 * Manejo centralizado de errores.
 * Se registra en app.js con app.use((err, req, res, next) => ...).
 */
module.exports = (err, req, res, next) => {
  console.error("[Error]", err.message);

  const codigo = err.status || 500;
  const mensaje =
    codigo === 500 ? "Ocurrió un error inesperado en el servidor." : err.message;

  res.status(codigo);

  if (req.path.startsWith("/api/")) {
    return res.json({ ok: false, mensaje });
  }

  res.render("pages/error", {
    titulo: "Error del servidor",
    codigo,
    mensaje,
  });
};

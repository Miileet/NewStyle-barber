/**
 * Administrador - respuestas básicas, se implementará en la segunda etapa.
 */
exports.panel = (req, res) => {
  res.json({
    ok: true,
    seccion: "administrador",
    mensaje: "Ruta preparada. El panel se implementará en la segunda etapa.",
  });
};

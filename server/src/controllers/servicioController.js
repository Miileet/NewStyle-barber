/**
 * Servicios - respuestas básicas, se implementará en la segunda etapa.
 */
exports.listar = (req, res) => {
  res.json({
    ok: true,
    seccion: "servicios",
    mensaje: "Ruta preparada. El controlador se implementará en la segunda etapa.",
  });
};

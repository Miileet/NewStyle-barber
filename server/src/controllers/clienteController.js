/**
 * Clientes - respuestas básicas, se implementará en la segunda etapa.
 */
exports.listar = (req, res) => {
  res.json({
    ok: true,
    seccion: "clientes",
    mensaje: "Ruta preparada. El controlador se implementará en la segunda etapa.",
  });
};

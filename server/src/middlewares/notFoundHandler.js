/**
 * Manejo de rutas inexistentes (404).
 */
module.exports = (req, res) => {
  res.status(404);

  if (req.path.startsWith("/api/")) {
    return res.json({
      ok: false,
      mensaje: "Recurso no encontrado.",
    });
  }

  res.render("pages/error", {
    titulo: "Página no encontrada",
    codigo: 404,
    mensaje: "La página que estás buscando no existe o fue movida.",
  });
};

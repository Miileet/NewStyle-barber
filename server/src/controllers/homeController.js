/**
 * Controlador de la página principal.
 */
exports.index = (req, res, next) => {
  try {
    res.render("pages/index", {
      titulo: res.locals.site.nombre,
    });
  } catch (error) {
    next(error);
  }
};

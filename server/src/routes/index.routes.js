const router = require("express").Router();

const homeController = require("../controllers/homeController");

// Rutas preparadas para la segunda etapa (respuestas básicas por ahora)
const serviciosRoutes = require("./servicios.routes");
const turnosRoutes = require("./turnos.routes");
const clientesRoutes = require("./clientes.routes");
const horariosRoutes = require("./horarios.routes");
const adminRoutes = require("./admin.routes");

// ---------- Página principal ----------
router.get("/", homeController.index);

// ---------- API preparada ----------
router.use("/api/servicios", serviciosRoutes);
router.use("/api/turnos", turnosRoutes);
router.use("/api/clientes", clientesRoutes);
router.use("/api/horarios", horariosRoutes);
router.use("/api/administrador", adminRoutes);

module.exports = router;

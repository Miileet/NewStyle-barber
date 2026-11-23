/**
 * Punto de entrada del servidor.
 * Express + EJS + rutas + middlewares + conexión a MySQL (no bloqueante).
 */

const path = require("path");

// Cargar variables de entorno antes de cualquier otro módulo
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const { port } = require("./config/database");
const routes = require("./routes/index.routes");
const viewLocals = require("./middlewares/viewLocals");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// ---------- Motor de plantillas ----------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------- Middlewares generales ----------
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Contenido y helpers disponibles en todas las vistas
app.use(viewLocals);

// ---------- Rutas ----------
app.use("/", routes);

// ---------- Manejo de errores ----------
app.use(notFoundHandler);
app.use(errorHandler);

// ---------- Servidor ----------
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);

  // La conexión a MySQL es informativa: si falla, el sitio sigue funcionando.
  const sequelize = require("./database/sequelize");
  sequelize
    .authenticate()
    .then(() => console.log("Conexión a MySQL establecida correctamente."))
    .catch((error) =>
      console.warn(
        `No se pudo conectar a MySQL (${error.message}). El sitio funciona sin base de datos.`
      )
    );
});

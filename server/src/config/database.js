/**
 * Configuración general del proyecto.
 * Las variables se cargan desde el archivo .env (ver src/main.js).
 */

const database = {
  name: process.env.DB_NAME || "barberia",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  dialect: process.env.DB_DIALECT || "mysql",
};

module.exports = {
  port: Number(process.env.PORT) || 3000,
  database,
};

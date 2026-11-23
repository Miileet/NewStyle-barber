/**
 * Conexión a MySQL mediante Sequelize.
 * Se crea una única instancia y se reutiliza en todos los modelos.
 */

const { Sequelize } = require("sequelize");
const { database } = require("../config/database");

const sequelize = new Sequelize({
  database: database.name,
  username: database.user,
  password: database.password,
  host: database.host,
  port: database.port,
  dialect: database.dialect,
  logging: false,
  define: {
    timestamps: true,
    underscored: false,
  },
});

module.exports = sequelize;

/**
 * Registro central de modelos y relaciones.
 *
 * Para sumar un modelo:
 *   1. Crearlo en src/models/MiModelo.js
 *   2. Importarlo acá
 *   3. Definir sus relaciones en la sección "Relaciones"
 */

const sequelize = require("../database/sequelize");
const Servicio = require("./Servicio");
const Horario = require("./Horario");

// ---------- Relaciones ----------
// Ejemplo para la segunda etapa (turnos / clientes):
//
// const Turno = require("./Turno");
// const Cliente = require("./Cliente");
//
// Turno.belongsTo(Servicio);
// Servicio.hasMany(Turno);
// Turno.belongsTo(Cliente);
// Cliente.hasMany(Turno);

module.exports = {
  sequelize,
  Servicio,
  Horario,
};

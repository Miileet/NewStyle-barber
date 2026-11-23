const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

/**
 * Modelo de ejemplo: horarios de atención.
 */
const Horario = sequelize.define(
  "Horario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dia: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    desde: {
      type: DataTypes.STRING(5), // "HH:MM"
      allowNull: true,
    },
    hasta: {
      type: DataTypes.STRING(5), // "HH:MM"
      allowNull: true,
    },
    cerrado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "horarios",
    timestamps: true,
  }
);

module.exports = Horario;

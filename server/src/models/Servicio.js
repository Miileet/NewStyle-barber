const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

/**
 * Modelo de ejemplo: servicios de la barbería.
 * Los campos se ajustarán cuando defina la información real.
 */
const Servicio = sequelize.define(
  "Servicio",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    duracionMinutos: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "servicios",
    timestamps: true,
  }
);

module.exports = Servicio;

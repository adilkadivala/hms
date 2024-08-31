"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hospital_department extends Model {
    static associate(models) {
      Hospital_department.belongsTo(models.hospitals, {
        foreignKey: "Hospital_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Hospital_department.init(
    {
      Hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Department_type: {
        type: DataTypes.ENUM("opd", "lab"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
      },
      Created_by: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Updated_by: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Hospital_department",
      tableName: "Hospital_departments",
    }
  );
  return Hospital_department;
};

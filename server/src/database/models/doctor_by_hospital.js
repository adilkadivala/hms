"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Doctor_by_Hospital extends Model {
    static associate(models) {
      Doctor_by_Hospital.belongsTo(models.Doctor, {
        foreignKey: "Doctor_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      Doctor_by_Hospital.belongsTo(models.Hospital, {
        foreignKey: "Hospital_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      Doctor_by_Hospital.belongsTo(models.Hospital_department, {
        foreignKey: "Department_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Doctor_by_Hospital.init(
    {
      Doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Old_case_rate: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      Department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      New_case_rate: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      Mon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Tues: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Wed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Thurs: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Fri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Sat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Sun: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CUSTOM_TIMING: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Created_by: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Updated_by: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Approved_by: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Is_available: {
        type: DataTypes.ENUM("yes", "no"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
      },
      approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Doctor_by_Hospital",
      tableName: "doctor_by_Hospital",
    }
  );
  return Doctor_by_Hospital;
};

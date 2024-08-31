"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // Define associations here
      Payment.belongsTo(models.Patient, {
        foreignKey: "Patient_id",
        as: "patient",
      });
      Payment.belongsTo(models.Doctor_by_hospital, {
        foreignKey: "Doctor_by_hospital_id",
        as: "doctor",
      });
      Payment.belongsTo(models.Appointment, {
        foreignKey: "Appointment_id",
        as: "appointment",
      });
    }
  }
  Payment.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Doctor_by_hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Payment_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Transaction_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Payment_status: {
        type: DataTypes.ENUM("successful", "declined"),
        defaultValue: "declined",
        allowNull: false,
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
      Approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "Payments",
      timestamps: true,
    }
  );
  return Payment;
};

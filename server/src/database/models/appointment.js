"use strict";

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "appointments",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "hospitals",
          key: "id",
        },
      },
      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "doctors",
          key: "id",
        },
      },
      Appointment_type: {
        type: DataTypes.ENUM("today", "advance"),
        allowNull: false,
      },

      Appointment_req: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Status: {
        type: DataTypes.ENUM("in-opd", "visited", "pending"),
        defaultValue: "pending",
      },
      appointment_scheduled_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      token_number: {
        type: DataTypes.STRING(255),
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
      Approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "appointments",
    }
  );

  Appointment.associate = function (models) {
    Appointment.belongsTo(models.patients, {
      foreignKey: "patient_id",
      as: "patient",
    });
    Appointment.belongsTo(models.hospitals, {
      foreignKey: "hospital_id",
      as: "hospital",
    });
    Appointment.belongsTo(models.doctors, {
      foreignKey: "doctor_id",
      as: "doctor",
    });
  };

  return Appointment;
};

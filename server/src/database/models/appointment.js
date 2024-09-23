"use strict";

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Patient",
          key: "id",
        },
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Hospital",
          key: "id",
        },
      },
      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Doctor",
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
        type: DataTypes.ENUM("accept", "reject", "pending"),
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
    Appointment.belongsTo(models.Patient, {
      foreignKey: "patient_id",
      as: "patient",
    });
    Appointment.belongsTo(models.Hospital, {
      foreignKey: "hospital_id",
      as: "hospital",
    });
  };

  return Appointment;
};

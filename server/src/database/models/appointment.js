"use strict";

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "patient",
          key: "id",
        },
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "hospital",
          key: "id",
        },
      },
      Appointment_type: {
        type: DataTypes.ENUM("today", "advance"),
        allowNull: false,
      },
      doctor_by_hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "doctor_by_hospital",
          key: "id",
        },
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
      tableName: "Appointment",
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
    Appointment.belongsTo(models.Doctor_by_hospital, {
      foreignKey: "doctor_by_hospital_id",
      as: "doctorByHospital",
    });
  };

  return Appointment;
};

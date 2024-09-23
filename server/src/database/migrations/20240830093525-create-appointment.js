"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Appointments", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hospitals",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Doctor",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      Appointment_type: {
        type: Sequelize.ENUM("today", "advance"),
        allowNull: false,
      },
      doctor_by_hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "doctor_by_hospital",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      Appointment_req: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Status: {
        type: Sequelize.ENUM("accept", "reject", "pending"),
        defaultValue: "pending",
      },
      appointment_scheduled_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      token_number: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      Created_by: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      Updated_by: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      Approved_by: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      Approved_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Appointments");
  },
};

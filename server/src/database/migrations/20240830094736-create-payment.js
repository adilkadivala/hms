"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Payments", {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      Doctor_by_hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "doctor_by_hospital",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      Appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "appointments",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      Payment_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      Payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Transaction_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Payment_status: {
        type: Sequelize.ENUM("successful", "declined"),
        allowNull: false,
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
    await queryInterface.dropTable("Payments");
  },
};

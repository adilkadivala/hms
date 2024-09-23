"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("payments", {
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
          model: "patients", // Ensure this matches the exact table name
          key: "id",
        },
        onDelete: "CASCADE",
      },
      appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "appointments", // Ensure this matches the exact table name
          key: "id",
        },
        onDelete: "CASCADE",
      },
      payment_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      transaction_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.ENUM("successful", "declined"),
        allowNull: false,
      },
      created_by: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      updated_by: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      approved_by: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      approved_date: {
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
    await queryInterface.dropTable("payments");
  },
};

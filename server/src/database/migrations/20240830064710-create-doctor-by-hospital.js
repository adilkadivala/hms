"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("doctor_by_Hospital", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "doctors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hospitals",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Old_case_rate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      Department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hospital_departments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      New_case_rate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      Mon: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Tues: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Wed: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Thurs: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Fri: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Sat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Sun: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CUSTOM_TIMING: {
        type: Sequelize.STRING,
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
      Is_available: {
        type: Sequelize.ENUM("yes", "no"),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
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
    await queryInterface.dropTable("doctor_by_Hospital");
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Patients", {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      User_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      User_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      First_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Middle_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      Last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Gender: {
        type: Sequelize.ENUM("Male", "Female", "Other"),
        defaultValue: "Other",
        allowNull: false,
      },
      DOB: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      Contact: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      Alt_contact: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      Recovery_email: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      Address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      Country: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      City: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      Status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
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
    await queryInterface.dropTable("Patients");
  },
};

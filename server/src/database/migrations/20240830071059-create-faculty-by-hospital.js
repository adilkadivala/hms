"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Faculty_by_hospital", {
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
      User_pass: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      User_first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      User_last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      User_role: {
        type: Sequelize.ENUM("assistant", "admin", "reception", "super admin"),
        defaultValue: "admin",
        allowNull: false,
      },
      Assistant_doctor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "doctors",
          key: "id",
        },
      },
      Gender: {
        type: Sequelize.ENUM("Male", "Female", "Other"),
        defaultValue: "Other",
        allowNull: false,
      },
      Hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hospitals",
          key: "id",
        },
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
    await queryInterface.dropTable("Faculty_by_hospital");
  },
};

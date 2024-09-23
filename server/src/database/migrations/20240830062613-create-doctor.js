"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("doctors", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Doctor_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Doctor_degree: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Doctor_experience: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: false,
      },
      Doctor_speciality: {
        type: Sequelize.INTEGER(255),
        allowNull: true,
      },
      Profile_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      Contact_no: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      Alternate_contact: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      Whatsapp_no: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      Email_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Doctor_fees: {
        type: Sequelize.INTEGER(255),
        allowNull: true,
      },
      Address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      City: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Country: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Region: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING(555),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      Approval_status: {
        type: Sequelize.ENUM("in review", "Approved"),
        defaultValue: "in review",
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
    await queryInterface.dropTable("doctors");
  },
};

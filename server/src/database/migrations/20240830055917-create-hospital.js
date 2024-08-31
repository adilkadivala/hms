"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hospitals", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      H_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      H_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      H_category: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      H_short_add: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      H_full_add: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      H_contact_no: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      H_advance_Appointment: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      H_Todays_Appointment: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      H_email_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      H_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      Amenities: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
      },
      Description: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "inactive",
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
    await queryInterface.dropTable("Hospitals");
  },
};

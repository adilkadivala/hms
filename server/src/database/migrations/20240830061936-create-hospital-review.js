"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hospital_reviews", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Hospitals",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      author: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      rating: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: false,
      },
      review_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      review_date: {
        type: Sequelize.DATE,
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
      approved_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "pending"),
        defaultValue: "pending",
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
    await queryInterface.dropTable("Hospital_reviews");
  },
};

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hospital_review extends Model {
    static associate(models) {
      Hospital_review.belongsTo(models.Hospital, {
        foreignKey: "Hospital_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Hospital_review.init(
    {
      Hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: false,
      },
      review_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      review_date: {
        type: DataTypes.DATE,
        allowNull: false,
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
      approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive", "pending"),
        allowNull: false,
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "Hospital_review",
      tableName: "Hospital_reviews",
    }
  );
  return Hospital_review;
};

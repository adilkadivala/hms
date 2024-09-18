"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Doctor extends Model {
    static associate(models) {}
  }
  Doctor.init(
    {
      Doctor_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Doctor_degree: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Doctor_experience: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: true,
      },
      Doctor_speciality: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Profile_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Contact_no: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Alternate_contact: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Whatsapp_no: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Email_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      City: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Country: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Region: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      Password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      Approval_status: {
        type: DataTypes.ENUM("in review", "Approved"),
        defaultValue: "in review",
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
    },
    {
      sequelize,
      modelName: "Doctor",
      tableName: "Doctors",
    }
  );
  return Doctor;
};

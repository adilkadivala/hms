"use strict";

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    "Patient",
    {
      User_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      User_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      First_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Middle_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Gender: {
        type: DataTypes.ENUM("Male", "Female", "Other"),
        allowNull: false,
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      Contact: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Alt_contact: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Recovery_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      City: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      Created_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Updated_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Approved_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "Patients",
    }
  );

  return Patient;
};

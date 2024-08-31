"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    static associate(models) {}
  }
  Hospital.init(
    {
      H_image: DataTypes.STRING,
      H_name: DataTypes.STRING,
      H_category: DataTypes.STRING,
      H_short_add: DataTypes.STRING,
      H_full_add: DataTypes.TEXT,
      H_contact_no: DataTypes.STRING,
      H_advance_Appointment: DataTypes.BOOLEAN,
      H_Todays_Appointment: DataTypes.BOOLEAN,
      H_email_id: DataTypes.STRING,
      H_password: DataTypes.STRING,
      Amenities: DataTypes.TEXT("long"),
      Description: DataTypes.TEXT("long"),
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "inactive",
      },
      Approval_status: {
        type: DataTypes.ENUM("in review", "Approved"),
        defaultValue: "in review",
      },
      Created_by: DataTypes.STRING,
      Updated_by: DataTypes.STRING,
      Approved_by: DataTypes.STRING,
      approved_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Hospital",
      tableName: "Hospitals",
    }
  );
  return Hospital;
};

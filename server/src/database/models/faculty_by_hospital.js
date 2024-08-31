"use strict";

module.exports = (sequelize, DataTypes) => {
  const Faculty_by_hospital = sequelize.define(
    "Faculty_by_hospital",
    {
      User_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      User_pass: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      User_first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      User_last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      User_role: {
        type: DataTypes.ENUM("assistant", "admin", "reception", "super admin"),
        defaultValue: "admin",
        allowNull: false,
      },
      Assistant_doctor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "doctors",
          key: "id",
        },
      },
      Gender: {
        type: DataTypes.ENUM("Male", "Female", "Other"),
        defaultValue: "Other",
        allowNull: false,
      },
      Hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "hospitals",
          key: "id",
        },
      },
      Status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
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
      Approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "Faculty_by_hospital",
    }
  );

  Faculty_by_hospital.associate = function (models) {
    Faculty_by_hospital.belongsTo(models.Doctor, {
      foreignKey: "Assistant_doctor",
      as: "assistantDoctor",
    });
    Faculty_by_hospital.belongsTo(models.Hospital, {
      foreignKey: "Hospital_id",
      as: "hospital",
    });
  };

  return Faculty_by_hospital;
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Faculty_by_hospital", [
      {
        User_email: "jane.smith@example.com",
        User_pass: "password123",
        User_first_name: "Jane",
        User_last_name: "Smith",
        User_role: "admin",
        Assistant_doctor: 4,
        Gender: "Female",
        Hospital_id: 13,
        Status: "active",
        Created_by: "admin",
        Updated_by: "admin",
        Approved_by: "admin",
        Approved_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Faculty_by_hospital", null, {});
  },
};

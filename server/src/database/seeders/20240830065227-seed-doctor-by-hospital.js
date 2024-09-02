"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("doctor_by_Hospital", [
      {
        Doctor_id: 1,
        Hospital_id: 1,
        Old_case_rate: 150.0,
        Department_id: 1,
        New_case_rate: 175.0,
        Mon: "12:00 AM to 12:00 PM, 04:00 PM to 07:00 PM",
        Tues: "12:00 PM to 05:00 PM",
        Wed: "01:00 PM to 06:00 PM",
        Thurs: "09:00 AM to 12:00 PM",
        Fri: "12:00 PM to 03:00 PM",
        Sat: "Closed",
        Sun: "Closed",
        CUSTOM_TIMING: "Available by appointment",
        Created_by: "admin",
        Updated_by: "admin",
        Approved_by: "admin",
        Is_available: "yes",
        status: "active",
        approved_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctor_by_Hospital", null, {});
  },
};

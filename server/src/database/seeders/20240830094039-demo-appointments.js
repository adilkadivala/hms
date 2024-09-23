"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("appointments", [
      {
        patient_id: 1,
        hospital_id: 1,
        doctor_id: 1,
        appointment_type: "today",
        appointment_req: new Date(),
        status: "pending",
        appointment_scheduled_date: new Date(),
        token_number: "TN123456",
        created_by: "admin",
        updated_by: "admin",
        approved_by: "admin",
        approved_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("appointments", null, {});
  },
};

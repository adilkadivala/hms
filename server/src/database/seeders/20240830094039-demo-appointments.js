"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Appointments", [
      {
        patient_id: 3,
        hospital_id: 13,
        Appointment_type: "today",
        doctor_by_hospital_id: 5,
        Appointment_req: new Date(),
        Status: "pending",
        appointment_scheduled_date: new Date(),
        token_number: "TN123456",
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
    await queryInterface.bulkDelete("Appointments", null, {});
  },
};

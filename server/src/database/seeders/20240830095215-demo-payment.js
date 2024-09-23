"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Payments",
      [
        {
          Patient_id: 1,
          Appointment_id: 1,
          Payment_amount: 100.0,
          Payment_date: new Date(),
          Transaction_id: "TXN123456789",
          Payment_status: "successful",
          Created_by: "System",
          Updated_by: "System",
          Approved_by: "Admin",
          Approved_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Payments", null, {});
  },
};

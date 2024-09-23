"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "payments", // Table name should be lowercase
      [
        {
          patient_id: 1, // Lowercase to match model and DB
          appointment_id: 1, // Lowercase to match model and DB
          payment_amount: 100.0,
          payment_date: new Date(),
          transaction_id: "TXN123456789",
          payment_status: "successful", // Matching ENUM values
          created_by: "System",
          updated_by: "System",
          approved_by: "Admin",
          approved_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("payments", null, {});
  },
};

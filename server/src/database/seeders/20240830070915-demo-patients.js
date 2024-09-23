"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("patients", [
      {
        user_email: "john.doe@example.com",
        user_password: "password123",
        first_name: "John",
        middle_name: "A.",
        last_name: "Doe",
        gender: "Male",
        dob: "1980-01-01",
        contact: "1234567890",
        alt_contact: "0987654321",
        recovery_email: "john.recover@example.com",
        address: "123 Main St, Anytown, USA",
        country: "USA",
        city: "Anytown",
        status: "active",
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
    await queryInterface.bulkDelete("patients", null, {});
  },
};

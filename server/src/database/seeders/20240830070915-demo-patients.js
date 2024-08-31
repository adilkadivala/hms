"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Patients", [
      {
        User_email: "john.doe@example.com",
        User_password: "password123",
        First_name: "John",
        Middle_name: "A.",
        Last_name: "Doe",
        Gender: "Male",
        DOB: "1980-01-01",
        Contact: "1234567890",
        Alt_contact: "0987654321",
        Recovery_email: "john.recover@example.com",
        Address: "123 Main St, Anytown, USA",
        Country: "USA",
        City: "Anytown",
        Status: "active",
        Created_by: "admin",
        Updated_by: "admin",
        Approved_by: "admin",
        approved_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        User_email: "jane.doe@example.com",
        User_password: "password123",
        First_name: "Jane",
        Middle_name: "B.",
        Last_name: "Doe",
        Gender: "Female",
        DOB: "1990-02-02",
        Contact: "2345678901",
        Alt_contact: "1098765432",
        Recovery_email: "jane.recover@example.com",
        Address: "456 Elm St, Anytown, USA",
        Country: "USA",
        City: "Anytown",
        Status: "inactive",
        Created_by: "admin",
        Updated_by: "admin",
        Approved_by: "admin",
        approved_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Patients", null, {});
  },
};

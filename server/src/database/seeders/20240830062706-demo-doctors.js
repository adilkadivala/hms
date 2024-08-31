"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Doctors",
      [
        {
          Doctor_name: "Dr. John Doe",
          Doctor_degree: "MD",
          Doctor_experience: 10.5,
          Doctor_speciality: JSON.stringify([
            "Cardiology",
            "Internal Medicine",
          ]),
          Profile_image: "john_doe.jpg",
          Contact_no: "1234567890",
          Alternate_contact: "0987654321",
          Whatsapp_no: "1234567890",
          Email_id: "john.doe@example.com",
          Address: "123 Main St",
          City: "New York",
          Country: "USA",
          Region: "NY",
          Password: "hashed_password",
          status: "active",
          Approval_status: "Approved",
          Created_by: "Admin",
          Updated_by: "Admin",
          Approved_by: "Admin",
          approved_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Doctors", null, {});
  },
};

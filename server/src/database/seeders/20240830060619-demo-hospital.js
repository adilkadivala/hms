"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Hospitals", [
      {
        H_image: "https://example.com/image.jpg",
        H_name: "General Hospital",
        H_category: "Public",
        H_short_add: "123 Street",
        H_full_add: "123 Street, City, Country",
        H_contact_no: "1234567890",
        H_advance_Appointment: true,
        H_Todays_Appointment: false,
        H_email_id: "contact@generalhospital.com",
        H_password: "hashed_password",
        Amenities: '["Parking", "Cafeteria"]',
        Description: "A well-equipped hospital with modern facilities.",
        status: "active",
        Approval_status: "Approved",
        Created_by: "Admin",
        Updated_by: "Admin",
        Approved_by: "Admin",
        approved_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hospitals", null, {});
  },
};

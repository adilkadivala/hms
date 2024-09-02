"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Hospital_reviews",
      [
        {
          Hospital_id: 1,
          author: "John Doe",
          rating: 4.5,
          review_description: "Great hospital with excellent staff.",
          review_date: new Date(),
          Created_by: "Admin",
          Updated_by: "Admin",
          Approved_by: "Dr. Smith",
          approved_date: new Date(),
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hospital_reviews", null, {});
  },
};

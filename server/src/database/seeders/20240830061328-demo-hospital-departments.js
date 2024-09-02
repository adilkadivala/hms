"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Hospital_departments",
      [
        {
          Hospital_id: 1,
          Department_type: "opd",
          status: "active",
          Created_by: "admin",
          Updated_by: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hospital_departments", null, {});
  },
};

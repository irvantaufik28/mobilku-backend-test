"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cities", [
      {
        name: "KOTA JAKARTA PUSAT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KOTA JAKARTA BARAT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KOTA JAKARTA SELATAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KOTA JAKARTA UTARA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KABUPATEN BANDUNG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KABUPATEN BANDUNG BARAT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KOTA BANDUNG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};

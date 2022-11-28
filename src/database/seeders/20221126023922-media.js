"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Media", [
      {
        small: "05dmo.png",
        large : "nnq5g.jpeg",
        original: null,
        name: "05dmo.png",
        mimeType: "jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Media", null, {});
  },
};

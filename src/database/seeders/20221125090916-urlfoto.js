'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('UrlFotos', [
      {
        userId: 1,
        url: "1657029861763.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        url: "1657029861763.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('UrlFotos', null, {});
     
  }
};
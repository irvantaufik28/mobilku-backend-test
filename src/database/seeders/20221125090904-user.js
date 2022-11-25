'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [
      {
        name: "irvan",
        birth: "1994-07-28T17:00:00.000Z",
        age: "28",
        phone: "08231515668",
        city: "Garut",
        educationLevel: "S1",
        urlFotoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
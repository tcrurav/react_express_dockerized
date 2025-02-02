'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bicycles', [{
      brand: 'BH',
      model: 'Sky',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      brand: 'Orbea',
      model: 'Carrera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('bicycles', null, {});
  }
};

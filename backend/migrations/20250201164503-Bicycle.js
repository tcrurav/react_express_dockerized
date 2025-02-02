'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bicycles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      brand: Sequelize.STRING,
      model: Sequelize.STRING,
      createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.Date,
          allowNull: false
      },
      updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.Date,
          allowNull: false
      }
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bicycles');
  }
};

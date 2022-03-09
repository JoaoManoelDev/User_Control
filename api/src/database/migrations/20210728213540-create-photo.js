'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      originalname: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        refereces: {
          model: 'Employees',
          key: 'id',
          as: 'photo_employee'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Photos');
  }
};

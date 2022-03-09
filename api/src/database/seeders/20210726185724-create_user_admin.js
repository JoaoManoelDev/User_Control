'use strict';
const { User } = require('../../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.create({
      name: 'admin',
      email: 'admin@gmail.com',
      password: '91217571',
    }, {
      individualHooks: true
    })
  },

  down: async (queryInterface, Sequelize) => {}
}

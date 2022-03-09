'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password_hash: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.VIRTUAL,
    }
  }, {
    sequelize,
    modelName: 'User',
  })

  User.addHook('beforeSave', async user => {
    if (user.password) {
      user.password_hash = await bcrypt.hash(user.password, 8)
    }
  })

  return User
}

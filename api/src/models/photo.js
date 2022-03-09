'use strict';
const { Model } = require('sequelize');
const appConfig = require('../config/appConfig')

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.Employee, {
        foreignKey: 'employee_id'
      })
    }
  }

  Photo.init({
    filename:{
      type: DataTypes.STRING,
      allowNull: false
    },
    originalname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${appConfig.url}/images/${this.getDataValue('filename')}`
      }
    }
  }, {
    sequelize,
    modelName: 'Photo',
  })
  return Photo;
}

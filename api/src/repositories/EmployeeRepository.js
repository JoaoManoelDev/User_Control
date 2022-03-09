const { Employee, Photo } = require('../models')

const EmployeeRepository = {
  async create(data) {
    return await Employee.create(data)
  },

  async findOne(data) {
    return await Employee.findOne({
      where: { email: data }
    })
  },

  async findAll() {
    return await Employee.findAll({
      attributes: ['id', 'name', 'email', 'position', 'nationality'],
      order: [['id', 'desc']],
      include: {
        model: Photo,
        attributes: ['id', 'url', 'filename'],
      },
    })
  },

  async findByPk(pk) {
    return await Employee.findByPk(pk, {
      include: {
        model: Photo,
        attributes: ['id', 'url', 'filename'],
      },
    })
  },

  async delete(id) {
    return await Employee.destroy({
      where: { id }
    })
  },

  async update(data, updatedData) {
    return data.update(updatedData)
  },
}

module.exports = EmployeeRepository

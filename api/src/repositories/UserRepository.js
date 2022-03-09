const { User } = require('../models')

const UserRepository = {
  async findOne(data) {
    return await User.findOne({
      where: { email: data }
    })
  },

  async findByPk(data) {
    return await User.findByPk(data)
  },
}

module.exports = UserRepository

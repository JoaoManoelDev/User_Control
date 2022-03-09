const UserRepository = require('../repositories/UserRepository')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const AuthController= {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body

      const user = await UserRepository.findOne(email)

      if (!user) {
        return res.status(400).json({ Error: 'Incorrect username or password.' })
      }

      const isValidPassword = await bcrypt.compare(password, user.password_hash)

      if (!isValidPassword) {
        return res.status(400).json({ Error: 'Incorrect username or password.' })
      }

      const token = jwt.sign({ sub: user.id, name: user.name }, process.env.TOKEN_SECRET, { expiresIn: '24h' /*100*/ })

      userData = {
        id: user.id,
        name: user.name,
        email: user.email
      }

      return res.json({
        userData,
        token
      })
    } catch (error) {
      console.log(error)
    }
  },

  async tokenValidVerify(req, res) {
    const { authorization } = req.headers

    if (!authorization)
    return res.status(401).json({ Error: 'Expired token.' })

    const token = authorization.replace('Bearer', '').trim()

    try {

      const data = jwt.verify(token, process.env.TOKEN_SECRET)
      const { sub } = data

      const user = await UserRepository.findByPk(sub)

      if (!user) return res.status(401).json({ Error: 'Login required.' })

      return res.status(200).json(data)

    } catch(e) {
      return res.status(401).json({ Error: 'Invalid token.' })
    }
  }
}

module.exports = AuthController

const jwt = require('jsonwebtoken')

module.exports = function authMiddleware(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ Error: 'login required' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {

    const data = jwt.verify(token, process.env.TOKEN_SECRET)

    const { sub } = data

    req.userId = sub

    return next()

  } catch (error) {
    return res.status(401).json({ Error: 'login required' })
  }
}

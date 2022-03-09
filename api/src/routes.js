const { Router } = require('express')
const routes = Router()

const authMiddleware = require('./middleware/authMiddleware')

const AuthController = require('./controllers/AuthController')
const EmployeeController = require('./controllers/EmployeeController')
const PhotoController = require('./controllers/PhotoController')

routes.post('/token', AuthController.authenticate)
routes.get('/token/verify', AuthController.tokenValidVerify)

routes.post('/employee', authMiddleware, EmployeeController.create)
routes.get('/employee', EmployeeController.index)
routes.get('/employee/:id',  EmployeeController.show)
routes.delete('/employee/:id', authMiddleware, EmployeeController.delete)
routes.put('/employee/:id', authMiddleware, EmployeeController.update)

routes.post('/photo/:employee_id', authMiddleware, PhotoController.store)
routes.get('/photo/:employee_id', PhotoController.index)

module.exports = routes

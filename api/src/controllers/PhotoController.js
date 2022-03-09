const multer = require('multer')
const multerConfig = require('../config/multerConfig')

const { Photo } = require('../models')
const EmployeeRepository = require('../repositories/EmployeeRepository')

const upload = multer(multerConfig).single('photo')

const PhotoController = {
  store(req, res) {
    return upload(req, res, async error => {
      if (error) return res.status(400).json({ Error: error.code })

      try {

        const { originalname, filename } = req.file
        const { employee_id } = req.params

        const employeeExists = await EmployeeRepository.findByPk(employee_id)

        if (!employeeExists) return res.status(400).json({ Error: 'Employee does not exists.' })

        const employeePhoto = await Photo.findByPk(employeeExists.id)

        if (!employeePhoto) {
          const photo = await Photo.create({
            originalname,
            filename,
            employee_id
          })

          return res.status(201).json(photo)
        }

        const photo = await employeePhoto.update({
          originalname,
          filename,
          employee_id
        })

        return res.status(201).json(photo)

      } catch (error) {
        return res.status(500).json({ Error: 'Internal error.' })
      }
    })
  },

  async index(req, res) {
    const { employee_id } = req.params

    const photo = await Photo.findOne({
      where: {
        employee_id
      },
    })

    return res.status(200).json(photo)

  }
}

module.exports = PhotoController

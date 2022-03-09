const EmployeeRepository = require('../repositories/EmployeeRepository')
const validationEmployee = require('../validations/EmployeeValidation')

const EmployeeController = {
  async create(req, res) {
    try {
      const validatedData = validationEmployee(req.body)

      const employeeAlreadyExists = await EmployeeRepository.findOne(req.body.email)

      if (employeeAlreadyExists) {
        return res.status(400).json({ Error: 'Email already exists.' })
      }

      if (validatedData) return res.status(400).json(validatedData)

      const employeeResult = await EmployeeRepository.create(req.body)

      return res.status(201).json({ Message: 'Employee successfully created.', employeeResult})
    } catch (error) {
      return res.status(500).json({ Error: 'Internal error.' })
    }
  },

  async index(req, res) {
    try {
      const allEmployee = await EmployeeRepository.findAll()
      return res.json(allEmployee)

    } catch (error) {
      return res.status(500).json({ Error: 'Internal error.' })
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params

      const employee = await EmployeeRepository.findByPk(id)

      if (!employee) return res.status(400).json({ Message: 'Employee does not exists.' })

      return res.status(200).json(employee)

    } catch (error) {
      return res.status(500).json({ Error: 'Internal error.' })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params

      const employee = await EmployeeRepository.findByPk(id)

      if (!employee) return res.status(400).json({ Error: 'Employee does not exists.' })

      const validatedData = validationEmployee(req.body)

      if (validatedData) return res.status(400).json(validatedData)

      const employeeResult = await EmployeeRepository.update(employee, req.body)

      return res.status(201).json({ Message: 'Your data has been updated successfully.', employeeResult })

    } catch (error) {
      return res.status(500).json({ Error: 'Internal error.' })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      const employee = await EmployeeRepository.findByPk(id)

      if (!employee) return res.status(400).json({ Message: 'No employees found.' })

      await EmployeeRepository.delete(id)

      return res.status(200).json({ Message: 'Employee was deleted.' })

    } catch (error) {
      return res.status(500).json({ Error: 'Internal error.' })
    }

  }

}

module.exports = EmployeeController

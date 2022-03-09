const joi = require('joi')

module.exports = data => {
  const schema = joi.object({
    name: joi.string().required('name is required'),
    email: joi.string().required('email is required').email(),
    position: joi.string().required('position is required'),
    nationality: joi.string().required('nationality is required'),
  })

  const { error } = schema.validate(data)

  if (error) return { Error: error.message.replace(/"+/g, '') }

  return null
}

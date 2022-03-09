const multer = require('multer')
const { resolve, extname } = require('path')
const uuid = require('uuid')

module.exports = {

  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
    ]

    if (!allowedMimes.includes(file.mimetype)) {
      return cb(new multer.MulterError('Invalid file type.'))
    }

    return cb(null, true)
  },

  storage: multer.diskStorage({
    destination : resolve(__dirname, '..', '..', 'uploads', 'images'),
    filename: (req, file, cb) => {
      const filename = `${uuid.v4()}-${extname(file.originalname)}`

      cb(null, filename)
    }
  }),

  limits: {
    fileSize: 2 * 1024 * 1024
  }
}

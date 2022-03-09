require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')
const { resolve } = require('path')

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(helmet())

app.use(express.json())
app.use(routes)

app.use(express.static(resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => console.log('Server is running!'))

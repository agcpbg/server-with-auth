// Main starting point of application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')

const app = express()

// DB setup
mongoose.connect('mongodb://localhost:auth/auth')

// App setup -> getting express working the way we want
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)


// Server setup -> getting express app to talk to outside world
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on port: ', port)

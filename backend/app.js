const express = require('express')
const logger = require('morgan')
const router = require('./src/route')

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use('/static', express.static(__dirname + '/public'))

app.listen(port, () => console.log(`Listening on port ${port}`))

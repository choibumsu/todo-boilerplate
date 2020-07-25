const express = require('express')
const router = express.Router()
const mainRouter = require('./main')
const userRouter = require('./user')

router.use('/', mainRouter)
router.use('/user', userRouter)

module.exports = router

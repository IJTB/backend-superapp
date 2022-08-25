const express = require('express')
const router = express.Router()

const authController = require('../../controller/api/auth.controller')

router.post('/login', authController.login)

module.exports = router
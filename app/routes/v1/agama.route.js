const express = require('express')
const router = express.Router()

const agamaController = require('../../controller/api/agama.controller')

router.get('/', agamaController.getAll)
router.post('/', agamaController.create)

module.exports = router
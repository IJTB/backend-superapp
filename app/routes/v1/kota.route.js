const express = require('express')
const router = express.Router()

const kotaController = require('../../controller/api/kota.controller')

router.get('/', kotaController.getAll)
router.get('/search', kotaController.search)
router.get('/:id', kotaController.getById)

module.exports = router
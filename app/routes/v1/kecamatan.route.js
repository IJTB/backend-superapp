const express = require('express')
const router = express.Router()

const kecamatanController = require('../../controller/api/kecamatan.controller')

router.get('/', kecamatanController.getAll)
router.get('/search', kecamatanController.search)
router.get('/:id', kecamatanController.getById)

module.exports = router
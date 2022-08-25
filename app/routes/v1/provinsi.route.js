const express = require('express')
const router = express.Router()

const provinsiController = require('../../controller/api/provinsi.controller')

router.get('/', provinsiController.getAll)
router.get('/search', provinsiController.search)
router.get('/:id', provinsiController.getById)

module.exports = router
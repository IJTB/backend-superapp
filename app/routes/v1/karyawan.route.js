const express = require('express')
const router = express.Router()

const karyawanController = require('../../controller/api/karyawan.controller')

router.get('/', karyawanController.getAll)
router.get('/:id', karyawanController.getById)
router.post('/', karyawanController.create)

module.exports = router
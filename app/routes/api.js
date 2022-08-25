const express = require('express')
const router = express.Router()
const karyawan = require('./v1/karyawan.route')
const provinsi = require('./v1/provinsi.route')
const agama = require('./v1/agama.route')
const kota = require('./v1/kota.route')
const kecamatan = require('./v1/kecamatan.route')
const auth = require('./v1/auth.route')
const user = require('./v1/user.route')

router.use('/karyawan', karyawan)
router.use('/agama', agama)
router.use('/provinsi', provinsi)
router.use('/kota', kota)
router.use('/kecamatan', kecamatan)
router.use('/auth', auth)
router.use('/user', user)

module.exports = router
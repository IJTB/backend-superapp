const userService = require('../../service/user.service')
const { prepareObjectAsAPIResponse,
    transformAttributesToPascalCase, } = require('../../../utils/object')
const helper = require('../../../utils/helper')

const userController = {
    async create(req, res) {
        let { namaDepan, namaBelakang, email, password, username, jenisKelamin, tanggalLahir } = req.body
        try {
            const data = {
                namaDepan,
                namaBelakang,
                email,
                password: helper.toHashPassword(password),
                username,
                jenisKelamin,
                tanggalLahir,
            }
            attributes = transformAttributesToPascalCase(data)
            const user = await userService.create(attributes)
            return res.status(201).json({ message: "Sukses!", code: 201, user })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

module.exports = userController
const karyawanService = require('../../service/karyawan-service')
const { prepareObjectAsAPIResponse,
    transformAttributesToPascalCase, } = require('../../../utils/object')

const karyawanController = {
    async getAll(req, res) {

        try {
            const karyawan = await karyawanService.getAll()
            const employees = karyawan.map((val) => {
                return prepareObjectAsAPIResponse(val.toJSON())
            })
            return res.status(200).json({ responses: employees })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async getById(req, res) {
        const { id } = req.params
        try {
            const karyawan = await karyawanService.getById({ id: id })
            const employee = await prepareObjectAsAPIResponse(karyawan.toJSON())
            return res.status(200).json({ responses: employee })

        } catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async create(req, res) {
        let body = req.body
        try {
            const data = {
                ...body
            }
            attributes = transformAttributesToPascalCase(data)
            const karyawan = await karyawanService.create(attributes)
            return res.status(201).json({ message: "Sukses!", code: 201, karyawan })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

module.exports = karyawanController
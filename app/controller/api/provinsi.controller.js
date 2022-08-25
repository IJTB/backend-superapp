const provinsiService = require('../../service/provinsi.service')
const { prepareObjectAsAPIResponse,
    transformAttributesToPascalCase, } = require('../../../utils/object')


const provinsiController = {
    async getAll(req, res) {
        try {
            const provinsi = await provinsiService.getAll()
            const provincies = provinsi.map((val) => {
                return prepareObjectAsAPIResponse(val.dataValues)
            })
            return res.status(200).json({ responses: provincies })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async getById(req, res) {
        const { id } = req.params
        try {
            const provinsi = await provinsiService.getById({ id_provinsi: id })
            const provincy = await prepareObjectAsAPIResponse(provinsi.toJSON())
            return res.status(200).json({ responses: provincy })

        } catch (error) {
            return res.status(400).json({ message: error })
        }
    },
    async search(req, res) {
        const text = req.query.namaProvinsi.toUpperCase()
        try {
            const provinsi = await provinsiService.search(text)
            const provincies = await provinsi.map((val) => {
                return prepareObjectAsAPIResponse(val.toJSON())
            })
            return res.status(200).json({ responses: provincies })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

module.exports = provinsiController
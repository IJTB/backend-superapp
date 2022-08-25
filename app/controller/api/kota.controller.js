const KotaService = require('../../service/kota.service')
const { prepareObjectAsAPIResponse,
    transformAttributesToPascalCase, } = require('../../../utils/object')


const kotaController = {
    async getAll(req, res) {
        try {
            const kota = await KotaService.getAll()
            const city = kota.map((val) => {
                return prepareObjectAsAPIResponse(val.dataValues)
            })
            return res.status(200).json({ responses: city })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async getById(req, res) {
        const { id } = req.params
        try {
            const kota = await KotaService.getById({ id_kota: id })
            const city = await prepareObjectAsAPIResponse(kota.toJSON())
            return res.status(200).json({ responses: city })

        } catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async search(req, res) {
        const text = req.query.namaKota.toUpperCase()
        try {
            const kota = await KotaService.search(text)
            const city = await kota.map((val) => {
                return prepareObjectAsAPIResponse(val.toJSON())
            })
            return res.status(200).json({ responses: city })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

module.exports = kotaController
const KecamatanService = require('../../service/kecamatan.service')
const { prepareObjectAsAPIResponse,
    transformAttributesToPascalCase, } = require('../../../utils/object')


const kecamatanController = {
    async getAll(req, res) {
        try {
            const kecamatan = await KecamatanService.getAll()
            const district = kecamatan.map((val) => {
                return prepareObjectAsAPIResponse(val.dataValues)
            })
            return res.status(200).json({ responses: district })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async getById(req, res) {
        const { id } = req.params
        try {
            const kecamatan = await KecamatanService.getById({ id_kecamatan: id })
            const district = await prepareObjectAsAPIResponse(kecamatan.toJSON())
            return res.status(200).json({ responses: district })

        } catch (error) {
            return res.status(400).json({ message: error })
        }
    },

    async search(req, res) {
        const text = req.query.namaKecamatan
        try {
            const kecamatan = await KecamatanService.search(text)
            const district = await kecamatan.map((val) => {
                return prepareObjectAsAPIResponse(val.toJSON())
            })
            return res.status(200).json({ responses: district })
        }
        catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

module.exports = kecamatanController
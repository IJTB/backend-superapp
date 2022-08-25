const agamaService = require('../../service/agama.service')
const { prepareObjectAsAPIResponse,
    transformAttributesToPascalCase, } = require('../../../utils/object')

const agamaController = {
    async getAll(req, res) {
        try {
            const agama = await agamaService.getAll()
            return res.status(200).json({ responses: agama })
        }
        catch (error) {
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
            console.log(attributes)
            const agama = await agamaService.create(attributes)
            return res.status(201).json({ message: "Sukses!", code: 201, agama })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

module.exports = agamaController
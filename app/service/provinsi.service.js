const { sequelize } = require('../../models')
const { DataTypes } = require('sequelize')
const { Op } = require('sequelize')
const Provinsi = require('../../models/provinsi')(sequelize, DataTypes)

const ProvinsiService = {
    async getAll() {
        const provinsi = await Provinsi.findAll({
            order: sequelize.literal("id_provinsi ASC"),
        })
        return provinsi
    },
    async getById(params) {
        const provinsi = await Provinsi.findOne({
            where: params
        })
        return provinsi
    },
    async search(params) {
        const provinsi = await Provinsi.findAll({
            where: {
                nama_provinsi: {
                    [Op.like]: `%${params}%`
                }
            },
            order: sequelize.literal("id_provinsi ASC")
        })
        return provinsi
    }

}

module.exports = ProvinsiService
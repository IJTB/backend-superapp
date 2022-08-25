const { sequelize } = require('../../models')
const { DataTypes } = require('sequelize')
const { Op } = require('sequelize')
const Kota = require('../../models/kota')(sequelize, DataTypes)

const KotaService = {
    async getAll() {
        const kota = await Kota.findAll({
            order: sequelize.literal("id_kota ASC"),
        })
        return kota
    },
    async getById(params) {
        const kota = await Kota.findOne({
            where: params
        })
        return kota
    },

    async search(params) {
        const kota = await Kota.findAll({
            where: {
                nama_kota: {
                    [Op.like]: `%${params}%`
                }
            },
            order: sequelize.literal("id_kota ASC")
        })
        return kota
    }

}

module.exports = KotaService
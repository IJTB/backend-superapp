const { sequelize } = require('../../models')
const { DataTypes } = require('sequelize')
const { Op } = require('sequelize')
const Kecamantan = require('../../models/kecamatan')(sequelize, DataTypes)

const KecamantanService = {
    async getAll() {
        const kota = await Kecamantan.findAll({
            order: sequelize.literal("id_kota ASC"),
        })
        return kota
    },
    async getById(params) {
        const kota = await Kecamantan.findOne({
            where: params
        })
        return kota
    },

    async search(params) {
        const kota = await Kecamantan.findAll({
            where: {
                nama_kecamatan: {
                    [Op.iLike]: `%${params}%`
                }
            },
            order: sequelize.literal("id_kecamatan ASC")
        })
        return kota
    }

}

module.exports = KecamantanService
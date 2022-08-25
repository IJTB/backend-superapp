const { sequelize } = require('../../models')
const { DataTypes } = require('sequelize')
const Karyawan = require('../../models/karyawan')(sequelize, DataTypes)

const karyawanService = {
    async getAll() {
        const karyawan = await Karyawan.findAll({
            order: sequelize.literal("id ASC"),
        })
        return karyawan
    },
    async getById(params) {
        const karyawan = await Karyawan.findOne({
            where: params
        })
        return karyawan
    },
    async create(data) {
        const result = await sequelize.transaction(async () => {
            const karyawan = await Karyawan.create(data)
            return karyawan
        })
        return result
    }

}

module.exports = karyawanService
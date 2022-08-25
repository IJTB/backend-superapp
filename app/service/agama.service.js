const { sequelize } = require('../../models')
const { DataTypes } = require('sequelize')
const Agama = require('../../models/agama')(sequelize, DataTypes)

const agamaService = {
    async getAll() {
        const agama = await Agama.findAll({
            // order: sequelize.literal("id ASC"),
        })
        return agama
    },
    async create(data) {
        const result = await sequelize.transaction(async () => {
            const agama = await Agama.create(data)
            return agama
        })
        return result
    }

}

module.exports = agamaService
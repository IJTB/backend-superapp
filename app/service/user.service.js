const { sequelize } = require('../../models')
const { DataTypes } = require('sequelize')
const User = require('../../models/user')(sequelize, DataTypes)

const userService = {
    async find(params) {
        if (!params) return null
        const user = User.findOne({
            where: params
        })
        return user
    },
    async create(data) {
        const result = await sequelize.transaction(async () => {
            const user = await User.create(data)
            return user
        })
        return result
    }

}

module.exports = userService
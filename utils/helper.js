const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const helper = {
    toHashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    },

    comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword)
    }
}

module.exports = helper
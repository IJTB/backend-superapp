const { Op } = require('sequelize')
const userService = require('../../service/user.service')
const { prepareObjectAsAPIResponse } = require('../../../utils/object')
const helper = require('../../../utils/helper')

const authController = {
    async login(req, res) {
        const { username, password } = req.body
        try {
            const user = await userService.find({
                [Op.or]: [
                    { username: username },
                    { email: username }
                ]
            })
            if (!user) return res.status(400).json({ message: 'Username atau Email tidak ada!' })

            if (!helper.comparePassword(user.password, password))
                return res.status(400).json({ message: 'Password yang anda masukkan salah!' })
            const validateUser = user.toJSON()
            if (validateUser.password) delete validateUser.password
            
            const account = await prepareObjectAsAPIResponse(validateUser)
            return res.status(200).json({ responses: account })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

module.exports = authController
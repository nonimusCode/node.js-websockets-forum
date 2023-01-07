const userModel = require('../../models/Users/users')
const estructuraApi = require('../../helpers/estructuraApi')
var requestUser = require('../../models/DTO/classUserRequest')
const bcrypt = require('bcrypt')


exports.createUser = async (req ,res ) => {
    const api = new estructuraApi()

    requestUser = req.body

    await userModel.create(requestUser)
    .then(succ => {
        api.setResultado(succ)
    }).catch(err => {
        api.setEstado(err.parent.code || err, 'error', err.parent.detail || err)
    })
    res.json(api.toResponse())

}
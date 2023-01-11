const messagesModel = require('../../models/messages/messages.model')
const estructuraApi = require('../../helpers/estructuraApi')
const consultaSql = require('../../controllers/messages/ConsultSql')
var requestMessagues = require('../../models/DTO/classMessaguesRequest')


exports.getAllMessaguesByForoId = async (req, res) => {

    const api = new estructuraApi

    const { id_foro } = req.params

    const messsages = await consultaSql.getMessaguesByID(id_foro)

    if (messsages == '') {
        api.setEstado('1231', 'error', 'no se encuentran mensajes en el foro ')
        return res.json(api.toResponse())
    }
    api.setResultado(messsages)
    return res.json(api.toResponse())
}



exports.newMessagues = async (req, res) => {
    const api = new estructuraApi
    requestMessagues = req.body
    await messagesModel.create(requestMessagues)
        .then(succ => {
            api.setResultado(succ)
        }).catch(err => {
            api.setEstado(err.parent.code || err, 'error', err.parent.detail || err)
        })
    res.json(api.toResponse())

}


exports.newMessagueslocal = async (
    { message, hora_envio, user_id, forum_id }) => {
    const api = new estructuraApi

    requestMessagues = { message, hora_envio, user_id, forum_id }

    await messagesModel.create(requestMessagues)
        .then(succ => {
            api.setResultado(true)
        }).catch(err => {
            api.setResultado(false)
        })

    return api.toResponse()
}
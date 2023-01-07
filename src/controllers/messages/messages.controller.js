const messagesModel = require('../../models/messages/messages.model')
const forumModel = require('../../models/forum/forum.model')
const estructuraApi = require('../../helpers/estructuraApi')
var requestMessagues = require('../../models/DTO/classMessaguesRequest')


exports.getAllMessaguesByForoId = async (req , res) => {

    const api = new estructuraApi

    const {id_foro} = req.params

    const messsages = await messagesModel.findAll({
        where : {forum_id : id_foro} , 
        include : [forumModel]
    })

    if (messsages == '') {
        api.setEstado('1231' , 'error' , 'no se encuentran mensajes en el foro ')
        return res.json(api.toResponse())
    }
    api.setResultado(messsages)
    return res.json(api.toResponse())
}
exports.newMessagues = async (req , res ) => {
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


exports.newMessagues = async (req , res ) => {
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
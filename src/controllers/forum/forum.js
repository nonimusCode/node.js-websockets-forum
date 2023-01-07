const forumModel = require('../../models/forum/forum.model')
const estructuraApi = require('../../helpers/estructuraApi')
var requestForum = require('../../models/DTO/classForumRequest')


exports.createForo = async (req, res) => {
    const api = new estructuraApi
    requestForum = req.body
    await forumModel.create(requestForum)
        .then(succ => {
            api.setResultado(succ)
        }).catch(err => {
            api.setEstado(err.parent.code || err, 'error', err.parent.detail || err)
        })

    return res.json(api.toResponse())

}

exports.getForums = async (req, res) => {
    const api = new estructuraApi

    const Forums = await forumModel.findAll()

    if (Forums == '') {
        api.setEstado('fasdf', 'error', 'no se encontro ningun foro')
        return res.json(api.toResponse())
    }
    console.log("holis");
    api.setResultado(Forums)
    return res.json(api.toResponse())
}
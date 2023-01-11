const { Pool } = require('pg')
const database = require('../../../env')

const pool = new Pool(database)

exports.getMessaguesByID = async(id_forum) => {
    const itemModules =  await pool.query(
        `SELECT * 
        FROM messages 
        join usuario on messages.user_id = usuario.id_user 
        where messages.forum_id = ${id_forum}
        `
        )
    return itemModules.rows    
}
exports.getAllItemModule = async () => {
    const itemModule = await pool.query(
        `select 
        item_modulo_perfil.perfil_id,
        item_modulos.url_item_modulo,
        item_modulos.item_modulo
        from item_modulo_perfil
        join perfiles on  item_modulo_perfil.perfil_id = perfiles.id_perfil
        join item_modulos on  item_modulo_perfil.item_modulo_id = item_modulos.id_item_modulo`
        )
    return itemModule.rows
}


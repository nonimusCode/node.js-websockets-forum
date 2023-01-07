const  {DataTypes,Model} = require('sequelize')
const sequelize = require('../../config/connection')
const moment = require('moment-timezone');


 class Message extends Model{}
 
 Message.init({
    id_message :{
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement : true,
    },
    message:DataTypes.STRING,
    hora_envio:DataTypes.STRING,
    user_id :{
        type : DataTypes.INTEGER,
        foreignKey: true,
    },
    forum_id :{
        type : DataTypes.INTEGER,
        foreignKey: true,
    },
    createdAt: {
        type: DataTypes.NOW,
        allowNull: false,
        defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        field: 'creado'
    },
    updatedAt: {
        type: DataTypes.NOW,
        allowNull: false,
        defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        field: 'actualizado'
    },
},{
    sequelize,
    sequelize : sequelize,
    modelName :"Messages",
    tableName:"messages",
})

module.exports = Message
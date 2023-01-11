const  {DataTypes,Model} = require('sequelize')
const sequelize = require('../../config/connection')
const moment = require('moment-timezone');


 class Forum extends Model{}
 
 Forum.init({
    id_forum :{
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement : true,
    },
    forum:DataTypes.STRING,
    description:DataTypes.STRING,
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
    // modelName :"Forum",
    tableName:"forum",
})

module.exports = Forum
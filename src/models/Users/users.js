const  {DataTypes,Model} = require('sequelize')
const sequelize = require('../../config/connection')
const moment = require('moment-timezone');


 class User extends Model{} 
 
 User.init({
    id_user :{
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement : true,
    },
    name_user : DataTypes.STRING ,
    name : DataTypes.STRING ,
    surname: DataTypes.STRING ,
    email:DataTypes.STRING,
    password :DataTypes.STRING,
    photo :DataTypes.STRING,
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
    modelName :"UserModel",
    tableName:"user",
})

module.exports = User
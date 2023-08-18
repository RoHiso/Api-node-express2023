const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../connectiondb/sequelize-config')


class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING
    
  },
  email: {
    type: DataTypes.STRING,
    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize:sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  createdAt:false,
  updatedAt:false
});
module.exports = {User}

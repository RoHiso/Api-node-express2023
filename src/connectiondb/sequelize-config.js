const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('xacademysequelize', 'root', 'xAcademy2023', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql' 
  });

  async function testConnection(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established succefully');
    } catch (error) {
      console.error('Unable to connect to the data base', error);
    }
  }
  testConnection()
  module.exports= {sequelize}
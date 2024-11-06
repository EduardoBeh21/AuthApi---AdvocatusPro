const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3080,
  logging: false
});

const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados bem-sucedida!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

testDB();

module.exports = sequelize;
  
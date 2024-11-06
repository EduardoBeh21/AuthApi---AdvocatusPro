// Importações básicas
const express = require('express');
const sequelize = require('./config/db');


// Importação dos models
const User = require('./models/user');
const UserProfile = require('./models/userProfile');
const Address = require('./models/address');
const Permission = require('./models/permission');
const Role = require('./models/role');
const UserRole = require('./models/userRole');
const RolePermission = require('./models/rolePermission');
const UserSettings = require('./models/userSettings');

// Importa o arquivo .env
require('dotenv').config();

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota simples para o caminho root '/'
app.get('/', (req, res) => {
  res.send('Essa é a API de autenticação!');
});

// Sincroniza o banco de dados (criação de tabelas)
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

// Configura o servidor para escutar na porta 3001
app.listen(3010, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3010');
});
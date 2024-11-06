const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model UserProfile - Armazena informações pessoais e profissionais do usuário
 */
const UserProfile = sequelize.define('UserProfile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único do perfil'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    },
    comment: 'Referência ao ID do usuário (chave estrangeira)'
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Nome completo do usuário'
  },
  cpf: {
    type: DataTypes.STRING(11),
    unique: true,
    validate: {
      len: [11, 11]
    },
    comment: 'CPF do usuário (somente números)'
  },
  rg: {
    type: DataTypes.STRING,
    comment: 'Número do RG do usuário'
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    comment: 'Data de nascimento do usuário'
  },
  telefone: {
    type: DataTypes.STRING,
    comment: 'Número de telefone fixo'
  },
  celular: {
    type: DataTypes.STRING,
    comment: 'Número de celular'
  },
  oab: {
    type: DataTypes.STRING,
    comment: 'Número de registro na OAB'
  },
  estadoOAB: {
    type: DataTypes.STRING(2),
    comment: 'Estado de registro na OAB (UF)'
  }
});

UserProfile.associate = function(models) {
  UserProfile.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user'
  });
};

module.exports = UserProfile; 
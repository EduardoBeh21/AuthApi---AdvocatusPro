const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model UserSettings - Configurações personalizadas do usuário
 */
const UserSettings = sequelize.define('UserSettings', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único das configurações'
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
  theme: {
    type: DataTypes.STRING,
    defaultValue: 'light',
    comment: 'Tema da interface (ex: light, dark)'
  },
  notifications: {
    type: DataTypes.JSON,
    defaultValue: {
      email: true,
      push: true,
      sms: false
    },
    comment: 'Preferências de notificações do usuário'
  },
  language: {
    type: DataTypes.STRING,
    defaultValue: 'pt-BR',
    comment: 'Idioma preferido do usuário'
  },
  timezone: {
    type: DataTypes.STRING,
    defaultValue: 'America/Sao_Paulo',
    comment: 'Fuso horário do usuário'
  }
});

UserSettings.associate = function(models) {
  UserSettings.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user'
  });
};

module.exports = UserSettings; 
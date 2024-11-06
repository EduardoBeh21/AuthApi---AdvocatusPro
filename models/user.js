const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model User - Responsável pelo gerenciamento de usuários do sistema
 */
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único do usuário'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
    comment: 'Email do usuário, usado para login e comunicações'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Senha do usuário (armazenada com hash)'
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'blocked'),
    defaultValue: 'active',
    comment: 'Estado atual do usuário: active (ativo), inactive (inativo), blocked (bloqueado)'
  },
  lastLogin: {
    type: DataTypes.DATE,
    comment: 'Data e hora do último login do usuário'
  }
});

User.associate = function(models) {
  User.hasOne(models.UserProfile, {
    foreignKey: 'userId',
    as: 'profile'
  });
  
  User.hasMany(models.Address, {
    foreignKey: 'userId',
    as: 'addresses'
  });
  
  User.hasOne(models.UserSettings, {
    foreignKey: 'userId',
    as: 'settings'
  });
  
  User.belongsToMany(models.Role, { 
    through: models.UserRole,
    foreignKey: 'userId',
    as: 'roles'
  });
};

module.exports = User;

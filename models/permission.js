const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model Permission - Define as permissões disponíveis no sistema
 */
const Permission = sequelize.define('Permission', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único da permissão'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'Nome da permissão (ex: user.create, user.read)'
  },
  description: {
    type: DataTypes.STRING,
    comment: 'Descrição detalhada da permissão'
  },
  module: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Módulo do sistema a que se refere (ex: users, roles)'
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Ação permitida (ex: create, read, update, delete)'
  }
});

Permission.associate = function(models) {
  Permission.belongsToMany(models.Role, { 
    through: models.RolePermission,
    foreignKey: 'permissionId',
    as: 'roles'
  });
};

module.exports = Permission; 
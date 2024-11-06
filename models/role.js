const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model Role - Gerencia os papéis/funções dos usuários no sistema
 */
const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único do papel/função'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'Nome do papel/função (ex: admin, user, manager)'
  },
  description: {
    type: DataTypes.STRING,
    comment: 'Descrição detalhada do papel/função'
  },
  accessLevel: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 3
    },
    comment: 'Nível de acesso (0-3): quanto maior, mais permissões'
  }
});

Role.associate = function(models) {
  Role.belongsToMany(models.User, { 
    through: models.UserRole,
    foreignKey: 'roleId',
    as: 'users'
  });
  
  Role.belongsToMany(models.Permission, { 
    through: models.RolePermission,
    foreignKey: 'roleId',
    as: 'permissions'
  });
};

module.exports = Role; 
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model RolePermission - Tabela de junção entre Roles e Permissions
 */
const RolePermission = sequelize.define('RolePermission', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único da associação papel-permissão'
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Roles',
      key: 'id'
    },
    comment: 'ID do papel/função (chave estrangeira)'
  },
  permissionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Permissions',
      key: 'id'
    },
    comment: 'ID da permissão (chave estrangeira)'
  }
});

RolePermission.associate = function(models) {
  RolePermission.belongsTo(models.Role, {
    foreignKey: 'roleId'
  });
  RolePermission.belongsTo(models.Permission, {
    foreignKey: 'permissionId'
  });
};

module.exports = RolePermission; 
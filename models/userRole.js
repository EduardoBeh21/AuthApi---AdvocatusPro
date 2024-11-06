const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model UserRole - Tabela de junção entre Users e Roles
 */
const UserRole = sequelize.define('UserRole', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único da associação usuário-papel'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    },
    comment: 'ID do usuário (chave estrangeira)'
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
  isDefault: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: 'Indica se é o papel padrão do usuário'
  }
});

UserRole.associate = function(models) {
  UserRole.belongsTo(models.User, {
    foreignKey: 'userId'
  });
  UserRole.belongsTo(models.Role, {
    foreignKey: 'roleId'
  });
};

module.exports = UserRole; 
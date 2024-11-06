const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserPermission = sequelize.define('UserPermission', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  permissionId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Permissions',
      key: 'id'
    }
  }
});

module.exports = UserPermission; 
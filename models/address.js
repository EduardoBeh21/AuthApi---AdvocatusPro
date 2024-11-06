const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Model Address - Gerencia os endereços dos usuários
 */
const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Identificador único do endereço'
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
  tipo: {
    type: DataTypes.ENUM('residencial', 'comercial', 'outro'),
    defaultValue: 'residencial',
    comment: 'Tipo do endereço: residencial, comercial ou outro'
  },
  cep: {
    type: DataTypes.STRING(8),
    validate: {
      len: [8, 8]
    },
    comment: 'CEP do endereço (somente números)'
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Nome da rua, avenida, etc'
  },
  numero: {
    type: DataTypes.STRING,
    comment: 'Número do endereço'
  },
  complemento: {
    type: DataTypes.STRING,
    comment: 'Complemento do endereço (apto, sala, etc)'
  },
  bairro: {
    type: DataTypes.STRING,
    comment: 'Nome do bairro'
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Nome da cidade'
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
    comment: 'Sigla do estado (UF)'
  },
  principal: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: 'Indica se é o endereço principal do usuário'
  }
});

Address.associate = function(models) {
  Address.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user'
  });
};

module.exports = Address; 
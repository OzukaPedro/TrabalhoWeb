const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/database');

const User = database.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);

module.exports = User;

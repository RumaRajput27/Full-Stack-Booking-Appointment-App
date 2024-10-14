const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');  // Import the Sequelize instance
// Define the Product model
const Details = sequelize.define('userDetails', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

}, {
  tableName: 'users',  // Define the table name
  timestamps: false       // Disable Sequelize's automatic timestamps (optional)
});
module.exports = Details;
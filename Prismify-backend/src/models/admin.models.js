import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastLogin: {
    type: DataTypes.DATE,
    defaultValue: null
  }
}, {
  tableName: 'admins',
  timestamps: false
});

export default Admin;

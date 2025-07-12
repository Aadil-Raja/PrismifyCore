import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  timestamps: true,         // Adds createdAt and updatedAt
  tableName: 'contacts',    // Uses existing table name or creates it
});

export default Contact;

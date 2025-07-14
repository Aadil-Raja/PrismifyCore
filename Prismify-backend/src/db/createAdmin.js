import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';
import Admin from '../models/admin.models.js';
import sequelize from './sequelize.js'; // adjust the path if needed
//create admin from Prismify-backend using
//  node src/db/createAdmin.js
const createAdmin = async () => {
  try {
    await sequelize.authenticate(); // test connection
    console.log('DB connected');

    const hashedPassword = await bcrypt.hash('pass', 10); //replace 'pass' with your desired password
    await Admin.create({ username: 'admin2', password: hashedPassword });
    console.log('✅ Admin created!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

createAdmin();

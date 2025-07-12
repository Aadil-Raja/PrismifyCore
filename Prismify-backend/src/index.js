import dotenv from 'dotenv';
dotenv.config({
    path: './env'
});

import app from './app.js';
import sequelize from './db/sequelize.js';

// Import your model so Sequelize registers it
import './models/contacts.models.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection established');

    await sequelize.sync(); // Creates table if not exists
    console.log('All models synced');

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
  }
};

startServer();

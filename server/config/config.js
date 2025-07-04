// config.js
require('dotenv').config(); // Make sure environment variables are loaded from a .env file if present

module.exports = {
  port: process.env.PORT || 3005,
  dbConnection: process.env.DB_CONNECTION || 'mongodb://localhost:27017/userlist_db', // fallback to local DB
};

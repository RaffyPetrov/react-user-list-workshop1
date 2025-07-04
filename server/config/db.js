// db.js
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = (dbConnection) => {
  return mongoose.connect(dbConnection, options)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit process if unable to connect
    });
};

module.exports = connectDB;

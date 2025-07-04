// index.js
require('dotenv').config();
const express = require('express');
const path = require('path');

const connectDB = require('./config/db');
const { port, dbConnection } = require('./config/config');

const app = express();

// Allowed static file extensions (e.g., for favicon, CSS, JS)
const allowedExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.ico'];

const startServer = async () => {
  try {
    // Connect to local MongoDB
    await connectDB(dbConnection);
    console.log('✅ Database is connected');

    // Apply middleware and routes
    require('./config/express')(app, express);
    require('./routes/router')(app);

    // Serve frontend or static files
    app.get('*', (req, res) => {
      const ext = path.extname(req.url);
      if (allowedExtensions.includes(ext)) {
        return res.sendFile(path.resolve(__dirname, 'public', req.url));
      } else {
        return res.sendFile(path.join(__dirname, 'public', 'index.html'));
      }
    });

    // Start Express server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:\n', error.message);
    process.exit(1); // Exit process on startup failure
  }
};

startServer();

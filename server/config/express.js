// express.js
const cors = require('cors');

const whitelist = ['http://localhost:5173', 'http://localhost:3000']; // Only allow local frontend access

module.exports = (app, express) => {
  app.use(express.static('public'));

  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));

  app.use(express.json());

  // Global error handler
  app.use((error, req, res, next) => {
    if (res.headersSent) {
      return next(error);
    }
    res.status(error.code || 500).json({
      message: error.message || 'An unknown error occurred!',
    });
  });
};

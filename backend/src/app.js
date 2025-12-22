const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const { limiter } = require('./middleware/rateLimiter');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { UPLOAD_DIR } = require('./config/constants');
const { ensureCoreDirs } = require('./utils/ensureDirs');

const app = express();
app.set('trust proxy', 1);

app.use(helmet());
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
let corsOptions = { origin: '*' };
if (CORS_ORIGIN !== '*') {
  const allowList = CORS_ORIGIN.split(',').map(s => s.trim()).filter(Boolean);
  corsOptions = {
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowList.includes(origin)) return callback(null, true);
      return callback(new Error('CORS not allowed'), false);
    }
  };
}
app.use(cors(corsOptions));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

// Ensure required directories exist
ensureCoreDirs();

// Static for uploads
app.use('/uploads', express.static(UPLOAD_DIR));

// API routes
app.use('/api', routes);

// Fallbacks
app.use(notFound);
app.use(errorHandler);

module.exports = app;

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const { connectDB } = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'doctorweb';

(async () => {
  try {
    await connectDB(MONGO_URI, MONGO_DB_NAME);
  } catch (err) {
    console.error('DB connection failed:', err.message);
  }

  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
})();

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

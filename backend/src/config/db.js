const mongoose = require('mongoose');

async function connectDB(uri, dbName) {
  if (!uri) {
    console.warn('MONGO_URI not provided. Skipping DB connection.');
    return null;
  }
  try {
    const conn = await mongoose.connect(uri, { dbName });
    console.log(`MongoDB connected: ${dbName}`);
    return conn;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return null;
  }
}

module.exports = { connectDB };

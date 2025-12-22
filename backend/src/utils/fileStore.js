const fs = require('fs');
const { DATA_FILE, DATA_DIR } = require('../config/constants');

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function appendIntlSubmission(record) {
  ensureDataFile();
  const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  existing.push(record);
  fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2));
}

module.exports = { appendIntlSubmission };

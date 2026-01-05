const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
// Allow overriding storage base to support a single Render persistent disk
const STORAGE_DIR = process.env.STORAGE_DIR || path.join(ROOT_DIR, 'storage');
const UPLOAD_DIR = path.join(STORAGE_DIR, 'uploads');
const DATA_DIR = path.join(STORAGE_DIR, 'data');
const DATA_FILE = path.join(DATA_DIR, 'intl_submissions.json');

module.exports = { ROOT_DIR, STORAGE_DIR, UPLOAD_DIR, DATA_DIR, DATA_FILE };

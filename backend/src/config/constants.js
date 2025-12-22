const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
const UPLOAD_DIR = path.join(ROOT_DIR, 'uploads');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const DATA_FILE = path.join(DATA_DIR, 'intl_submissions.json');

module.exports = { ROOT_DIR, UPLOAD_DIR, DATA_DIR, DATA_FILE };

const fs = require('fs');
const { UPLOAD_DIR, DATA_DIR } = require('../config/constants');

function ensureCoreDirs() {
  for (const dir of [UPLOAD_DIR, DATA_DIR]) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }
}

module.exports = { ensureCoreDirs };

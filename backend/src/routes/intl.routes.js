const express = require('express');
const { upload } = require('../middleware/upload');
const { createIntlAppointment } = require('../controllers/intl.controller');

const router = express.Router();

const uploadFields = upload.fields([
  { name: 'report', maxCount: 1 },
  { name: 'attachment', maxCount: 1 },
]);

router.post('/appointments', uploadFields, createIntlAppointment);

module.exports = router;

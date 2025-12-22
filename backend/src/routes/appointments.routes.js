const express = require('express');
const { createAppointment } = require('../controllers/appointments.controller');

const router = express.Router();

router.post('/', createAppointment);

module.exports = router;

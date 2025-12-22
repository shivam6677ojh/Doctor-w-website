const express = require('express');
const { listTimeslots } = require('../controllers/timeslots.controller');

const router = express.Router();

router.get('/', listTimeslots);

module.exports = router;

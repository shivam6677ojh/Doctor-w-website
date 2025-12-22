const express = require('express');
const { countriesStates, departments, hospitals, doctors } = require('../controllers/meta.controller');

const router = express.Router();

router.get('/countries-states', countriesStates);
router.get('/departments', departments);
router.get('/hospitals', hospitals);
router.get('/doctors', doctors);

module.exports = router;

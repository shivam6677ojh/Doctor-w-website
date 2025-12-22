const express = require('express');
const metaRoutes = require('./meta.routes');
const intlRoutes = require('./intl.routes');
const appointmentsRoutes = require('./appointments.routes');
const timeslotsRoutes = require('./timeslots.routes');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ ok: true, service: 'doctorweb-backend', time: new Date().toISOString() });
});

router.use('/meta', metaRoutes);
router.use('/intl', intlRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/timeslots', timeslotsRoutes);

module.exports = router;

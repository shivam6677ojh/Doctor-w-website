const { generateTimeSlots } = require('../utils/timeslots');

function listTimeslots(req, res) {
  const { doctorId, date } = req.query;
  if (!date) return res.status(400).json({ ok: false, error: 'date is required' });
  const slots = generateTimeSlots(date);
  res.json({ ok: true, timeslots: slots, doctorId });
}

module.exports = { listTimeslots };

const { nanoid } = require('nanoid');
const Appointment = require('../models/Appointment');
const { appointmentSchema } = require('../validations/appointment.schema');

async function createAppointment(req, res) {
  const parsed = appointmentSchema.safeParse(req.body || {});
  if (!parsed.success) {
    res.status(400);
    return res.json({ ok: false, error: 'Validation failed', details: parsed.error.flatten() });
  }

  const id = nanoid(10);
  const doc = new Appointment({
    shortId: id,
    ...parsed.data,
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    ua: req.headers['user-agent'] || '',
  });

  try {
    if (Appointment.db?.readyState === 1) {
      await doc.save();
    } else {
      console.warn('Mongo not ready; appointment accepted but not persisted to DB');
    }
    return res.status(201).json({ ok: true, id, _id: doc._id });
  } catch (err) {
    console.error('Appointment submit error:', err);
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
}

module.exports = { createAppointment };

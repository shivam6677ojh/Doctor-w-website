const fs = require('fs');
const { nanoid } = require('nanoid');
const IntlAppointment = require('../models/IntlAppointment');
const { intlSchema } = require('../validations/intl.schema');
const { appendIntlSubmission } = require('../utils/fileStore');

async function createIntlAppointment(req, res) {
  const parsed = intlSchema.safeParse(req.body || {});
  if (!parsed.success) {
    const fileAny = (req.files && (req.files.report?.[0] || req.files.attachment?.[0])) || null;
    if (fileAny) {
      fs.unlink(fileAny.path, () => {});
    }
    res.status(400);
    return res.json({ ok: false, error: 'Validation failed', details: parsed.error.flatten() });
  }

  const id = nanoid(12);
  const file = (req.files && (req.files.report?.[0] || req.files.attachment?.[0])) || null;
  const normalizedPhone = parsed.data.phone || parsed.data.mobile || '';
  const normalizedDept = parsed.data.department || parsed.data.treatment || '';
  const record = {
    shortId: id,
    createdAt: new Date().toISOString(),
    ...parsed.data,
    phone: normalizedPhone,
    department: normalizedDept,
    attachment: file
      ? { filename: file.filename, originalname: file.originalname, mimetype: file.mimetype, size: file.size }
      : null,
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    ua: req.headers['user-agent'] || '',
  };

  // Try Mongo first, fallback to file
  try {
    if (IntlAppointment.db?.readyState === 1) {
      const doc = new IntlAppointment(record);
      await doc.save();
      return res.status(201).json({ ok: true, id: doc.shortId, _id: String(doc._id) });
    }
  } catch (dbErr) {
    console.error('Mongo save error, falling back to JSON:', dbErr);
  }

  try {
    appendIntlSubmission(record);
    return res.status(201).json({ ok: true, id: record.shortId, storedLocally: true });
  } catch (fileErr) {
    console.error('File persistence error:', fileErr);
    return res.status(500).json({ ok: false, error: 'Persistence failed' });
  }
}

module.exports = { createIntlAppointment };

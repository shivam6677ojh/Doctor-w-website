const mongoose = require('mongoose');

const IntlAppointmentSchema = new mongoose.Schema(
  {
    shortId: { type: String, index: true },
    fullName: String,
    email: String,
    phone: String,
    age: String,
    gender: String,
    country: String,
    city: String,
    preferredDate: String,
    department: String,
    message: String,
    attachment: {
      filename: String,
      originalname: String,
      mimetype: String,
      size: Number,
    },
    ip: String,
    ua: String,
  },
  { timestamps: true }
);

module.exports = mongoose.models.IntlAppointment || mongoose.model('IntlAppointment', IntlAppointmentSchema);

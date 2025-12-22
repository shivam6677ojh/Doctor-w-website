const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema(
  {
    shortId: { type: String, index: true },
    patientName: String,
    patientEmail: String,
    phoneCountryCode: String,
    phoneDialCode: String,
    phoneNumber: String,
    country: String,
    state: String,
    city: String,
    hospitalId: String,
    hospitalName: String,
    date: String,
    department: String,
    doctorId: String,
    doctorName: String,
    timeslot: String,
    agreeWhatsApp: Boolean,
    agreeTerms: Boolean,
    agreeContact: Boolean,
    ip: String,
    ua: String,
  },
  { timestamps: true }
);

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);

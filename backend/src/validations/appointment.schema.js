const { z } = require('zod');

const appointmentSchema = z.object({
  patientName: z.string().min(2).max(120),
  patientEmail: z.string().email().max(160).optional().or(z.literal('')),
  phoneCountryCode: z.string().max(3).optional().or(z.literal('')),
  phoneDialCode: z.string().max(6),
  phoneNumber: z.string().min(6).max(20),
  country: z.string().min(2).max(80),
  state: z.string().min(2).max(80),
  city: z.string().min(2).max(120),
  hospitalId: z.string().min(3).max(64),
  hospitalName: z.string().min(3).max(160),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  department: z.string().min(2).max(120),
  doctorId: z.string().min(2).max(64),
  doctorName: z.string().min(2).max(160),
  timeslot: z.string().min(4).max(10),
  agreeWhatsApp: z.coerce.boolean().optional().default(false),
  agreeTerms: z.coerce.boolean().default(false),
  agreeContact: z.coerce.boolean().optional().default(false),
});

module.exports = { appointmentSchema };

const { z } = require('zod');

const intlSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(160).optional().or(z.literal('')),
  phone: z.string().min(6).max(30).optional().or(z.literal('')),
  mobile: z.string().min(6).max(30).optional().or(z.literal('')),
  country: z.string().min(2).max(80).optional().or(z.literal('')),
  city: z.string().min(2).max(120).optional().or(z.literal('')),
  preferredDate: z.string().optional().or(z.literal('')),
  department: z.string().min(2).max(120).optional().or(z.literal('')),
  treatment: z.string().min(2).max(120).optional().or(z.literal('')),
  age: z.string().max(3).optional().or(z.literal('')),
  gender: z.string().max(20).optional().or(z.literal('')),
  message: z.string().max(2000).optional().or(z.literal('')),
});

module.exports = { intlSchema };

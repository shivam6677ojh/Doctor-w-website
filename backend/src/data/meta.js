const DEPARTMENTS = [
  'General Ophthalmology',
  'Cataract',
  'Retina',
  'Cornea',
  'Glaucoma',
  'Oculoplasty',
  'Paediatric Ophthalmology',
];

const COUNTRIES = [
  { code: 'IN', name: 'India', dialCode: '+91', states: ['Tamil Nadu', 'Maharashtra', 'Karnataka', 'Telangana'] },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', states: ['Dubai', 'Abu Dhabi', 'Sharjah'] },
  { code: 'US', name: 'United States', dialCode: '+1', states: ['California', 'Texas', 'New York'] },
];

const HOSPITALS = [
  { id: 'H-IN-CHN-001', name: 'Dr Agarwals Eye Hospital - Chennai', country: 'India', state: 'Tamil Nadu', city: 'Chennai', departments: DEPARTMENTS },
  { id: 'H-IN-MUM-002', name: 'Dr Agarwals Eye Hospital - Mumbai', country: 'India', state: 'Maharashtra', city: 'Mumbai', departments: DEPARTMENTS },
  { id: 'H-IN-HYD-003', name: 'Dr Agarwals Eye Hospital - Hyderabad', country: 'India', state: 'Telangana', city: 'Hyderabad', departments: DEPARTMENTS },
  { id: 'H-IN-BLR-004', name: 'Dr Agarwals Eye Hospital - Bengaluru', country: 'India', state: 'Karnataka', city: 'Bengaluru', departments: DEPARTMENTS },
];

const DOCTORS = [
  { id: 'D-001', name: 'Dr. A. Kumar', department: 'General Ophthalmology', hospitalId: 'H-IN-CHN-001' },
  { id: 'D-002', name: 'Dr. B. Mehta', department: 'Cataract', hospitalId: 'H-IN-CHN-001' },
  { id: 'D-003', name: 'Dr. C. Rao', department: 'Retina', hospitalId: 'H-IN-HYD-003' },
  { id: 'D-004', name: 'Dr. D. Iyer', department: 'Cornea', hospitalId: 'H-IN-BLR-004' },
  { id: 'D-005', name: 'Dr. E. Shah', department: 'Glaucoma', hospitalId: 'H-IN-MUM-002' },
];

module.exports = { DEPARTMENTS, COUNTRIES, HOSPITALS, DOCTORS };

const { DEPARTMENTS, COUNTRIES, HOSPITALS, DOCTORS } = require('../data/meta');

function countriesStates(req, res) {
  res.json({ ok: true, countries: COUNTRIES });
}

function departments(req, res) {
  res.json({ ok: true, departments: DEPARTMENTS });
}

function hospitals(req, res) {
  const { country, state, city } = req.query;
  let list = HOSPITALS.slice();
  if (country) list = list.filter(h => h.country.toLowerCase() === String(country).toLowerCase());
  if (state) list = list.filter(h => h.state.toLowerCase() === String(state).toLowerCase());
  if (city) list = list.filter(h => h.city.toLowerCase() === String(city).toLowerCase());
  res.json({ ok: true, hospitals: list });
}

function doctors(req, res) {
  const { hospitalId, department } = req.query;
  let list = DOCTORS.slice();
  if (hospitalId) list = list.filter(d => d.hospitalId === hospitalId);
  if (department) list = list.filter(d => d.department === department);
  if (!list.length) {
    list = [{
      id: 'ANY',
      name: 'Any Available Doctor',
      department: department || 'General Ophthalmology',
      hospitalId: hospitalId || (HOSPITALS[0] && HOSPITALS[0].id) || 'H-IN-CHN-001',
    }];
  }
  res.json({ ok: true, doctors: list });
}

module.exports = { countriesStates, departments, hospitals, doctors };

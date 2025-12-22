function generateTimeSlots(dateStr) {
  const slots = [];
  const [y, m, d] = (dateStr || '').split('-').map(Number);
  if (!y || !m || !d) return slots;
  const start = new Date(y, m - 1, d, 10, 0, 0, 0);
  for (let i = 0; i < 14; i++) {
    const t = new Date(start.getTime() + i * 30 * 60000);
    const hh = String(t.getHours()).padStart(2, '0');
    const mm = String(t.getMinutes()).padStart(2, '0');
    slots.push(`${hh}:${mm}`);
  }
  return slots;
}

module.exports = { generateTimeSlots };

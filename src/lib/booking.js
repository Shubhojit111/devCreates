export function nextDays(count = 14) {
  const out = [];
  const day = new Date();
  while (out.length < count) {
    day.setDate(day.getDate() + 1);
    if (day.getDay() === 0) continue;
    const date = new Date(day);
    out.push({
      key: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
      label: date.toLocaleDateString('en-GB', { weekday: 'short' }),
      date,
    });
  }
  return out;
}

export const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];

/** Preview-only, deterministic pseudo-availability; connect a calendar API for real availability. */
export function isSlotFree(dayKey, time) {
  const value = `${dayKey}|${time}`;
  let hash = 0;
  for (let index = 0; index < value.length; index++) hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  return hash % 5 !== 0;
}

function icsLocal(date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}00`;
}

function icsUtc(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function escapeText(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

/** A locally downloadable calendar reminder; no appointment is booked on a remote calendar. */
export function buildIcs({ service, date, time, name }) {
  const [hours, minutes] = time.split(':').map(Number);
  const start = new Date(date);
  start.setHours(hours, minutes, 0, 0);
  const end = new Date(start.getTime() + 30 * 60_000);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'PRODID:-//Dev Creates//Booking Preview//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@dev-creates.example`,
    `DTSTAMP:${icsUtc(new Date())}`,
    `DTSTART:${icsLocal(start)}`,
    `DTEND:${icsLocal(end)}`,
    `SUMMARY:Dev Creates — ${escapeText(service)} call`,
    `DESCRIPTION:30-minute discovery call with Dev Creates for ${escapeText(name)}.`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
}

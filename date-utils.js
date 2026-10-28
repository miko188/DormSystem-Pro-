/**
 * Күнмен жұмыс
 */
export function formatDate(date, locale = 'kk-KZ') {
  if (!date) return '—';
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '—';
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function formatDateTime(date, locale = 'kk-KZ') {
  if (!date) return '—';
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '—';
  return d.toLocaleString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function relativeTime(date) {
  if (!date) return '';
  const d = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diff = Math.floor((now - d) / 1000);

  if (diff < 60) return 'жаңа ғана';
  if (diff < 3600) return `${Math.floor(diff / 60)} мин бұрын`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} сағ бұрын`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} күн бұрын`;
  return formatDate(d);
}

export function isToday(date) {
  const d = new Date(date);
  const now = new Date();
  return d.toDateString() === now.toDateString();
}
/**
 * Теңге форматтау
 */
export function formatKzt(amount) {
  if (amount == null || isNaN(amount)) return '0 ₸';
  return new Intl.NumberFormat('kk-KZ', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(amount) + ' ₸';
}

export function formatKztShort(amount) {
  if (amount >= 1000000) return (amount / 1000000).toFixed(1) + ' млн ₸';
  if (amount >= 1000) return (amount / 1000).toFixed(0) + ' мың ₸';
  return amount + ' ₸';
}
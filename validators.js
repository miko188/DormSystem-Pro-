/**
 * Валидаторлар
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone) {
  return /^\+?[0-9\s\-()]{10,20}$/.test(phone);
}

export function isStrongPassword(pwd) {
  return pwd.length >= 6;
}

export function required(value) {
  return value != null && String(value).trim().length > 0;
}

export function isIIN(value) {
  return /^\d{12}$/.test(value);
}

export function isPositiveNumber(value) {
  return !isNaN(value) && Number(value) > 0;
}

export function validateField(value, rules = {}) {
  if (rules.required && !required(value)) return 'Бұл өріс міндетті';
  if (rules.email && !isValidEmail(value)) return 'Жарамсыз email';
  if (rules.phone && !isValidPhone(value)) return 'Жарамсыз телефон нөмірі';
  if (rules.minLength && value.length < rules.minLength) return `Кемінде ${rules.minLength} таңба`;
  if (rules.iin && !isIIN(value)) return 'ЖСН 12 саннан тұруы керек';
  return null;
}
import { APP } from '../config/constants.js';

const prefix = APP.STORAGE_PREFIX + 'session_';

export function sessionGet(name, fallback = null) {
  try {
    const raw = sessionStorage.getItem(prefix + name);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function sessionSet(name, value) {
  try {
    sessionStorage.setItem(prefix + name, JSON.stringify(value));
  } catch {}
}

export function sessionRemove(name) {
  try {
    sessionStorage.removeItem(prefix + name);
  } catch {}
}
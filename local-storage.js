import { STORAGE_KEYS, APP } from '../config/constants.js';
import { logger } from '../utils/logger.js';

const prefix = APP.STORAGE_PREFIX || 'dormsystem_';

function key(name) {
  return prefix + name;
}

export function getItem(name, fallback = null) {
  try {
    const raw = localStorage.getItem(key(name));
    if (raw == null || raw === 'null' || raw === 'undefined') {
      return fallback;
    }
    return JSON.parse(raw);
  } catch (e) {
    logger.error('localStorage read error:', name, e);
    return fallback;
  }
}

export function setItem(name, value) {
  try {
    if (value === undefined) {
      localStorage.removeItem(key(name));
      return true;
    }
    localStorage.setItem(key(name), JSON.stringify(value));
    return true;
  } catch (e) {
    logger.error('localStorage write error:', name, e);
    return false;
  }
}

export function removeItem(name) {
  try {
    localStorage.removeItem(key(name));
  } catch (e) {
    logger.error('localStorage remove error:', name, e);
  }
}

export function clearAll() {
  Object.values(STORAGE_KEYS).forEach(k => removeItem(k));
}

export function getAll(collection, fallback = []) {
  const result = getItem(collection, fallback);
  return Array.isArray(result) ? result : fallback;
}

export function saveAll(collection, arr) {
  return setItem(collection, arr);
}

export function findById(collection, id) {
  return getAll(collection).find(x => x.id === id) || null;
}

export function upsert(collection, item) {
  const arr = getAll(collection);
  const idx = arr.findIndex(x => x.id === item.id);
  if (idx >= 0) arr[idx] = { ...arr[idx], ...item };
  else arr.push(item);
  saveAll(collection, arr);
  return item;
}

export function remove(collection, id) {
  const arr = getAll(collection).filter(x => x.id !== id);
  saveAll(collection, arr);
}
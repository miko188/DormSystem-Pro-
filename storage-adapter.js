/**
 * Болашақта localStorage → API ауыстыру үшін бірыңғай интерфейс
 */
import * as local from './local-storage.js';

export const storage = {
  get: local.getItem,
  set: local.setItem,
  remove: local.removeItem,
  clear: local.clearAll,
  getAll: local.getAll,
  saveAll: local.saveAll,
  findById: local.findById,
  upsert: local.upsert,
  delete: local.remove,
};
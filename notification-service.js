import { STORAGE_KEYS } from '../config/constants.js';
import { getAll, upsert } from '../storage/local-storage.js';

export const notificationService = {
  byUser(userId) {
    return getAll(STORAGE_KEYS.NOTIFICATIONS)
      .filter(n => n.userId === userId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  unreadCount(userId) {
    return this.byUser(userId).filter(n => !n.read).length;
  },

  markRead(id) {
    const all = getAll(STORAGE_KEYS.NOTIFICATIONS);
    const n = all.find(x => x.id === id);
    if (n) {
      n.read = true;
      upsert(STORAGE_KEYS.NOTIFICATIONS, n);
    }
  },

  markAllRead(userId) {
    const all = getAll(STORAGE_KEYS.NOTIFICATIONS);
    all.filter(n => n.userId === userId).forEach(n => {
      n.read = true;
      upsert(STORAGE_KEYS.NOTIFICATIONS, n);
    });
  },
};
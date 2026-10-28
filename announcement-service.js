import { STORAGE_KEYS } from '../config/constants.js';
import { getAll } from '../storage/local-storage.js';

export const announcementService = {
  all() {
    return getAll(STORAGE_KEYS.ANNOUNCEMENTS)
      .sort((a, b) => {
        if (a.pinned !== b.pinned) return b.pinned - a.pinned;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  },

  latest(count = 3) {
    return this.all().slice(0, count);
  },
};
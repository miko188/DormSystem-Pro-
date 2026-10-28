import { STORAGE_KEYS, ROOM_STATUS } from '../config/constants.js';
import { getAll, findById, upsert } from '../storage/local-storage.js';

export const roomService = {
  all() {
    return getAll(STORAGE_KEYS.ROOMS);
  },

  byId(id) {
    return findById(STORAGE_KEYS.ROOMS, id);
  },

  filter({ search, buildingId, floorNumber, status, minPrice, maxPrice, capacity }) {
    let rooms = this.all();
    if (search) {
      const q = search.toLowerCase();
      rooms = rooms.filter(r =>
        r.number.toLowerCase().includes(q) ||
        r.buildingName.toLowerCase().includes(q)
      );
    }
    if (buildingId) rooms = rooms.filter(r => r.buildingId === buildingId);
    if (floorNumber) rooms = rooms.filter(r => r.floorNumber === Number(floorNumber));
    if (status) rooms = rooms.filter(r => r.status === status);
    if (minPrice != null) rooms = rooms.filter(r => r.price >= Number(minPrice));
    if (maxPrice != null) rooms = rooms.filter(r => r.price <= Number(maxPrice));
    if (capacity) rooms = rooms.filter(r => r.capacity === Number(capacity));
    return rooms;
  },

  availableCount() {
    return this.all().reduce((s, r) => s + (r.capacity - r.occupied), 0);
  },

  totalCount() {
    return this.all().length;
  },

  stats() {
    const rooms = this.all();
    return {
      total: rooms.length,
      available: rooms.filter(r => r.status === ROOM_STATUS.AVAILABLE).length,
      partial: rooms.filter(r => r.status === ROOM_STATUS.PARTIAL).length,
      full: rooms.filter(r => r.status === ROOM_STATUS.FULL).length,
      maintenance: rooms.filter(r => r.status === ROOM_STATUS.MAINTENANCE).length,
      freeBeds: rooms.reduce((s, r) => s + (r.capacity - r.occupied), 0),
      totalBeds: rooms.reduce((s, r) => s + r.capacity, 0),
    };
  },
};
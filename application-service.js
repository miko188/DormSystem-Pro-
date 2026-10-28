import { STORAGE_KEYS, APPLICATION_STATUS } from '../config/constants.js';
import { getAll, upsert, findById } from '../storage/local-storage.js';
import { generateId } from '../utils/id-generator.js';

export const applicationService = {
  all() { return getAll(STORAGE_KEYS.APPLICATIONS); },

  byStudent(studentId) {
    return this.all().filter(a => a.studentId === studentId);
  },

  create({ studentId, studentName, roomId, roomNumber, buildingName, preferredFloor, preferredBuilding }) {
    const app = {
      id: generateId('app'),
      studentId,
      studentName,
      roomId,
      roomNumber,
      buildingName,
      preferredFloor,
      preferredBuilding,
      status: APPLICATION_STATUS.SUBMITTED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      comment: '',
    };
    upsert(STORAGE_KEYS.APPLICATIONS, app);
    return app;
  },

  updateStatus(id, status, comment = '') {
    const app = findById(STORAGE_KEYS.APPLICATIONS, id);
    if (!app) return null;
    app.status = status;
    app.comment = comment;
    app.updatedAt = new Date().toISOString();
    upsert(STORAGE_KEYS.APPLICATIONS, app);
    return app;
  },
};
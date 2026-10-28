import { STORAGE_KEYS, REQUEST_STATUS } from '../config/constants.js';
import { getAll, upsert, findById } from '../storage/local-storage.js';
import { generateId } from '../utils/id-generator.js';

export const requestService = {
  all() { return getAll(STORAGE_KEYS.REQUESTS); },

  byStudent(studentId) {
    return this.all().filter(r => r.studentId === studentId);
  },

  byId(id) { return findById(STORAGE_KEYS.REQUESTS, id); },

  create({ studentId, studentName, category, priority, subject, description }) {
    const req = {
      id: generateId('req'),
      studentId,
      studentName,
      category,
      priority,
      subject,
      description,
      status: REQUEST_STATUS.NEW,
      assignedTo: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      comments: [],
    };
    upsert(STORAGE_KEYS.REQUESTS, req);
    return req;
  },

  addComment(id, comment) {
    const req = findById(STORAGE_KEYS.REQUESTS, id);
    if (!req) return null;
    req.comments = req.comments || [];
    req.comments.push({ ...comment, createdAt: new Date().toISOString() });
    req.updatedAt = new Date().toISOString();
    upsert(STORAGE_KEYS.REQUESTS, req);
    return req;
  },
};
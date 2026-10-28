import { STORAGE_KEYS } from '../config/constants.js';
import { getAll } from '../storage/local-storage.js';

export const paymentService = {
  byStudent(studentId) {
    return getAll(STORAGE_KEYS.PAYMENTS).filter(p => p.studentId === studentId);
  },

  totalPaid(studentId) {
    return this.byStudent(studentId)
      .filter(p => p.status === 'paid')
      .reduce((s, p) => s + p.amount, 0);
  },

  totalDebt(studentId) {
    return this.byStudent(studentId)
      .filter(p => p.status === 'overdue' || p.status === 'pending')
      .reduce((s, p) => s + p.amount, 0);
  },

  byId(id) {
    return getAll(STORAGE_KEYS.PAYMENTS).find(p => p.id === id) || null;
  },
};
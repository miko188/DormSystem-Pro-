import { ROLES } from './constants.js';

/**
 * Рөлдер бойынша рұқсаттар матрицасы
 */
export const PERMISSIONS = {
  [ROLES.STUDENT]: {
    viewRooms: true,
    bookRoom: true,
    viewOwnPayments: true,
    createRequest: true,
    editOwnProfile: true,
    adminPanel: false,
  },
  [ROLES.STAFF]: {
    viewRooms: true,
    processRequests: true,
    viewApplications: true,
    adminPanel: false,
  },
  [ROLES.ADMIN]: {
    all: true,
  },
};

export function hasPermission(role, permission) {
  const perms = PERMISSIONS[role];
  if (!perms) return false;
  if (perms.all) return true;
  return !!perms[permission];
}
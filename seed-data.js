import { demoUsers } from '../../../data/demo-users.js';
import { demoStudents } from '../../../data/demo-students.js';
import { demoStaff } from '../../../data/demo-staff.js';
import { demoBuildings } from '../../../data/demo-buildings.js';
import { demoFloors } from '../../../data/demo-floors.js';
import { demoRooms } from '../../../data/demo-rooms.js';
import { demoBeds } from '../../../data/demo-beds.js';
import { demoApplications } from '../../../data/demo-applications.js';
import { demoBookings } from '../../../data/demo-bookings.js';
import { demoPayments } from '../../../data/demo-payments.js';
import { demoDebts } from '../../../data/demo-debts.js';
import { demoRequests } from '../../../data/demo-requests.js';
import { demoAnnouncements } from '../../../data/demo-announcements.js';
import { demoNotifications } from '../../../data/demo-notifications.js';
import { demoDocuments } from '../../../data/demo-documents.js';
import { demoActivity } from '../../../data/demo-activity.js';
import { demoSettings } from '../../../data/demo-settings.js';
import { STORAGE_KEYS } from '../config/constants.js';

const SEED_MAP = {
  [STORAGE_KEYS.USERS]: demoUsers,
  [STORAGE_KEYS.STUDENTS]: demoStudents,
  [STORAGE_KEYS.STAFF]: demoStaff,
  [STORAGE_KEYS.BUILDINGS]: demoBuildings,
  [STORAGE_KEYS.FLOORS]: demoFloors,
  [STORAGE_KEYS.ROOMS]: demoRooms,
  [STORAGE_KEYS.BEDS]: demoBeds,
  [STORAGE_KEYS.APPLICATIONS]: demoApplications,
  [STORAGE_KEYS.BOOKINGS]: demoBookings,
  [STORAGE_KEYS.PAYMENTS]: demoPayments,
  [STORAGE_KEYS.DEBTS]: demoDebts,
  [STORAGE_KEYS.REQUESTS]: demoRequests,
  [STORAGE_KEYS.ANNOUNCEMENTS]: demoAnnouncements,
  [STORAGE_KEYS.NOTIFICATIONS]: demoNotifications,
  [STORAGE_KEYS.DOCUMENTS]: demoDocuments,
  [STORAGE_KEYS.ACTIVITY]: demoActivity,
  [STORAGE_KEYS.SETTINGS]: demoSettings,
};

const PREFIX = 'dormsystem_';

export function seedIfNeeded() {
  const seeded = localStorage.getItem(PREFIX + STORAGE_KEYS.SEEDED);

  if (seeded === 'true') {
    // Тек бос болса толтыру (пайдаланушы деректерін жоғалтпау)
    Object.entries(SEED_MAP).forEach(([key, data]) => {
      const current = localStorage.getItem(PREFIX + key);
      if (current == null || current === 'null' || current === '[]') {
        localStorage.setItem(PREFIX + key, JSON.stringify(data));
      }
    });
    return false;
  }

  // Бірінші рет — толық seed
  Object.entries(SEED_MAP).forEach(([key, data]) => {
    localStorage.setItem(PREFIX + key, JSON.stringify(data));
  });
  localStorage.setItem(PREFIX + STORAGE_KEYS.SEEDED, 'true');
  return true;
}

export function resetDemoData() {
  Object.keys(SEED_MAP).forEach(key => {
    localStorage.removeItem(PREFIX + key);
  });
  localStorage.removeItem(PREFIX + STORAGE_KEYS.SEEDED);
  return seedIfNeeded();
}
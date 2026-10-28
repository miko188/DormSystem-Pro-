/**
 * CONSTANTS — Жүйе константалары
 * Барлық статус, рөл, категория осында
 */

export const APP = {
  NAME: 'DormSystem Pro',
  VERSION: '1.0.0',
  LANG: 'kk',
  STORAGE_PREFIX: 'dormsystem_',
  STORAGE_VERSION: 1,
};

export const ROLES = {
  STUDENT: 'student',
  STAFF: 'staff',
  ADMIN: 'admin',
};

export const ROLE_LABELS = {
  [ROLES.STUDENT]: 'Студент',
  [ROLES.STAFF]: 'Қызметкер',
  [ROLES.ADMIN]: 'Әкімші',
};

export const ROOM_STATUS = {
  AVAILABLE: 'available',
  PARTIAL: 'partial',
  FULL: 'full',
  MAINTENANCE: 'maintenance',
};

export const ROOM_STATUS_LABELS = {
  [ROOM_STATUS.AVAILABLE]: 'Бос',
  [ROOM_STATUS.PARTIAL]: 'Ішінара толы',
  [ROOM_STATUS.FULL]: 'Толы',
  [ROOM_STATUS.MAINTENANCE]: 'Жөндеуде',
};

export const ROOM_STATUS_BADGE = {
  [ROOM_STATUS.AVAILABLE]: 'success',
  [ROOM_STATUS.PARTIAL]: 'warning',
  [ROOM_STATUS.FULL]: 'danger',
  [ROOM_STATUS.MAINTENANCE]: 'neutral',
};

export const APPLICATION_STATUS = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  REVIEWING: 'reviewing',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  CANCELLED: 'cancelled',
};

export const APPLICATION_STATUS_LABELS = {
  [APPLICATION_STATUS.DRAFT]: 'Жоба',
  [APPLICATION_STATUS.SUBMITTED]: 'Жіберілді',
  [APPLICATION_STATUS.REVIEWING]: 'Қаралуда',
  [APPLICATION_STATUS.APPROVED]: 'Мақұлданды',
  [APPLICATION_STATUS.REJECTED]: 'Қабылданбады',
  [APPLICATION_STATUS.CANCELLED]: 'Бас тартылды',
};

export const APPLICATION_STATUS_BADGE = {
  [APPLICATION_STATUS.DRAFT]: 'neutral',
  [APPLICATION_STATUS.SUBMITTED]: 'info',
  [APPLICATION_STATUS.REVIEWING]: 'warning',
  [APPLICATION_STATUS.APPROVED]: 'success',
  [APPLICATION_STATUS.REJECTED]: 'danger',
  [APPLICATION_STATUS.CANCELLED]: 'neutral',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
};

export const PAYMENT_STATUS_LABELS = {
  [PAYMENT_STATUS.PENDING]: 'Төленуі керек',
  [PAYMENT_STATUS.PAID]: 'Төленді',
  [PAYMENT_STATUS.OVERDUE]: 'Мерзімі өтті',
  [PAYMENT_STATUS.CANCELLED]: 'Бас тартылды',
};

export const PAYMENT_STATUS_BADGE = {
  [PAYMENT_STATUS.PENDING]: 'warning',
  [PAYMENT_STATUS.PAID]: 'success',
  [PAYMENT_STATUS.OVERDUE]: 'danger',
  [PAYMENT_STATUS.CANCELLED]: 'neutral',
};

export const REQUEST_STATUS = {
  NEW: 'new',
  IN_PROGRESS: 'in_progress',
  WAITING: 'waiting',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
};

export const REQUEST_STATUS_LABELS = {
  [REQUEST_STATUS.NEW]: 'Жаңа',
  [REQUEST_STATUS.IN_PROGRESS]: 'Жұмыста',
  [REQUEST_STATUS.WAITING]: 'Жауап күтуде',
  [REQUEST_STATUS.RESOLVED]: 'Шешілді',
  [REQUEST_STATUS.CLOSED]: 'Жабылды',
};

export const REQUEST_STATUS_BADGE = {
  [REQUEST_STATUS.NEW]: 'info',
  [REQUEST_STATUS.IN_PROGRESS]: 'warning',
  [REQUEST_STATUS.WAITING]: 'primary',
  [REQUEST_STATUS.RESOLVED]: 'success',
  [REQUEST_STATUS.CLOSED]: 'neutral',
};

export const REQUEST_CATEGORY = {
  REPAIR: 'repair',
  CLEANING: 'cleaning',
  SECURITY: 'security',
  DOCUMENTS: 'documents',
  PAYMENT: 'payment',
  OTHER: 'other',
};

export const REQUEST_CATEGORY_LABELS = {
  [REQUEST_CATEGORY.REPAIR]: 'Жөндеу',
  [REQUEST_CATEGORY.CLEANING]: 'Тазалау',
  [REQUEST_CATEGORY.SECURITY]: 'Қауіпсіздік',
  [REQUEST_CATEGORY.DOCUMENTS]: 'Құжаттар',
  [REQUEST_CATEGORY.PAYMENT]: 'Төлем',
  [REQUEST_CATEGORY.OTHER]: 'Басқа',
};

export const REQUEST_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
};

export const REQUEST_PRIORITY_LABELS = {
  [REQUEST_PRIORITY.LOW]: 'Төмен',
  [REQUEST_PRIORITY.MEDIUM]: 'Орташа',
  [REQUEST_PRIORITY.HIGH]: 'Жоғары',
  [REQUEST_PRIORITY.URGENT]: 'Шұғыл',
};

export const NOTIFICATION_TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
};

export const STORAGE_KEYS = {
  USERS: 'users',
  STUDENTS: 'students',
  STAFF: 'staff',
  BUILDINGS: 'buildings',
  FLOORS: 'floors',
  ROOMS: 'rooms',
  BEDS: 'beds',
  APPLICATIONS: 'applications',
  BOOKINGS: 'bookings',
  PAYMENTS: 'payments',
  DEBTS: 'debts',
  REQUESTS: 'requests',
  ANNOUNCEMENTS: 'announcements',
  NOTIFICATIONS: 'notifications',
  DOCUMENTS: 'documents',
  ACTIVITY: 'activity',
  SETTINGS: 'settings',
  SESSION: 'session',
  SEEDED: 'seeded',
};

export const ITEMS_PER_PAGE = 9;
/**
 * ROUTES — Барлық беттер тізімі
 */

export const ROUTES = {
  HOME: 'index.html',
  ROOMS: 'rooms.html',
  ROOM: 'room.html',
  BOOKING: 'booking.html',
  MY_BOOKINGS: 'my-bookings.html',
  REQUESTS: 'requests.html',
  REQUEST_DETAILS: 'request-details.html',
  PAYMENTS: 'payments.html',
  PAYMENT_DETAILS: 'payment-details.html',
  NOTIFICATIONS: 'notifications.html',
  PROFILE: 'profile.html',
  EDIT_PROFILE: 'edit-profile.html',
  DOCUMENTS: 'documents.html',
  SEARCH: 'search.html',
  LOGIN: 'login.html',
  REGISTER: 'register.html',
  FORGOT_PASSWORD: 'forgot-password.html',
  ADMIN: 'admin/index.html',
  STAFF: 'staff/index.html',
};

export const ROLE_HOME = {
  student: ROUTES.HOME,
  staff: ROUTES.STAFF,
  admin: ROUTES.ADMIN,
};
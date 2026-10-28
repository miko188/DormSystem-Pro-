/**
 * Оқиғалар автобусы — модульдер арасындағы байланыс
 */
const listeners = new Map();

export const eventBus = {
  on(event, handler) {
    if (!listeners.has(event)) listeners.set(event, new Set());
    listeners.get(event).add(handler);
    return () => this.off(event, handler);
  },
  off(event, handler) {
    listeners.get(event)?.delete(handler);
  },
  emit(event, data) {
    listeners.get(event)?.forEach(fn => {
      try { fn(data); } catch (e) { console.error(e); }
    });
  },
};

export const EVENTS = {
  DATA_CHANGED: 'data:changed',
  USER_LOGIN: 'user:login',
  USER_LOGOUT: 'user:logout',
  NOTIFICATION_NEW: 'notification:new',
  ROOM_UPDATED: 'room:updated',
};
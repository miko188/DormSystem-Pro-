import { sessionGet, sessionSet, sessionRemove } from '../storage/session-storage.js';
import { eventBus, EVENTS } from '../core/event-bus.js';

const SESSION_KEY = 'current_user';

export const session = {
  get() {
    return sessionGet(SESSION_KEY, null);
  },
  set(user) {
    sessionSet(SESSION_KEY, user);
    eventBus.emit(EVENTS.USER_LOGIN, user);
  },
  clear() {
    sessionRemove(SESSION_KEY);
    eventBus.emit(EVENTS.USER_LOGOUT);
  },
  isLoggedIn() {
    return !!this.get();
  },
  getRole() {
    return this.get()?.role || null;
  },
};
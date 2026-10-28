import { setupLogin } from '../auth/login.js';
import { setupRegister } from '../auth/register.js';
import { setupRooms } from '../pages/rooms.js';
import { setupHome } from '../pages/home.js';
import { currentPath } from './router.js';
import { mountHeader } from '../components/header.js';

const ROUTES = {
  'login.html': setupLogin,
  'register.html': setupRegister,
  'rooms.html': setupRooms,
  'index.html': setupHome,
  '': setupHome,
};

export function initPage() {
  const path = currentPath();
  mountHeader(path);

  const setup = ROUTES[path];
  if (setup) {
    try {
      setup();
    } catch (e) {
      console.error('Page init error:', path, e);
    }
  }
}
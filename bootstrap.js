import { seedIfNeeded } from '../storage/seed-data.js';
import { setupErrorHandler } from './error-handler.js';
import { initPage } from './page-init.js';

export function bootstrap() {
  setupErrorHandler();
  const seeded = seedIfNeeded();
  if (seeded) console.info('[DormSystem] Демо деректер жүктелді');
  initPage();
}
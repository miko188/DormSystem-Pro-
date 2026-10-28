import { logger } from '../utils/logger.js';

export function setupErrorHandler() {
  window.addEventListener('error', (e) => {
    logger.error('Global error:', e.error || e.message);
  });
  window.addEventListener('unhandledrejection', (e) => {
    logger.error('Unhandled promise rejection:', e.reason);
  });
}

export function safeRun(fn, fallback = null) {
  try {
    return fn();
  } catch (e) {
    logger.error(e);
    return fallback;
  }
}
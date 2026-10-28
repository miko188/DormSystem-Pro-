const isDev = true;

export const logger = {
  info: (...args) => isDev && console.info('[DormSystem]', ...args),
  warn: (...args) => isDev && console.warn('[DormSystem]', ...args),
  error: (...args) => isDev && console.error('[DormSystem]', ...args),
};
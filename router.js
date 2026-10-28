/**
 * Ағымдағы бетті анықтау
 */
export function currentPath() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

export function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
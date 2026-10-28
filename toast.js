/**
 * Toast — всплывающие уведомления
 */
let container;

function ensureContainer() {
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

const ICONS = {
  success: '✅',
  danger: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

export function toast(message, type = 'info', duration = 3500) {
  const c = ensureContainer();
  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.innerHTML = `
    <div class="toast__icon">${ICONS[type] || ICONS.info}</div>
    <div class="toast__content">
      <div class="toast__message">${message}</div>
    </div>
  `;
  c.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(30px)';
    setTimeout(() => el.remove(), 300);
  }, duration);
}

export const toastSuccess = (m) => toast(m, 'success');
export const toastError = (m) => toast(m, 'danger');
export const toastWarning = (m) => toast(m, 'warning');
export const toastInfo = (m) => toast(m, 'info');
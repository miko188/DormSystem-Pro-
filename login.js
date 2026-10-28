import { authService } from '../services/auth-service.js';
import { session } from './session-manager.js';
import { ROLE_HOME } from '../config/routes.js';
import { toastSuccess, toastError } from '../components/toast.js';

export function setupLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const user = authService.login(email, password);
      session.set(user);
      toastSuccess(`Қош келдіңіз, ${user.firstName}!`);
      const dest = ROLE_HOME[user.role] || 'index.html';
      setTimeout(() => (window.location.href = dest), 700);
    } catch (err) {
      toastError(err.message);
    }
  });

  // Демо аккаунттармен толтыру
  document.querySelectorAll('[data-demo-email]').forEach(btn => {
    btn.addEventListener('click', () => {
      form.email.value = btn.dataset.demoEmail;
      form.password.value = '123456';
    });
  });
}
import { authService } from '../services/auth-service.js';
import { session } from './session-manager.js';
import { toastSuccess, toastError } from '../components/toast.js';
import { validateField } from '../utils/validators.js';

export function setupRegister() {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      password: form.password.value,
    };

    const errs = [];
    if (!data.firstName) errs.push('Аты міндетті');
    if (!data.lastName) errs.push('Тегі міндетті');
    if (validateField(data.email, { required: true, email: true })) errs.push('Email қате');
    if (data.password.length < 6) errs.push('Құпиясөз кемінде 6 таңба');

    if (errs.length) {
      toastError(errs[0]);
      return;
    }

    try {
      const user = authService.register(data);
      session.set(user);
      toastSuccess('Тіркелу сәтті өтті!');
      setTimeout(() => (window.location.href = 'index.html'), 700);
    } catch (err) {
      toastError(err.message);
    }
  });
}
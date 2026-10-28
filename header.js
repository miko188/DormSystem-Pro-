import { session } from '../auth/session-manager.js';
import { ROUTES } from '../config/routes.js';
import { getInitials } from '../utils/string-utils.js';

export function renderHeader(currentPage = '') {
  const user = session.get();
  const userName = user ? `${user.firstName} ${user.lastName}` : 'Қонақ';
  const initials = user ? getInitials(userName) : '?';

  const navItems = [
    { href: ROUTES.HOME, label: 'Басты бет', icon: '🏠' },
    { href: ROUTES.ROOMS, label: 'Бөлмелер', icon: '🚪' },
    { href: ROUTES.MY_BOOKINGS, label: 'Өтінімдер', icon: '📝' },
    { href: ROUTES.PAYMENTS, label: 'Төлемдер', icon: '💳' },
    { href: ROUTES.REQUESTS, label: 'Өтініштер', icon: '📬' },
  ];

  const navHtml = navItems.map(item => {
    const isActive = currentPage.includes(item.href.replace('.html', ''));
    return `<a href="${item.href}" class="header__link ${isActive ? 'is-active' : ''}">${item.label}</a>`;
  }).join('');

  return `
    <header class="header">
      <div class="container header__inner">
        <a href="${ROUTES.HOME}" class="header__brand">
          <div class="header__logo">D</div>
          <span>DormSystem Pro</span>
        </a>
        <nav class="header__nav">${navHtml}</nav>
        <div class="header__actions">
          <a href="${ROUTES.NOTIFICATIONS}" class="notification-btn" aria-label="Хабарламалар">
            🔔
            <span class="notification-btn__dot"></span>
          </a>
          ${user ? `
            <a href="${ROUTES.PROFILE}" class="btn btn-secondary btn-sm">
              <span class="avatar avatar--sm">${initials}</span>
              ${user.firstName}
            </a>
          ` : `
            <a href="${ROUTES.LOGIN}" class="btn btn-primary btn-sm">Кіру</a>
          `}
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Мәзір">☰</button>
        </div>
      </div>
    </header>
  `;
}

export function mountHeader(currentPage) {
  const existing = document.querySelector('header.header');
  const temp = document.createElement('div');
  temp.innerHTML = renderHeader(currentPage);
  const newHeader = temp.firstElementChild;
  if (existing) existing.replaceWith(newHeader);
  else document.body.prepend(newHeader);

  const btn = document.getElementById('mobileMenuBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.toggle('is-open');
    });
  }
}
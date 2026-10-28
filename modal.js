/**
 * Modal — модальді терезе
 */
export function openModal({ title, body, footer = '', onClose }) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal__header">
        <h3 class="modal__title">${title}</h3>
        <button class="modal__close" aria-label="Жабу">✕</button>
      </div>
      <div class="modal__body">${body}</div>
      ${footer ? `<div class="modal__footer">${footer}</div>` : ''}
    </div>
  `;
  document.body.appendChild(backdrop);

  const close = () => {
    backdrop.remove();
    onClose?.();
  };

  backdrop.querySelector('.modal__close').addEventListener('click', close);
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) close();
  });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') {
      close();
      document.removeEventListener('keydown', esc);
    }
  });

  return { close, element: backdrop };
}

export function confirmDialog(message, onConfirm, onCancel) {
  const { close, element } = openModal({
    title: 'Растау',
    body: `<p>${message}</p>`,
    footer: `
      <button class="btn btn-secondary" data-action="cancel">Болдырмау</button>
      <button class="btn btn-danger" data-action="confirm">Растау</button>
    `,
  });
  element.querySelector('[data-action="cancel"]').addEventListener('click', () => {
    close();
    onCancel?.();
  });
  element.querySelector('[data-action="confirm"]').addEventListener('click', () => {
    close();
    onConfirm?.();
  });
}
import { $, $$ } from '../utils/dom.js';

/**
 * Универсалды кесте: сорттау + пагинация
 */
export function setupTable({ tableEl, rows, perPage = 10, renderRow, columns }) {
  let currentPage = 1;
  let sortKey = null;
  let sortDir = 'asc';

  function sortRows(arr) {
    if (!sortKey) return arr;
    return [...arr].sort((a, b) => {
      const A = a[sortKey], B = b[sortKey];
      if (A < B) return sortDir === 'asc' ? -1 : 1;
      if (A > B) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  function render() {
    const tbody = tableEl.querySelector('tbody');
    const sorted = sortRows(rows);
    const total = sorted.length;
    const start = (currentPage - 1) * perPage;
    const pageRows = sorted.slice(start, start + perPage);

    tbody.innerHTML = pageRows.map(renderRow).join('') || `
      <tr><td colspan="${columns}" style="text-align:center;padding:40px;color:var(--color-text-muted)">
        Деректер жоқ
      </td></tr>
    `;

    renderPagination(total);
  }

  function renderPagination(total) {
    const pages = Math.ceil(total / perPage);
    const pag = tableEl.parentElement.querySelector('.pagination__pages');
    if (!pag) return;
    let html = '';
    for (let i = 1; i <= pages; i++) {
      html += `<button class="pagination__btn ${i === currentPage ? 'is-active' : ''}" data-page="${i}">${i}</button>`;
    }
    pag.innerHTML = html;
    $$('.pagination__btn', pag).forEach(b => {
      b.addEventListener('click', () => {
        currentPage = Number(b.dataset.page);
        render();
      });
    });
    const info = tableEl.parentElement.querySelector('.pagination__info');
    if (info) {
      info.textContent = `Барлығы: ${total} · Бет ${currentPage}/${pages || 1}`;
    }
  }

  // Сорттау
  $$('th.sortable', tableEl).forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.key;
      if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      else { sortKey = key; sortDir = 'asc'; }
      $$('th.sortable', tableEl).forEach(x => x.classList.remove('is-sorted-asc', 'is-sorted-desc'));
      th.classList.add(sortDir === 'asc' ? 'is-sorted-asc' : 'is-sorted-desc');
      render();
    });
  });

  render();
  return { render, setRows(newRows) { rows = newRows; currentPage = 1; render(); } };
}
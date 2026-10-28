import { roomService } from '../services/room-service.js';
import { ROOM_STATUS_LABELS, ROOM_STATUS_BADGE, ROOM_STATUS } from '../config/constants.js';
import { formatKzt } from '../utils/currency-utils.js';
import { $$, $ } from '../utils/dom.js';

export function setupRooms() {
  const grid = document.getElementById('roomsGrid');
  if (!grid) return;

  const searchInput = document.getElementById('searchInput');
  const buildingFilter = document.getElementById('buildingFilter');
  const statusFilter = document.getElementById('statusFilter');
  const capacityFilter = document.getElementById('capacityFilter');
  const resetBtn = document.getElementById('resetFilters');
  const countEl = document.getElementById('roomsCount');

  function render() {
    const rooms = roomService.filter({
      search: searchInput?.value || '',
      buildingId: buildingFilter?.value || '',
      status: statusFilter?.value || '',
      capacity: capacityFilter?.value || '',
    });

    if (countEl) countEl.textContent = `${rooms.length} бөлме табылды`;

    if (!rooms.length) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-state__icon">🔍</div>
          <h3 class="empty-state__title">Бөлме табылмады</h3>
          <p class="empty-state__text">Фильтрлерді өзгертіп көріңіз</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = rooms.map(room => `
      <div class="room-card" onclick="location.href='room.html?id=${room.id}'">
        <div class="room-card__image">
          🚪
          <span class="room-card__badge">
            <span class="badge badge--${ROOM_STATUS_BADGE[room.status]}">
              ${ROOM_STATUS_LABELS[room.status]}
            </span>
          </span>
        </div>
        <div class="room-card__body">
          <h3 class="room-card__title">№${room.number} бөлме</h3>
          <div class="room-card__meta">
            <span class="room-card__meta-item">🏢 ${room.buildingName}</span>
            <span class="room-card__meta-item">📐 ${room.floorNumber}-қабат</span>
          </div>
          <div class="room-card__meta">
            <span class="room-card__meta-item">👥 ${room.occupied}/${room.capacity} орын</span>
            <span class="room-card__meta-item">📏 ${room.area} м²</span>
          </div>
          <div class="room-card__footer">
            <div class="room-card__price">${formatKzt(room.price)}<span>/ай</span></div>
            <a href="room.html?id=${room.id}" class="btn btn-primary btn-sm">Толығырақ →</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  searchInput?.addEventListener('input', render);
  buildingFilter?.addEventListener('change', render);
  statusFilter?.addEventListener('change', render);
  capacityFilter?.addEventListener('change', render);
  resetBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (buildingFilter) buildingFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    if (capacityFilter) capacityFilter.value = '';
    render();
  });

  render();
}
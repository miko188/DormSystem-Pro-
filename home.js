import { roomService } from '../services/room-service.js';
import { applicationService } from '../services/application-service.js';
import { announcementService } from '../services/announcement-service.js';
import { relativeTime } from '../utils/date-utils.js';

export function setupHome() {
  // Статистиканы толтыру
  const stats = roomService.stats();
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setText('statRooms', stats.total);
  setText('statFreeBeds', stats.freeBeds);
  setText('statOccupied', stats.totalBeds - stats.freeBeds);
  setText('statApplications', applicationService.all().filter(a => a.status !== 'approved' && a.status !== 'rejected').length);

  // Жаңалықтар
  const news = document.getElementById('newsGrid');
  if (news) {
    const latest = announcementService.latest(3);
    news.innerHTML = latest.map(a => `
      <article class="card card-hover">
        <div style="display:flex;gap:12px;align-items:start;">
          <div style="width:44px;height:44px;border-radius:10px;background:var(--color-primary-light);color:var(--color-primary);display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0;">📢</div>
          <div>
            <h3 style="font-size:1rem;margin-bottom:8px;">${a.title}</h3>
            <p class="text-sm text-secondary">${a.text}</p>
            <span class="text-xs text-muted" style="display:block;margin-top:8px;">${relativeTime(a.createdAt)}</span>
          </div>
        </div>
      </article>
    `).join('');
  }
}
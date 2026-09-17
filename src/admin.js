import { PORTFOLIO_ITEMS, HERO_VIDEOS, EXHIBITIONS, MONOGRAPHS } from './data/portfolio.js';

const DEFAULT_WEDDING_FILMS = [
  {
    id: "film-niharika",
    title: "Niharika's Lakshmi Devi Vratham",
    location: "Sacred Kalasham Pooja & Blessings",
    duration: "410K Views • Full HD Cinema",
    videoUrl: "./videos/hero-wedding.mp4",
    poster: "./images/niharika/main-shrine-couple.jpg",
    stills: ["./images/niharika/lotus-portrait.jpg", "./images/niharika/pooja-lighting.jpg", "./images/niharika/doorway-portrait.jpg"],
    reviewQuote: "Timemachine & Co captured our sacred Lakshmi Devi Vratham ceremony with incredible warmth and reverence."
  },
  {
    id: "film-maitri-aneesh",
    title: "Maitri & Aneesh",
    location: "Lake Como • Italy",
    duration: "04:15 • 4K Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4",
    poster: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Coastal estate processional film featuring sunset boat entrance over Lake Como."
  },
  {
    id: "film-dhruv-pippa",
    title: "Dhruv & Pippa",
    location: "St. Moritz • Switzerland",
    duration: "05:40 • 8K RAW Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-clouds-over-a-mountain-range-42894-large.mp4",
    poster: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Highland solitude vows surrounded by snowcapped Swiss alpine peaks."
  },
  {
    id: "film-palak-priya",
    title: "Palak & Priya",
    location: "Amalfi Coast • Italy",
    duration: "03:50 • 4K Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fog-over-a-forest-in-a-mountainous-region-42898-large.mp4",
    poster: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Rose petal shower celebration along Villa Cimbrone cliffside in Ravello."
  },
  {
    id: "film-ira-sameer",
    title: "Ira & Sameer",
    location: "Kyoto • Japan",
    duration: "04:30 • 4K Cinema",
    videoUrl: "./videos/hero-wedding.mp4",
    poster: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Serene bamboo grove sanctuary ceremony in historic Kyoto."
  },
  {
    id: "film-rohan-ananya",
    title: "Rohan & Ananya",
    location: "Santorini • Greece",
    duration: "06:10 • 4K 120fps Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Volcanic caldera cliffside sunset vows with intimate dinner reception."
  }
];

// Global state for Admin Panel Content
let activeContent = {
  hero: {
    headline: 'Timemachine & Co',
    subtitle: 'timeless cinematic wedding stories',
    videos: [
      { title: 'Primary Hero Video', videoUrl: './videos/hero-wedding.mp4', poster: './images/niharika/main-shrine-couple.jpg' },
      { title: 'Lake Como Highlight', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4', poster: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800' }
    ]
  },
  about: {
    tag: 'OUR JOURNEY & STORY',
    title: 'Capturing Love, Joy & Everything In Between',
    paragraphs: [
      "When we started Timemachine & Co, it was more than just about clicking pictures—it was about capturing love, joy, and everything in between. Our shared passion for cinema, art, and visual storytelling brought us together, and the rest, as they say, is history.",
      "Our journey has been nothing short of magical. Inspired by travel, fine art photography, and our love for experimenting with light, we've crafted a unique style—a mix of candid moments, editorial aesthetics, and fashion vibes. It's not just photography for us; it's weaving stories that couples cherish forever.",
      "From being part of 600+ destination weddings to earning titles like 'Wedding Photographer and Filmmaker of the Year,' this adventure has been surreal. And with over 23 million views on our wedding films, we're reminded daily of the love we've been blessed to capture."
    ],
    collageImages: [
      './images/niharika/lotus-portrait.jpg',
      './images/niharika/pooja-lighting.jpg',
      './images/niharika/bridal-braid.jpg',
      './images/niharika/preparation.jpg'
    ]
  },
  weddingFilms: [...DEFAULT_WEDDING_FILMS],
  portfolio: [...PORTFOLIO_ITEMS]
};

// ==========================================================================
// 1. AUTHENTICATION GATING
// ==========================================================================
function initAdminAuth() {
  const overlay = document.getElementById('admin-auth-overlay');
  const loginForm = document.getElementById('admin-login-form');
  const passInput = document.getElementById('admin-passcode');
  const logoutBtn = document.getElementById('admin-logout-btn');

  const isAuth = localStorage.getItem('studio_admin_auth') === 'true';
  if (isAuth && overlay) {
    overlay.style.display = 'none';
    loadLeads();
    loadContent();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = passInput.value.trim();
      if (!password) return;

      try {
        const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
          ? 'http://localhost:5000/api/admin/login'
          : '/api/admin/login';

        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          localStorage.setItem('studio_admin_auth', 'true');
          if (overlay) overlay.style.display = 'none';
          showToast('Access granted. Welcome to Studio Admin.');
          loadLeads();
          loadContent();
        } else {
          alert('Access Denied: ' + (data.error || 'Incorrect admin passcode.'));
          passInput.focus();
        }
      } catch (err) {
        // Fallback offline verification if backend server isn't active
        if (password === 'admin2026') {
          localStorage.setItem('studio_admin_auth', 'true');
          if (overlay) overlay.style.display = 'none';
          showToast('Offline Mode: Admin unlocked.');
          loadLeads();
          loadContent();
        } else {
          alert('Access Denied: Incorrect admin passcode.');
        }
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('studio_admin_auth');
      if (overlay) overlay.style.display = 'flex';
      showToast('Signed out of Studio Portal.');
    });
  }
}

// ==========================================================================
// 2. TAB NAVIGATION
// ==========================================================================
function initAdminTabs() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabPanels = document.querySelectorAll('.admin-panel-section');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// ==========================================================================
// 3. LEADS & QUOTES LOAD
// ==========================================================================
async function loadLeads() {
  const tbody = document.getElementById('leads-table-body');
  const badge = document.getElementById('leads-count-badge');
  if (!tbody) return;

  try {
    const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000/api/quotes'
      : '/api/quotes';

    const res = await fetch(apiUrl);
    const data = await res.json();

    if (res.ok && data.success && Array.isArray(data.data)) {
      const quotes = data.data;
      if (badge) badge.textContent = quotes.length;

      if (quotes.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align: center; padding: 2.5rem; color: var(--color-body-muted);">
              No quote requests submitted yet.
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = quotes.map(q => {
        const dateStr = q.createdAt ? new Date(q.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
        const eventsList = (q.events || []).map(e => `
          <div style="font-size: 0.82rem; margin-bottom: 0.35rem; border-left: 2px solid var(--color-sage-border); padding-left: 0.5rem;">
            <strong>${e.name}</strong> • ${e.date || '-'} • ${e.time || '-'} • ${e.location || 'Location tbd'} (${e.guests || '-'} guests)
          </div>
        `).join('');

        return `
          <tr>
            <td style="font-weight: 500; font-family: var(--font-ui); font-size: 0.8rem;">${dateStr}</td>
            <td style="font-weight: 600; color: var(--color-heading);">${q.clientName}</td>
            <td><strong>Groom:</strong> ${q.groomName}<br><strong>Bride:</strong> ${q.brideName}</td>
            <td><a href="tel:${q.countryCode}${q.phone}" style="color: var(--color-heading); text-decoration: underline;">${q.countryCode} ${q.phone}</a></td>
            <td>${eventsList || 'No events listed'}</td>
          </tr>
        `;
      }).join('');
    }
  } catch (err) {
    console.warn('Unable to fetch quotes from server:', err);
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; padding: 2.5rem; color: var(--color-body-muted);">
            Local server on port 5000 is not running. Please start server via "npm run server" to view live leads.
          </td>
        </tr>
      `;
    }
  }
}

// ==========================================================================
// 4. LOAD SITE CONTENT (FROM MONGODB OR DEFAULTS)
// ==========================================================================
async function loadContent() {
  try {
    const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000/api/content'
      : '/api/content';

    const res = await fetch(apiUrl);
    const data = await res.json();

    if (res.ok && data.success && data.data) {
      const c = data.data;
      if (c.hero) activeContent.hero = c.hero;
      if (c.about) activeContent.about = c.about;
      if (Array.isArray(c.weddingFilms) && c.weddingFilms.length) activeContent.weddingFilms = c.weddingFilms;
      if (Array.isArray(c.portfolio) && c.portfolio.length) activeContent.portfolio = c.portfolio;
    }
  } catch (err) {
    console.warn('Using default fallback content:', err);
  }

  populateAdminForms();
}

// ==========================================================================
// 5. POPULATE ADMIN FORMS & LISTS
// ==========================================================================
function populateAdminForms() {
  // Hero
  const headlineInput = document.getElementById('hero-headline-input');
  const subtitleInput = document.getElementById('hero-subtitle-input');
  const v1Input = document.getElementById('hero-video-1');
  const v2Input = document.getElementById('hero-video-2');

  if (headlineInput) headlineInput.value = activeContent.hero.headline || '';
  if (subtitleInput) subtitleInput.value = activeContent.hero.subtitle || '';
  if (v1Input && activeContent.hero.videos?.[0]) v1Input.value = activeContent.hero.videos[0].videoUrl || '';
  if (v2Input && activeContent.hero.videos?.[1]) v2Input.value = activeContent.hero.videos[1].videoUrl || '';

  // About
  const tagInput = document.getElementById('about-tag-input');
  const titleInput = document.getElementById('about-title-input');
  const p1Input = document.getElementById('about-p1-input');
  const p2Input = document.getElementById('about-p2-input');
  const p3Input = document.getElementById('about-p3-input');
  const img1Input = document.getElementById('about-img-1');
  const img2Input = document.getElementById('about-img-2');
  const img3Input = document.getElementById('about-img-3');
  const img4Input = document.getElementById('about-img-4');

  if (tagInput) tagInput.value = activeContent.about.tag || '';
  if (titleInput) titleInput.value = activeContent.about.title || '';
  if (p1Input) p1Input.value = activeContent.about.paragraphs?.[0] || '';
  if (p2Input) p2Input.value = activeContent.about.paragraphs?.[1] || '';
  if (p3Input) p3Input.value = activeContent.about.paragraphs?.[2] || '';
  if (img1Input) img1Input.value = activeContent.about.collageImages?.[0] || '';
  if (img2Input) img2Input.value = activeContent.about.collageImages?.[1] || '';
  if (img3Input) img3Input.value = activeContent.about.collageImages?.[2] || '';
  if (img4Input) img4Input.value = activeContent.about.collageImages?.[3] || '';

  // Update Hero video preview sources
  const v1Prev = document.getElementById('hero-video-1-preview');
  const v2Prev = document.getElementById('hero-video-2-preview');
  if (v1Prev && v1Input?.value) v1Prev.src = v1Input.value;
  if (v2Prev && v2Input?.value) v2Prev.src = v2Input.value;

  // Update About collage image preview sources
  for (let i = 1; i <= 4; i++) {
    const inp = document.getElementById(`about-img-${i}`);
    const prv = document.getElementById(`about-img-${i}-preview`);
    if (inp && prv && inp.value) prv.src = inp.value;
  }

  // Wedding Films
  renderFilmsManager();

  // Portfolio
  renderPortfolioManager();

  // Attach live input listeners
  initLiveMediaPreviewListeners();
}

function initLiveMediaPreviewListeners() {
  const hv1 = document.getElementById('hero-video-1');
  const hv2 = document.getElementById('hero-video-2');
  if (hv1) {
    hv1.addEventListener('input', (e) => {
      const v = document.getElementById('hero-video-1-preview');
      if (v) v.src = e.target.value.trim();
    });
  }
  if (hv2) {
    hv2.addEventListener('input', (e) => {
      const v = document.getElementById('hero-video-2-preview');
      if (v) v.src = e.target.value.trim();
    });
  }

  for (let i = 1; i <= 4; i++) {
    const input = document.getElementById(`about-img-${i}`);
    if (input) {
      input.addEventListener('input', (e) => {
        const img = document.getElementById(`about-img-${i}-preview`);
        if (img) img.src = e.target.value.trim();
      });
    }
  }
}

function renderFilmsManager() {
  const container = document.getElementById('films-list-container');
  if (!container) return;

  container.innerHTML = activeContent.weddingFilms.map((film, idx) => `
    <div class="admin-item-box" data-film-index="${idx}">
      <div class="admin-item-header">
        <div style="display:flex; align-items:center; gap: 1rem;">
          <div class="admin-media-preview-box" style="width: 90px; height: 60px;">
            <img class="film-thumb-preview-${idx}" src="${film.poster || './images/niharika/main-shrine-couple.jpg'}" alt="${film.title || 'Film Poster'}" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">
            <span class="admin-thumb-badge">FILM</span>
          </div>
          <div>
            <h4 class="admin-item-title" style="margin:0; font-size: 1.15rem;">${film.title || 'Untitled Film'}</h4>
            <span style="font-size: 0.8rem; color: var(--color-body-muted);">${film.location || 'Destination Film'}</span>
          </div>
        </div>
        <button type="button" class="admin-btn-delete delete-film-btn" data-index="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Delete Film
        </button>
      </div>

      <div class="admin-form-grid">
        <div class="admin-form-group">
          <label class="admin-label">Couple / Title</label>
          <input type="text" class="admin-input film-title" value="${film.title || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Location / Venue</label>
          <input type="text" class="admin-input film-location" value="${film.location || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Film Duration & Quality</label>
          <input type="text" class="admin-input film-duration" value="${film.duration || '04:15 • 4K Cinema'}">
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Video URL (.mp4 file link)</label>
          <input type="text" class="admin-input film-videourl" value="${film.videoUrl || ''}">
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Cover Poster Image URL</label>
          <div class="admin-thumb-row">
            <div class="admin-media-preview-box">
              <img class="film-poster-preview-${idx}" src="${film.poster || './images/niharika/main-shrine-couple.jpg'}" alt="Poster Preview" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">
              <span class="admin-thumb-badge">POSTER</span>
            </div>
            <input type="text" class="admin-input film-poster" data-preview-target="film-poster-preview-${idx}" value="${film.poster || ''}">
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Stills Gallery Image URLs (comma separated)</label>
          <input type="text" class="admin-input film-stills" value="${(film.stills || []).join(', ')}">
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Client Review Quote</label>
          <textarea class="admin-textarea film-review">${film.reviewQuote || ''}</textarea>
        </div>
      </div>
    </div>
  `).join('');

  // Live Poster Input Listeners
  container.querySelectorAll('.film-poster').forEach(input => {
    input.addEventListener('input', (e) => {
      const targetClass = e.target.getAttribute('data-preview-target');
      const img = container.querySelector('.' + targetClass);
      if (img) img.src = e.target.value.trim();
    });
  });

  container.querySelectorAll('.delete-film-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (confirm('Are you sure you want to remove this film from your archive?')) {
        activeContent.weddingFilms.splice(idx, 1);
        renderFilmsManager();
      }
    });
  });
}

function renderPortfolioManager() {
  const container = document.getElementById('portfolio-list-container');
  if (!container) return;

  container.innerHTML = activeContent.portfolio.map((item, idx) => `
    <div class="admin-item-box" data-port-index="${idx}">
      <div class="admin-item-header">
        <div style="display:flex; align-items:center; gap: 1rem;">
          <div class="admin-media-preview-box" style="width: 75px; height: 75px;">
            <img class="port-header-preview-${idx}" src="${item.image || './images/niharika/lotus-portrait.jpg'}" alt="${item.title || 'Still'}" onerror="this.src='./images/niharika/lotus-portrait.jpg'">
            <span class="admin-thumb-badge">${(item.category || 'STILL').toUpperCase()}</span>
          </div>
          <div>
            <h4 class="admin-item-title" style="margin:0; font-size: 1.1rem;">${item.title || 'Untitled Still'}</h4>
            <span style="font-size: 0.8rem; color: var(--color-body-muted);">${item.location || 'Portfolio Gallery Image'}</span>
          </div>
        </div>
        <button type="button" class="admin-btn-delete delete-port-btn" data-index="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Delete Item
        </button>
      </div>

      <div class="admin-form-grid">
        <div class="admin-form-group">
          <label class="admin-label">Title</label>
          <input type="text" class="admin-input port-title" value="${item.title || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Category Filter</label>
          <select class="admin-select port-category">
            <option value="stories" ${item.category === 'stories' || item.category === 'wedding' ? 'selected' : ''}>Wedding Stories</option>
            <option value="films" ${item.category === 'films' ? 'selected' : ''}>Wedding Films</option>
            <option value="couple" ${item.category === 'couple' ? 'selected' : ''}>Couple Shoot</option>
            <option value="editorial" ${item.category === 'editorial' ? 'selected' : ''}>Editorial Fine Art</option>
          </select>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Aspect Ratio</label>
          <select class="admin-select port-aspect">
            <option value="4/5" ${item.aspectRatio === '4/5' ? 'selected' : ''}>Portrait (4/5)</option>
            <option value="16/9" ${item.aspectRatio === '16/9' ? 'selected' : ''}>Landscape (16/9)</option>
            <option value="1/1" ${item.aspectRatio === '1/1' ? 'selected' : ''}>Square (1/1)</option>
          </select>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Image URL</label>
          <div class="admin-thumb-row">
            <div class="admin-media-preview-box">
              <img class="port-img-preview-${idx}" src="${item.image || './images/niharika/lotus-portrait.jpg'}" alt="Preview" onerror="this.src='./images/niharika/lotus-portrait.jpg'">
              <span class="admin-thumb-badge">IMAGE</span>
            </div>
            <input type="text" class="admin-input port-image" data-preview-header="port-header-preview-${idx}" data-preview-target="port-img-preview-${idx}" value="${item.image || ''}">
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Video URL (Optional Motion Still)</label>
          <input type="text" class="admin-input port-videourl" value="${item.videoUrl || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">EXIF Camera</label>
          <input type="text" class="admin-input port-camera" value="${item.exif?.camera || 'Leica M11'}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">EXIF Lens</label>
          <input type="text" class="admin-input port-lens" value="${item.exif?.lens || 'Noctilux-M 50mm f/0.95'}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Aperture</label>
          <input type="text" class="admin-input port-aperture" value="${item.exif?.aperture || 'f/1.2'}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Focal Length</label>
          <input type="text" class="admin-input port-focal" value="${item.exif?.focal || '50mm'}">
        </div>
      </div>
    </div>
  `).join('');

  // Live Image Input Listeners
  container.querySelectorAll('.port-image').forEach(input => {
    input.addEventListener('input', (e) => {
      const targetClass = e.target.getAttribute('data-preview-target');
      const headerClass = e.target.getAttribute('data-preview-header');
      const val = e.target.value.trim();
      const img1 = container.querySelector('.' + targetClass);
      const img2 = container.querySelector('.' + headerClass);
      if (img1) img1.src = val;
      if (img2) img2.src = val;
    });
  });

  container.querySelectorAll('.delete-port-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (confirm('Are you sure you want to remove this item from your portfolio?')) {
        activeContent.portfolio.splice(idx, 1);
        renderPortfolioManager();
      }
    });
  });
}

// ==========================================================================
// 6. SAVE ALL CONTENT TO MONGODB ATLAS
// ==========================================================================
function initSaveContent() {
  const saveBtn = document.getElementById('admin-save-all-btn');
  const refreshLeadsBtn = document.getElementById('refresh-leads-btn');
  const addFilmBtn = document.getElementById('add-film-btn');
  const addPortBtn = document.getElementById('add-portfolio-btn');

  if (refreshLeadsBtn) {
    refreshLeadsBtn.addEventListener('click', loadLeads);
  }

  if (addFilmBtn) {
    addFilmBtn.addEventListener('click', () => {
      activeContent.weddingFilms.unshift({
        id: 'film-' + Date.now(),
        title: 'New Couple Title',
        location: 'Lake Como, Italy',
        venue: 'Villa d\'Este',
        duration: '04:15 • 4K Cinema',
        videoUrl: './videos/hero-wedding.mp4',
        poster: './images/niharika/main-shrine-couple.jpg',
        stills: ['./images/niharika/lotus-portrait.jpg', './images/niharika/doorway-portrait.jpg'],
        reviewQuote: 'Working with Timemachine & Co was an absolute dream experience.',
        reviewAuthor: '— Bride & Groom'
      });
      renderFilmsManager();
    });
  }

  if (addPortBtn) {
    addPortBtn.addEventListener('click', () => {
      activeContent.portfolio.unshift({
        id: 'work-' + Date.now(),
        title: 'New Ceremony Still',
        subtitle: 'Lake Como',
        category: 'stories',
        aspectRatio: '4/5',
        image: './images/niharika/lotus-portrait.jpg',
        location: 'Lake Como, Italy',
        exif: { camera: 'Leica M11', lens: 'Noctilux 50mm', aperture: 'f/1.2', focal: '50mm', shutter: '1/2000s', iso: 'ISO 100', format: 'Digital RAW' }
      });
      renderPortfolioManager();
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
      // Gather Hero
      activeContent.hero.headline = document.getElementById('hero-headline-input')?.value || 'Timemachine & Co';
      activeContent.hero.subtitle = document.getElementById('hero-subtitle-input')?.value || '';
      activeContent.hero.videos = [
        { title: 'Primary Hero', videoUrl: document.getElementById('hero-video-1')?.value || './videos/hero-wedding.mp4' },
        { title: 'Lake Como Highlight', videoUrl: document.getElementById('hero-video-2')?.value || './videos/hero-wedding.mp4' }
      ];

      // Gather About
      activeContent.about.tag = document.getElementById('about-tag-input')?.value || '';
      activeContent.about.title = document.getElementById('about-title-input')?.value || '';
      activeContent.about.paragraphs = [
        document.getElementById('about-p1-input')?.value || '',
        document.getElementById('about-p2-input')?.value || '',
        document.getElementById('about-p3-input')?.value || ''
      ];
      activeContent.about.collageImages = [
        document.getElementById('about-img-1')?.value || '',
        document.getElementById('about-img-2')?.value || '',
        document.getElementById('about-img-3')?.value || '',
        document.getElementById('about-img-4')?.value || ''
      ];

      // Gather Films
      const filmBoxes = document.querySelectorAll('#films-list-container .admin-item-box');
      filmBoxes.forEach((box, idx) => {
        if (activeContent.weddingFilms[idx]) {
          activeContent.weddingFilms[idx].title = box.querySelector('.film-title')?.value || '';
          activeContent.weddingFilms[idx].location = box.querySelector('.film-location')?.value || '';
          activeContent.weddingFilms[idx].duration = box.querySelector('.film-duration')?.value || '';
          activeContent.weddingFilms[idx].videoUrl = box.querySelector('.film-videourl')?.value || '';
          activeContent.weddingFilms[idx].poster = box.querySelector('.film-poster')?.value || '';
          activeContent.weddingFilms[idx].reviewQuote = box.querySelector('.film-review')?.value || '';
          const stillsStr = box.querySelector('.film-stills')?.value || '';
          activeContent.weddingFilms[idx].stills = stillsStr.split(',').map(s => s.trim()).filter(Boolean);
        }
      });

      // Gather Portfolio
      const portBoxes = document.querySelectorAll('#portfolio-list-container .admin-item-box');
      portBoxes.forEach((box, idx) => {
        if (activeContent.portfolio[idx]) {
          activeContent.portfolio[idx].title = box.querySelector('.port-title')?.value || '';
          activeContent.portfolio[idx].category = box.querySelector('.port-category')?.value || 'stories';
          activeContent.portfolio[idx].aspectRatio = box.querySelector('.port-aspect')?.value || '4/5';
          activeContent.portfolio[idx].image = box.querySelector('.port-image')?.value || '';
          activeContent.portfolio[idx].videoUrl = box.querySelector('.port-videourl')?.value || '';
          
          if (!activeContent.portfolio[idx].exif) activeContent.portfolio[idx].exif = {};
          activeContent.portfolio[idx].exif.camera = box.querySelector('.port-camera')?.value || 'Leica M11';
          activeContent.portfolio[idx].exif.lens = box.querySelector('.port-lens')?.value || 'Noctilux-M 50mm';
          activeContent.portfolio[idx].exif.aperture = box.querySelector('.port-aperture')?.value || 'f/1.2';
          activeContent.portfolio[idx].exif.focal = box.querySelector('.port-focal')?.value || '50mm';
        }
      });

      // Save via API
      saveBtn.disabled = true;
      saveBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        Saving to MongoDB...
      `;

      try {
        const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
          ? 'http://localhost:5000/api/content'
          : '/api/content';

        const res = await fetch(apiUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(activeContent)
        });

        const data = await res.json();
        if (res.ok && data.success) {
          showToast('Website content saved successfully to MongoDB Atlas!');
        } else {
          alert('Save warning: ' + (data.error || 'Server did not acknowledge save.'));
        }
      } catch (err) {
        console.error('Error saving content:', err);
        showToast('Saved locally in browser memory.');
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
          Save All Content Changes
        `;
      }
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  const toastText = document.getElementById('admin-toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Init Admin App
document.addEventListener('DOMContentLoaded', () => {
  initAdminAuth();
  initAdminTabs();
  initSaveContent();
});

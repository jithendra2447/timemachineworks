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
  foundersStory: {
    title: 'Celebrating Love with Every Frame',
    foundersImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=85&w=800',
    paragraphs: [
      "When we started Timemachine & Co, it was more than just about clicking pictures—it was about capturing love, joy, and everything in between. Our shared passion for cinema, art, and visual storytelling brought us together, and the rest, as they say, is history.",
      "Our journey has been nothing short of magical. Inspired by travel, fine art photography, and our love for experimenting with light, we've crafted a unique style—a mix of candid moments, editorial aesthetics, and fashion vibes. It's not just photography for us; it's weaving stories that couples cherish forever.",
      "From being part of 600+ destination weddings to earning titles like 'Wedding Photographer and Filmmaker of the Year,' this adventure has been surreal. And with over 23 million views on our wedding films, we're reminded daily of the love we've been blessed to capture."
    ]
  },
  footer: {
    brandName: 'Timemachine & Co',
    tagline: 'Timeless Cinematic Wedding Stories & Fine Art Archive.',
    locations: 'Zürich • Lake Como • Ravello • New York',
    quoteTitle: 'COMMISSION & PRICING',
    quoteDesc: 'Request a custom proposal tailored to your celebration dates and destination.',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me'
  },
  weddingFilms: [...DEFAULT_WEDDING_FILMS],
  portfolio: [...PORTFOLIO_ITEMS]
};

// Undo History Stack & Recent Media State
let historyStack = [];
let recentMedia = JSON.parse(localStorage.getItem('studio_recent_media') || '[]');

if (recentMedia.length === 0) {
  recentMedia = [
    { url: './images/niharika/main-shrine-couple.jpg', type: 'image', timestamp: Date.now() - 50000 },
    { url: './images/niharika/lotus-portrait.jpg', type: 'image', timestamp: Date.now() - 40000 },
    { url: './images/niharika/pooja-lighting.jpg', type: 'image', timestamp: Date.now() - 30000 },
    { url: './images/niharika/bridal-braid.jpg', type: 'image', timestamp: Date.now() - 20000 },
    { url: './images/niharika/preparation.jpg', type: 'image', timestamp: Date.now() - 10000 },
    { url: './videos/hero-wedding.mp4', type: 'video', timestamp: Date.now() }
  ];
  try {
    localStorage.setItem('studio_recent_media', JSON.stringify(recentMedia));
  } catch (e) {}
}

function pushHistorySnapshot() {
  if (historyStack.length >= 30) {
    historyStack.shift();
  }
  historyStack.push(JSON.parse(JSON.stringify(activeContent)));
  updateUndoButtonState();
}

function updateUndoButtonState() {
  const undoBtn = document.getElementById('admin-undo-btn');
  const countEl = document.getElementById('undo-count');
  if (countEl) countEl.textContent = historyStack.length;
  if (undoBtn) {
    undoBtn.disabled = historyStack.length === 0;
  }
}

function handleUndo() {
  if (historyStack.length === 0) return;
  const prevSnapshot = historyStack.pop();
  activeContent = prevSnapshot;
  populateAdminForms();
  localStorage.setItem('studio_content_cache', JSON.stringify(activeContent));
  updateUndoButtonState();
  showToast('Restored previous version snapshot!');
}

function addRecentMedia(url, type = 'image') {
  if (!url || typeof url !== 'string') return;
  url = url.trim();
  if (!url) return;

  recentMedia = recentMedia.filter(m => m.url !== url);
  recentMedia.unshift({ url, type, timestamp: Date.now() });

  if (recentMedia.length > 50) {
    recentMedia = recentMedia.slice(0, 50);
  }

  try {
    localStorage.setItem('studio_recent_media', JSON.stringify(recentMedia));
  } catch (e) {
    console.warn('LocalStorage limit reached for recent media:', e);
  }

  renderMediaModalGrid();
  renderInputMediaChips();
}

function renderInputMediaChips() {
  const thumbRows = document.querySelectorAll('.admin-thumb-row');
  
  thumbRows.forEach(row => {
    const input = row.querySelector('.admin-input');
    if (!input) return;

    let chipsContainer = row.nextElementSibling;
    if (!chipsContainer || !chipsContainer.classList.contains('recent-media-chips')) {
      chipsContainer = document.createElement('div');
      chipsContainer.className = 'recent-media-chips';
      chipsContainer.style.cssText = 'display: flex; gap: 0.4rem; margin-top: 0.5rem; align-items: center; flex-wrap: wrap;';
      row.parentNode.insertBefore(chipsContainer, row.nextSibling);
    }

    const itemsToShow = recentMedia.slice(0, 6);
    if (itemsToShow.length === 0) {
      chipsContainer.innerHTML = '';
      return;
    }

    chipsContainer.innerHTML = `
      <span style="font-size: 0.72rem; color: var(--color-body-muted); font-family: var(--font-ui); font-weight: 500;">Recent:</span>
      ` + itemsToShow.map(item => {
        const isVideo = item.type === 'video' || item.url.match(/\.(mp4|webm|mov)$/i);
        return `
          <div class="recent-media-chip" title="Click to reuse this previous image/video" data-url="${item.url}" style="width: 36px; height: 36px; border-radius: 6px; overflow: hidden; border: 1px solid var(--color-border-light); cursor: pointer; flex-shrink: 0; background: #1A1816; position: relative;">
            ${isVideo
              ? `<video src="${item.url}" muted style="width:100%; height:100%; object-fit:cover; pointer-events:none;"></video>`
              : `<img src="${item.url}" alt="Recent" style="width:100%; height:100%; object-fit:cover; pointer-events:none;" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">`
            }
          </div>
        `;
      }).join('');

    chipsContainer.querySelectorAll('.recent-media-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const url = chip.getAttribute('data-url');
        if (url && input) {
          pushHistorySnapshot();
          input.value = url;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          showToast('Selected previous picture/video!');
        }
      });
    });
  });
}

function initMediaModal() {
  const modalOverlay = document.getElementById('admin-media-modal');
  const openBtn = document.getElementById('open-media-modal-btn');
  const closeBtn = document.getElementById('close-media-modal-btn');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        renderMediaModalGrid();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

function renderMediaModalGrid() {
  const grid = document.getElementById('media-modal-grid');
  if (!grid) return;

  if (recentMedia.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--color-body-muted);">
        No recent uploads stored yet. Upload or edit an image/video to store it here.
      </div>
    `;
    return;
  }

  grid.innerHTML = recentMedia.map((item, idx) => {
    const isVideo = item.type === 'video' || item.url.match(/\.(mp4|webm|mov)$/i);
    const dateStr = item.timestamp ? new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Stored Asset';

    return `
      <div class="media-modal-card">
        <div class="media-modal-thumb">
          ${isVideo
            ? `<video src="${item.url}" muted loop playsinline autoplay style="width:100%; height:100%; object-fit:cover;"></video>`
            : `<img src="${item.url}" alt="Asset ${idx+1}" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">`
          }
          <span class="admin-thumb-badge" style="position:absolute; top:6px; right:6px;">${isVideo ? 'VIDEO' : 'IMAGE'}</span>
        </div>
        <div class="media-modal-info">
          <span class="media-modal-date">${dateStr}</span>
          <div class="media-modal-actions">
            <button type="button" class="media-modal-btn copy-url-btn" data-url="${item.url}">
              Copy Link
            </button>
            <button type="button" class="media-modal-btn use-asset-btn" data-url="${item.url}">
              Copy & Close
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.copy-url-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = e.currentTarget.getAttribute('data-url');
      if (url) {
        navigator.clipboard.writeText(url);
        showToast('Media URL copied to clipboard!');
      }
    });
  });

  grid.querySelectorAll('.use-asset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = e.currentTarget.getAttribute('data-url');
      if (url) {
        navigator.clipboard.writeText(url);
        showToast('Asset URL copied! Paste it into any picture URL field.');
        const modalOverlay = document.getElementById('admin-media-modal');
        if (modalOverlay) modalOverlay.classList.remove('active');
      }
    });
  });
}

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
  const jumpBtns = document.querySelectorAll('[data-jump]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        if (targetId === 'tab-home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  jumpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const jumpId = btn.getAttribute('data-jump');
      
      // Ensure tab-home is active
      const homeTabBtn = document.querySelector('.admin-tab-btn[data-tab="tab-home"]');
      const homePanel = document.getElementById('tab-home');
      const leadsPanel = document.getElementById('tab-leads');
      
      if (homeTabBtn) {
        tabBtns.forEach(b => b.classList.remove('active'));
        homeTabBtn.classList.add('active');
      }
      if (homePanel) homePanel.classList.add('active');
      if (leadsPanel) leadsPanel.classList.remove('active');

      // Update active jump buttons
      jumpBtns.forEach(b => {
        if (b.getAttribute('data-jump') === jumpId) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      // Scroll target section into view
      const secEl = document.getElementById(jumpId);
      if (secEl) {
        secEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
      if (c.foundersStory) activeContent.foundersStory = c.foundersStory;
      if (c.footer) activeContent.footer = c.footer;
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

  // Founders Story (Card 5)
  const storyTitle = document.getElementById('story-title-input');
  const storyImg = document.getElementById('story-img-input');
  const storyP1 = document.getElementById('story-p1-input');
  const storyP2 = document.getElementById('story-p2-input');
  const storyP3 = document.getElementById('story-p3-input');
  const storyImgPrev = document.getElementById('story-img-preview');
  const storyImgBtn = document.getElementById('upload-btn-story-img');

  if (storyTitle) storyTitle.value = activeContent.foundersStory?.title || '';
  if (storyImg) storyImg.value = activeContent.foundersStory?.foundersImage || '';
  if (storyImgPrev && storyImg?.value) storyImgPrev.src = storyImg.value;
  if (storyP1) storyP1.value = activeContent.foundersStory?.paragraphs?.[0] || '';
  if (storyP2) storyP2.value = activeContent.foundersStory?.paragraphs?.[1] || '';
  if (storyP3) storyP3.value = activeContent.foundersStory?.paragraphs?.[2] || '';

  if (storyImg) {
    storyImg.addEventListener('input', (e) => {
      if (storyImgPrev) storyImgPrev.src = e.target.value.trim();
    });
  }
  setupFileUploadButton(storyImgBtn, storyImg, storyImgPrev);

  // Footer (Card 6)
  const footerBrand = document.getElementById('footer-brand-input');
  const footerLocs = document.getElementById('footer-locations-input');
  const footerTagline = document.getElementById('footer-tagline-input');
  const footerQTitle = document.getElementById('footer-quote-title-input');
  const footerQDesc = document.getElementById('footer-quote-desc-input');
  const footerInsta = document.getElementById('footer-instagram-input');
  const footerYt = document.getElementById('footer-youtube-input');
  const footerWa = document.getElementById('footer-whatsapp-input');

  if (footerBrand) footerBrand.value = activeContent.footer?.brandName || '';
  if (footerLocs) footerLocs.value = activeContent.footer?.locations || '';
  if (footerTagline) footerTagline.value = activeContent.footer?.tagline || '';
  if (footerQTitle) footerQTitle.value = activeContent.footer?.quoteTitle || '';
  if (footerQDesc) footerQDesc.value = activeContent.footer?.quoteDesc || '';
  if (footerInsta) footerInsta.value = activeContent.footer?.instagram || '';
  if (footerYt) footerYt.value = activeContent.footer?.youtube || '';
  if (footerWa) footerWa.value = activeContent.footer?.whatsapp || '';

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

  // Render clickable recent media chips below image/video inputs
  renderInputMediaChips();

  // Sync Undo Button status
  updateUndoButtonState();
}

function setupFileUploadButton(btn, inputEl, previewEl1, previewEl2) {
  if (!btn || !inputEl) return;

  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'file';
  hiddenInput.accept = 'image/*,video/*';
  hiddenInput.style.display = 'none';
  document.body.appendChild(hiddenInput);

  btn.addEventListener('click', () => {
    hiddenInput.click();
  });

  hiddenInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const originalBtnHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
      Processing...
    `;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const dataUrl = evt.target.result;
      pushHistorySnapshot();
      inputEl.value = dataUrl;
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));

      if (previewEl1) previewEl1.src = dataUrl;
      if (previewEl2) previewEl2.src = dataUrl;

      const isVideo = file.type ? file.type.startsWith('video') : dataUrl.startsWith('data:video');
      addRecentMedia(dataUrl, isVideo ? 'video' : 'image');

      btn.disabled = false;
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Uploaded!
      `;
      setTimeout(() => {
        btn.innerHTML = originalBtnHTML;
      }, 2500);

      showToast('File uploaded and saved to recent pictures history!');
    };

    reader.readAsDataURL(file);
  });
}

function initLiveMediaPreviewListeners() {
  const hv1 = document.getElementById('hero-video-1');
  const hv2 = document.getElementById('hero-video-2');
  const hv1Btn = document.getElementById('upload-btn-hero-1');
  const hv2Btn = document.getElementById('upload-btn-hero-2');
  const v1Prev = document.getElementById('hero-video-1-preview');
  const v2Prev = document.getElementById('hero-video-2-preview');

  if (hv1) {
    hv1.addEventListener('input', (e) => {
      if (v1Prev) v1Prev.src = e.target.value.trim();
    });
  }
  if (hv2) {
    hv2.addEventListener('input', (e) => {
      if (v2Prev) v2Prev.src = e.target.value.trim();
    });
  }

  setupFileUploadButton(hv1Btn, hv1, v1Prev);
  setupFileUploadButton(hv2Btn, hv2, v2Prev);

  for (let i = 1; i <= 4; i++) {
    const input = document.getElementById(`about-img-${i}`);
    const img = document.getElementById(`about-img-${i}-preview`);
    const btn = document.getElementById(`upload-btn-about-${i}`);

    if (input) {
      input.addEventListener('input', (e) => {
        if (img) img.src = e.target.value.trim();
      });
    }

    setupFileUploadButton(btn, input, img);
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
          <div class="admin-thumb-row">
            <input type="text" class="admin-input film-videourl" value="${film.videoUrl || ''}">
            <button type="button" class="admin-upload-btn btn-upload-film-video" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Video
            </button>
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Cover Poster Image URL</label>
          <div class="admin-thumb-row">
            <div class="admin-media-preview-box">
              <img class="film-poster-preview-${idx}" src="${film.poster || './images/niharika/main-shrine-couple.jpg'}" alt="Poster Preview" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">
              <span class="admin-thumb-badge">POSTER</span>
            </div>
            <input type="text" class="admin-input film-poster" data-preview-target="film-poster-preview-${idx}" value="${film.poster || ''}">
            <button type="button" class="admin-upload-btn btn-upload-film-poster" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Poster
            </button>
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

  // Live Poster Input Listeners & Upload Buttons
  container.querySelectorAll('.admin-item-box').forEach(box => {
    const posterInput = box.querySelector('.film-poster');
    const posterBtn = box.querySelector('.btn-upload-film-poster');
    const videoInput = box.querySelector('.film-videourl');
    const videoBtn = box.querySelector('.btn-upload-film-video');
    const idx = box.getAttribute('data-film-index');
    const imgPreview = box.querySelector(`.film-poster-preview-${idx}`);
    const thumbPreview = box.querySelector(`.film-thumb-preview-${idx}`);

    if (posterInput) {
      posterInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (imgPreview) imgPreview.src = val;
        if (thumbPreview) thumbPreview.src = val;
      });
    }

    setupFileUploadButton(posterBtn, posterInput, imgPreview, thumbPreview);
    setupFileUploadButton(videoBtn, videoInput);
  });

  container.querySelectorAll('.delete-film-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (confirm('Are you sure you want to remove this film from your archive?')) {
        pushHistorySnapshot();
        activeContent.weddingFilms.splice(idx, 1);
        renderFilmsManager();
        showToast('Film deleted. Click "Undo Edit" to restore it anytime.');
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
            <button type="button" class="admin-upload-btn btn-upload-port-img" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Image
            </button>
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Video URL (Optional Motion Still)</label>
          <div class="admin-thumb-row">
            <input type="text" class="admin-input port-videourl" value="${item.videoUrl || ''}">
            <button type="button" class="admin-upload-btn btn-upload-port-video" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Video
            </button>
          </div>
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

  // Live Image Input Listeners & Upload Buttons
  container.querySelectorAll('.admin-item-box').forEach(box => {
    const imgInput = box.querySelector('.port-image');
    const imgBtn = box.querySelector('.btn-upload-port-img');
    const videoInput = box.querySelector('.port-videourl');
    const videoBtn = box.querySelector('.btn-upload-port-video');
    const idx = box.getAttribute('data-port-index');
    const imgPreview = box.querySelector(`.port-img-preview-${idx}`);
    const headerPreview = box.querySelector(`.port-header-preview-${idx}`);

    if (imgInput) {
      imgInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (imgPreview) imgPreview.src = val;
        if (headerPreview) headerPreview.src = val;
      });
    }

    setupFileUploadButton(imgBtn, imgInput, imgPreview, headerPreview);
    setupFileUploadButton(videoBtn, videoInput);
  });

  container.querySelectorAll('.delete-port-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (confirm('Are you sure you want to remove this item from your portfolio?')) {
        pushHistorySnapshot();
        activeContent.portfolio.splice(idx, 1);
        renderPortfolioManager();
        showToast('Portfolio item deleted. Click "Undo Edit" to restore it anytime.');
      }
    });
  });
}

// ==========================================================================
// 6. SAVE ALL CONTENT TO MONGODB ATLAS
// ==========================================================================
function initSaveContent() {
  const saveBtn = document.getElementById('admin-save-all-btn');
  const undoBtn = document.getElementById('admin-undo-btn');
  const refreshLeadsBtn = document.getElementById('refresh-leads-btn');
  const addFilmBtn = document.getElementById('add-film-btn');
  const addPortBtn = document.getElementById('add-portfolio-btn');

  if (undoBtn) {
    undoBtn.addEventListener('click', handleUndo);
  }

  if (refreshLeadsBtn) {
    refreshLeadsBtn.addEventListener('click', loadLeads);
  }

  if (addFilmBtn) {
    addFilmBtn.addEventListener('click', () => {
      pushHistorySnapshot();
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
      showToast('New Film item added! Use Undo if you wish to revert.');
    });
  }

  if (addPortBtn) {
    addPortBtn.addEventListener('click', () => {
      pushHistorySnapshot();
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
      showToast('New Portfolio item added! Use Undo if you wish to revert.');
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
      pushHistorySnapshot();

      // Gather Hero
      activeContent.hero.headline = document.getElementById('hero-headline-input')?.value || 'Timemachine & Co';
      activeContent.hero.subtitle = document.getElementById('hero-subtitle-input')?.value || '';
      const hv1 = document.getElementById('hero-video-1')?.value || './videos/hero-wedding.mp4';
      const hv2 = document.getElementById('hero-video-2')?.value || './videos/hero-wedding.mp4';
      activeContent.hero.videos = [
        { title: 'Primary Hero', videoUrl: hv1 },
        { title: 'Lake Como Highlight', videoUrl: hv2 }
      ];
      if (hv1) addRecentMedia(hv1, 'video');
      if (hv2) addRecentMedia(hv2, 'video');

      // Gather About
      activeContent.about.tag = document.getElementById('about-tag-input')?.value || '';
      activeContent.about.title = document.getElementById('about-title-input')?.value || '';
      activeContent.about.paragraphs = [
        document.getElementById('about-p1-input')?.value || '',
        document.getElementById('about-p2-input')?.value || '',
        document.getElementById('about-p3-input')?.value || ''
      ];
      const abImgs = [
        document.getElementById('about-img-1')?.value || '',
        document.getElementById('about-img-2')?.value || '',
        document.getElementById('about-img-3')?.value || '',
        document.getElementById('about-img-4')?.value || ''
      ];
      activeContent.about.collageImages = abImgs;
      abImgs.forEach(url => { if (url) addRecentMedia(url, 'image'); });

      // Gather Films
      const filmBoxes = document.querySelectorAll('#films-list-container .admin-item-box');
      filmBoxes.forEach((box, idx) => {
        if (activeContent.weddingFilms[idx]) {
          activeContent.weddingFilms[idx].title = box.querySelector('.film-title')?.value || '';
          activeContent.weddingFilms[idx].location = box.querySelector('.film-location')?.value || '';
          activeContent.weddingFilms[idx].duration = box.querySelector('.film-duration')?.value || '';
          const vUrl = box.querySelector('.film-videourl')?.value || '';
          const pUrl = box.querySelector('.film-poster')?.value || '';
          activeContent.weddingFilms[idx].videoUrl = vUrl;
          activeContent.weddingFilms[idx].poster = pUrl;
          activeContent.weddingFilms[idx].reviewQuote = box.querySelector('.film-review')?.value || '';
          const stillsStr = box.querySelector('.film-stills')?.value || '';
          activeContent.weddingFilms[idx].stills = stillsStr.split(',').map(s => s.trim()).filter(Boolean);

          if (vUrl) addRecentMedia(vUrl, 'video');
          if (pUrl) addRecentMedia(pUrl, 'image');
        }
      });

      // Gather Portfolio
      const portBoxes = document.querySelectorAll('#portfolio-list-container .admin-item-box');
      portBoxes.forEach((box, idx) => {
        if (activeContent.portfolio[idx]) {
          activeContent.portfolio[idx].title = box.querySelector('.port-title')?.value || '';
          activeContent.portfolio[idx].category = box.querySelector('.port-category')?.value || 'stories';
          activeContent.portfolio[idx].aspectRatio = box.querySelector('.port-aspect')?.value || '4/5';
          const pImg = box.querySelector('.port-image')?.value || '';
          const pVid = box.querySelector('.port-videourl')?.value || '';
          activeContent.portfolio[idx].image = pImg;
          activeContent.portfolio[idx].videoUrl = pVid;
          
          if (!activeContent.portfolio[idx].exif) activeContent.portfolio[idx].exif = {};
          activeContent.portfolio[idx].exif.camera = box.querySelector('.port-camera')?.value || 'Leica M11';
          activeContent.portfolio[idx].exif.lens = box.querySelector('.port-lens')?.value || 'Noctilux-M 50mm';
          activeContent.portfolio[idx].exif.aperture = box.querySelector('.port-aperture')?.value || 'f/1.2';
          activeContent.portfolio[idx].exif.focal = box.querySelector('.port-focal')?.value || '50mm';

          if (pImg) addRecentMedia(pImg, 'image');
          if (pVid) addRecentMedia(pVid, 'video');
        }
      });

      // Gather Founders Story (Card 5)
      if (!activeContent.foundersStory) activeContent.foundersStory = {};
      activeContent.foundersStory.title = document.getElementById('story-title-input')?.value || '';
      const storyImgUrl = document.getElementById('story-img-input')?.value || '';
      activeContent.foundersStory.foundersImage = storyImgUrl;
      activeContent.foundersStory.paragraphs = [
        document.getElementById('story-p1-input')?.value || '',
        document.getElementById('story-p2-input')?.value || '',
        document.getElementById('story-p3-input')?.value || ''
      ];
      if (storyImgUrl) addRecentMedia(storyImgUrl, 'image');

      // Gather Footer (Card 6)
      if (!activeContent.footer) activeContent.footer = {};
      activeContent.footer.brandName = document.getElementById('footer-brand-input')?.value || '';
      activeContent.footer.locations = document.getElementById('footer-locations-input')?.value || '';
      activeContent.footer.tagline = document.getElementById('footer-tagline-input')?.value || '';
      activeContent.footer.quoteTitle = document.getElementById('footer-quote-title-input')?.value || '';
      activeContent.footer.quoteDesc = document.getElementById('footer-quote-desc-input')?.value || '';
      activeContent.footer.instagram = document.getElementById('footer-instagram-input')?.value || '';
      activeContent.footer.youtube = document.getElementById('footer-youtube-input')?.value || '';
      activeContent.footer.whatsapp = document.getElementById('footer-whatsapp-input')?.value || '';

      // Save to local cache for instant local site reflection
      localStorage.setItem('studio_content_cache', JSON.stringify(activeContent));

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
  initMediaModal();
  initSaveContent();
});

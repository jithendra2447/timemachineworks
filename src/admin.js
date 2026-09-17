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
// 3. LEADS & QUOTES LOAD + 1-CLICK QUOTATION
// ==========================================================================
let fetchedLeadsCache = [];

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
      fetchedLeadsCache = quotes;
      if (badge) badge.textContent = quotes.length;

      if (quotes.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--color-body-muted);">
              No quote requests submitted yet.
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = quotes.map((q, idx) => {
        const dateStr = q.createdAt ? new Date(q.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
        const eventsList = (q.events || []).map(e => `
          <div style="font-size: 0.82rem; margin-bottom: 0.35rem; border-left: 2px solid var(--color-sage-border); padding-left: 0.5rem;">
            <strong>${e.name}</strong> • ${e.date || '-'} • ${e.location || 'Location tbd'} (${e.guests || '-'} guests)
          </div>
        `).join('');

        return `
          <tr>
            <td style="font-weight: 500; font-family: var(--font-ui); font-size: 0.8rem;">${dateStr}</td>
            <td style="font-weight: 600; color: var(--color-heading);">${q.clientName || 'Client'}</td>
            <td><strong>Groom:</strong> ${q.groomName || '-'}<br><strong>Bride:</strong> ${q.brideName || '-'}</td>
            <td><a href="tel:${q.countryCode || ''}${q.phone || ''}" style="color: var(--color-heading); text-decoration: underline;">${q.countryCode || ''} ${q.phone || ''}</a></td>
            <td>${eventsList || 'No events listed'}</td>
            <td>
              <button type="button" class="btn-create-quote-from-lead" data-lead-idx="${idx}" style="background: #C5A059; color: #FFFFFF; border: none; padding: 0.45rem 0.75rem; border-radius: 6px; font-family: var(--font-ui); font-size: 0.78rem; font-weight: 600; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 0.35rem;">
                ⚡ Create Quotation
              </button>
            </td>
          </tr>
        `;
      }).join('');

      // Wire up 1-Click Create Quotation buttons
      tbody.querySelectorAll('.btn-create-quote-from-lead').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-lead-idx'), 10);
          const lead = fetchedLeadsCache[idx];
          if (!lead) return;

          activeQuotation.clientName = lead.clientName || 'Client';
          activeQuotation.coupleNames = `Groom: ${lead.groomName || '-'} • Bride: ${lead.brideName || '-'}`;
          activeQuotation.phone = `${lead.countryCode || ''} ${lead.phone || ''}`.trim();
          if (lead.email) activeQuotation.email = lead.email;

          if (Array.isArray(lead.events) && lead.events.length > 0) {
            activeQuotation.events = lead.events.map((e, i) => ({
              id: 'evt-' + Date.now() + '-' + i,
              name: e.name || `Event #${i+1}`,
              date: e.date || 'TBD Date',
              location: e.location || 'TBD Location',
              candidPhoto: 1,
              candidVideo: 1,
              tradPhoto: 1,
              tradVideo: 1,
              dronePilot: 0
            }));
          }

          populateQuotationForm();
          renderQuoteEventsForm();
          renderProposalPreview();

          // Switch tab to tab-quotation
          const quoteTabBtn = document.querySelector('.admin-tab-btn[data-tab="tab-quotation"]');
          if (quoteTabBtn) quoteTabBtn.click();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          showToast(`Quotation auto-populated for ${lead.clientName}!`);
        });
      });
    }
  } catch (err) {
    console.warn('Unable to fetch quotes from server:', err);
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--color-body-muted);">
            Local server on port 5000 is not running. Please start server via "npm run server" to view live leads.
          </td>
        </tr>
      `;
    }
  }
}

// ==========================================================================
// QUOTATION GENERATOR & LUXURY PROPOSAL BUILDER LOGIC
// ==========================================================================
let activeQuotation = {
  selectedTemplate: 'template1', // 'template1' or 'template2'
  clientName: 'Bhavya Allu',
  coupleNames: 'Groom: Anish • Bride: Bhavya Allu',
  phone: '+91 97056 32982',
  email: 'bhavya.allu@wedding.com',
  website: 'timemachineworks.com',
  events: [
    {
      id: 'evt-1',
      name: 'Engagement Ceremony',
      date: '11 Feb 2027',
      location: 'Guntur, Andhra Pradesh',
      candidPhoto: 1,
      candidVideo: 1,
      tradPhoto: 1,
      tradVideo: 1,
      dronePilot: 0,
      badges: []
    },
    {
      id: 'evt-2',
      name: 'Grand Wedding Celebrations',
      date: '25 Feb 2027',
      location: 'Hyderabad, Telangana',
      candidPhoto: 2,
      candidVideo: 2,
      tradPhoto: 2,
      tradVideo: 2,
      dronePilot: 1,
      badges: ['Pellikoduku', 'Bride Ceremony', 'Haldi', 'Sangeeth', 'Mehendi', 'Vratham', 'Wedding']
    }
  ],
  services: {
    pictures: true,
    films: true,
    albums: true,
    videos: true
  },
  addOns: {
    ledWall: false,
    liveStream: false,
    droneCoverage: false,
    extraAlbums: 0
  },
  totalPrice: '2,50,000',
  advancePct: '50% Booking Retainer',
  finalPct: '50% Balance Prior to Raw Footage Handover',
  hdNote: 'Requirement of two 4TB External Hard Drives for client data safety.'
};

function initQuotationGenerator() {
  try {
    const saved = localStorage.getItem('studio_active_quotation');
    if (saved) {
      activeQuotation = JSON.parse(saved);
    }
  } catch (e) {}

  populateQuotationForm();
  renderQuoteEventsForm();
  renderProposalPreview();
  bindQuotationEvents();
}

function populateQuotationForm() {
  const clientInput = document.getElementById('quote-client-name');
  const coupleInput = document.getElementById('quote-couple-names');
  const phoneInput = document.getElementById('quote-client-phone');
  const emailInput = document.getElementById('quote-client-email');
  const priceInput = document.getElementById('quote-total-price');
  const advanceInput = document.getElementById('quote-advance-pct');
  const finalInput = document.getElementById('quote-final-pct');
  const hdNoteInput = document.getElementById('quote-hd-note');

  if (clientInput) clientInput.value = activeQuotation.clientName || '';
  if (coupleInput) coupleInput.value = activeQuotation.coupleNames || '';
  if (phoneInput) phoneInput.value = activeQuotation.phone || '';
  if (emailInput) emailInput.value = activeQuotation.email || '';
  if (priceInput) priceInput.value = activeQuotation.totalPrice || '';
  if (advanceInput) advanceInput.value = activeQuotation.advancePct || '';
  if (finalInput) finalInput.value = activeQuotation.finalPct || '';
  if (hdNoteInput) hdNoteInput.value = activeQuotation.hdNote || '';

  const tplSelect = document.getElementById('quote-template-select');
  if (tplSelect) tplSelect.value = activeQuotation.selectedTemplate || 'template1';

  const svcPic = document.getElementById('svc-pictures-check');
  const svcFilm = document.getElementById('svc-films-check');
  const svcAlbum = document.getElementById('svc-albums-check');
  const svcVid = document.getElementById('svc-videos-check');

  if (svcPic) svcPic.checked = activeQuotation.services.pictures;
  if (svcFilm) svcFilm.checked = activeQuotation.services.films;
  if (svcAlbum) svcAlbum.checked = activeQuotation.services.albums;
  if (svcVid) svcVid.checked = activeQuotation.services.videos;

  const addonLed = document.getElementById('addon-led-check');
  const addonStream = document.getElementById('addon-livestream-check');
  const addonDrone = document.getElementById('addon-drone-check');
  const albumCountEl = document.getElementById('addon-album-count');

  if (addonLed) addonLed.checked = !!activeQuotation.addOns.ledWall;
  if (addonStream) addonStream.checked = !!activeQuotation.addOns.liveStream;
  if (addonDrone) addonDrone.checked = !!activeQuotation.addOns.droneCoverage;
  if (albumCountEl) albumCountEl.textContent = activeQuotation.addOns.extraAlbums || 0;
}

function renderQuoteEventsForm() {
  const container = document.getElementById('quote-events-list');
  if (!container) return;

  if (activeQuotation.events.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-body-muted); background: #FAF8F5; border-radius: 8px;">
        No events added yet. Click "+ Add Event" to configure celebration coverage.
      </div>
    `;
    return;
  }

  container.innerHTML = activeQuotation.events.map((evt, idx) => `
    <div class="event-item-card" data-evt-id="${evt.id}">
      <div class="event-item-header">
        <span style="font-family: var(--font-ui); font-size: 0.78rem; font-weight: 700; color: #C5A059; text-transform: uppercase; letter-spacing: 0.1em;">
          EVENT #${idx + 1}
        </span>
        <button type="button" class="btn-remove-evt" data-evt-id="${evt.id}" style="background: none; border: none; color: #D9534F; font-size: 0.82rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.3rem;">
          ✕ Remove Event
        </button>
      </div>

      <div class="admin-form-grid">
        <div class="admin-form-group col-full">
          <label class="admin-label">Event Name / Title</label>
          <input type="text" class="admin-input evt-input-name" data-evt-id="${evt.id}" value="${evt.name || ''}" placeholder="e.g. Engagement, Sangeeth, Wedding, Haldi">
        </div>

        <div class="admin-form-group">
          <label class="admin-label">Event Date</label>
          <input type="text" class="admin-input evt-input-date" data-evt-id="${evt.id}" value="${evt.date || ''}" placeholder="e.g. 12 Nov 2026">
        </div>

        <div class="admin-form-group">
          <label class="admin-label">Venue Location</label>
          <input type="text" class="admin-input evt-input-loc" data-evt-id="${evt.id}" value="${evt.location || ''}" placeholder="e.g. Hyderabad, Telangana">
        </div>

        <div class="admin-form-group col-full" style="background: #FFFFFF; padding: 1rem; border-radius: 6px; border: 1px solid var(--color-border-light); margin-top: 0.5rem;">
          <label class="admin-label" style="margin-bottom: 0.75rem; display: block;">Crew Breakdown & Staffing</label>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
            
            <div>
              <span style="font-size: 0.8rem; color: var(--color-body); font-weight: 500;">Candid Photographers</span>
              <div class="crew-counter-group" style="margin-top: 0.35rem;">
                <button type="button" class="crew-btn btn-crew-minus" data-evt-id="${evt.id}" data-field="candidPhoto">-</button>
                <span style="font-weight: 700; font-size: 0.9rem; width: 24px; text-align: center;">${evt.candidPhoto || 0}</span>
                <button type="button" class="crew-btn btn-crew-plus" data-evt-id="${evt.id}" data-field="candidPhoto">+</button>
              </div>
            </div>

            <div>
              <span style="font-size: 0.8rem; color: var(--color-body); font-weight: 500;">Candid Videographers</span>
              <div class="crew-counter-group" style="margin-top: 0.35rem;">
                <button type="button" class="crew-btn btn-crew-minus" data-evt-id="${evt.id}" data-field="candidVideo">-</button>
                <span style="font-weight: 700; font-size: 0.9rem; width: 24px; text-align: center;">${evt.candidVideo || 0}</span>
                <button type="button" class="crew-btn btn-crew-plus" data-evt-id="${evt.id}" data-field="candidVideo">+</button>
              </div>
            </div>

            <div>
              <span style="font-size: 0.8rem; color: var(--color-body); font-weight: 500;">Traditional Photographers</span>
              <div class="crew-counter-group" style="margin-top: 0.35rem;">
                <button type="button" class="crew-btn btn-crew-minus" data-evt-id="${evt.id}" data-field="tradPhoto">-</button>
                <span style="font-weight: 700; font-size: 0.9rem; width: 24px; text-align: center;">${evt.tradPhoto || 0}</span>
                <button type="button" class="crew-btn btn-crew-plus" data-evt-id="${evt.id}" data-field="tradPhoto">+</button>
              </div>
            </div>

            <div>
              <span style="font-size: 0.8rem; color: var(--color-body); font-weight: 500;">Traditional Videographers</span>
              <div class="crew-counter-group" style="margin-top: 0.35rem;">
                <button type="button" class="crew-btn btn-crew-minus" data-evt-id="${evt.id}" data-field="tradVideo">-</button>
                <span style="font-weight: 700; font-size: 0.9rem; width: 24px; text-align: center;">${evt.tradVideo || 0}</span>
                <button type="button" class="crew-btn btn-crew-plus" data-evt-id="${evt.id}" data-field="tradVideo">+</button>
              </div>
            </div>

            <div>
              <span style="font-size: 0.8rem; color: var(--color-body); font-weight: 500;">Drone Cinematographer</span>
              <div class="crew-counter-group" style="margin-top: 0.35rem;">
                <button type="button" class="crew-btn btn-crew-minus" data-evt-id="${evt.id}" data-field="dronePilot">-</button>
                <span style="font-weight: 700; font-size: 0.9rem; width: 24px; text-align: center;">${evt.dronePilot || 0}</span>
                <button type="button" class="crew-btn btn-crew-plus" data-evt-id="${evt.id}" data-field="dronePilot">+</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-remove-evt').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-evt-id');
      activeQuotation.events = activeQuotation.events.filter(e => e.id !== id);
      renderQuoteEventsForm();
      renderProposalPreview();
    });
  });

  container.querySelectorAll('.evt-input-name').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-evt-id');
      const item = activeQuotation.events.find(x => x.id === id);
      if (item) { item.name = e.target.value; renderProposalPreview(); }
    });
  });

  container.querySelectorAll('.evt-input-date').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-evt-id');
      const item = activeQuotation.events.find(x => x.id === id);
      if (item) { item.date = e.target.value; renderProposalPreview(); }
    });
  });

  container.querySelectorAll('.evt-input-loc').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-evt-id');
      const item = activeQuotation.events.find(x => x.id === id);
      if (item) { item.location = e.target.value; renderProposalPreview(); }
    });
  });

  container.querySelectorAll('.btn-crew-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-evt-id');
      const field = btn.getAttribute('data-field');
      const item = activeQuotation.events.find(x => x.id === id);
      if (item && item[field] > 0) {
        item[field]--;
        renderQuoteEventsForm();
        renderProposalPreview();
      }
    });
  });

  container.querySelectorAll('.btn-crew-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-evt-id');
      const field = btn.getAttribute('data-field');
      const item = activeQuotation.events.find(x => x.id === id);
      if (item) {
        item[field] = (item[field] || 0) + 1;
        renderQuoteEventsForm();
        renderProposalPreview();
      }
    });
  });
}

function bindQuotationEvents() {
  const bindInput = (id, key, subKey) => {
    const el = document.getElementById(id);
    if (!el) return;
    const handler = (e) => {
      const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      if (subKey) {
        activeQuotation[key][subKey] = val;
      } else {
        activeQuotation[key] = val;
      }
      renderProposalPreview();
    };
    el.addEventListener('input', handler);
    if (el.type === 'checkbox') el.addEventListener('change', handler);
  };

  bindInput('quote-client-name', 'clientName');
  bindInput('quote-couple-names', 'coupleNames');
  bindInput('quote-client-phone', 'phone');
  bindInput('quote-client-email', 'email');
  bindInput('quote-total-price', 'totalPrice');
  bindInput('quote-advance-pct', 'advancePct');
  bindInput('quote-final-pct', 'finalPct');
  bindInput('quote-hd-note', 'hdNote');

  const tplSelect = document.getElementById('quote-template-select');
  if (tplSelect) {
    tplSelect.addEventListener('change', (e) => {
      activeQuotation.selectedTemplate = e.target.value;
      renderProposalPreview();
    });
  }

  bindInput('svc-pictures-check', 'services', 'pictures');
  bindInput('svc-films-check', 'services', 'films');
  bindInput('svc-albums-check', 'services', 'albums');
  bindInput('svc-videos-check', 'services', 'videos');

  bindInput('addon-led-check', 'addOns', 'ledWall');
  bindInput('addon-livestream-check', 'addOns', 'liveStream');
  bindInput('addon-drone-check', 'addOns', 'droneCoverage');

  const albumMinus = document.getElementById('btn-addon-album-minus');
  const albumPlus = document.getElementById('btn-addon-album-plus');
  const albumCount = document.getElementById('addon-album-count');

  if (albumMinus) {
    albumMinus.addEventListener('click', () => {
      if (activeQuotation.addOns.extraAlbums > 0) {
        activeQuotation.addOns.extraAlbums--;
        if (albumCount) albumCount.textContent = activeQuotation.addOns.extraAlbums;
        renderProposalPreview();
      }
    });
  }

  if (albumPlus) {
    albumPlus.addEventListener('click', () => {
      activeQuotation.addOns.extraAlbums++;
      if (albumCount) albumCount.textContent = activeQuotation.addOns.extraAlbums;
      renderProposalPreview();
    });
  }

  const addEvtBtn = document.getElementById('btn-add-quote-event');
  if (addEvtBtn) {
    addEvtBtn.addEventListener('click', () => {
      activeQuotation.events.push({
        id: 'evt-' + Date.now(),
        name: 'Celebration Event',
        date: 'TBD Date',
        location: 'TBD Location',
        candidPhoto: 1,
        candidVideo: 1,
        tradPhoto: 1,
        tradVideo: 1,
        dronePilot: 0
      });
      renderQuoteEventsForm();
      renderProposalPreview();
    });
  }

  const printBtn = document.getElementById('btn-print-proposal');
  if (printBtn) {
    printBtn.addEventListener('click', async () => {
      const element = document.getElementById('proposal-template-preview');
      if (!element) return;

      showToast('Generating high-resolution luxury PDF...');

      if (typeof window.html2pdf === 'function') {
        const originalText = printBtn.innerHTML;
        printBtn.disabled = true;
        printBtn.innerHTML = `⏳ Preparing PDF...`;

        // Temporarily swap videos with poster images for clean canvas rendering
        const videos = element.querySelectorAll('video');
        const videoParents = [];
        videos.forEach(v => {
          const img = document.createElement('img');
          img.src = v.poster || './videos/preview_check.jpg';
          img.style.cssText = v.style.cssText;
          img.className = 'pdf-temp-video-poster';
          v.parentNode.insertBefore(img, v);
          v.style.display = 'none';
          videoParents.push({ video: v, posterImg: img });
        });

        const clientName = (activeQuotation.clientName || 'Bhavya_Allu').replace(/[^a-zA-Z0-9]/g, '_');
        const opt = {
          margin:       [0.3, 0.3, 0.3, 0.3],
          filename:     `Timemachine_Quotation_${clientName}.pdf`,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
          pagebreak:    { mode: ['css', 'legacy'] }
        };

        try {
          await window.html2pdf().set(opt).from(element).save();
          showToast('PDF proposal downloaded successfully!');
        } catch (err) {
          console.warn('html2pdf error, falling back to window.print():', err);
          window.print();
        } finally {
          // Restore video elements
          videoParents.forEach(item => {
            if (item.posterImg && item.posterImg.parentNode) {
              item.posterImg.parentNode.removeChild(item.posterImg);
            }
            item.video.style.display = 'block';
          });
          printBtn.disabled = false;
          printBtn.innerHTML = originalText;
        }
      } else {
        window.print();
      }
    });
  }

  const waBtn = document.getElementById('btn-send-whatsapp');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const cleanPhone = (activeQuotation.phone || '').replace(/[^0-9]/g, '');
      const evtNames = activeQuotation.events.map(e => e.name).join(', ');
      const msg = `Dear ${activeQuotation.clientName || 'Client'},\n\nGreetings from Timemachine & Co! ✨\n\nWe have prepared a fine-art luxury wedding quotation proposal tailored for your celebrations.\n\nSummary:\n• Couple: ${activeQuotation.coupleNames || '-'}\n• Events: ${evtNames || '-'}\n• Final Quote Price: ₹ ${activeQuotation.totalPrice || '0'}\n\nPlease review your custom proposal. We look forward to capturing your timeless story!\n\nWarm regards,\nTimemachine & Co`;
      
      const waUrl = cleanPhone
        ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`
        : `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  const copyTextBtn = document.getElementById('btn-copy-quote-text');
  if (copyTextBtn) {
    copyTextBtn.addEventListener('click', () => {
      const summaryText = `TIMEMACHINE & CO — LUXURY WEDDING PROPOSAL\n--------------------------------------------\nClient: ${activeQuotation.clientName}\nCouple: ${activeQuotation.coupleNames}\nPhone: ${activeQuotation.phone}\nEmail: ${activeQuotation.email}\n\nEVENTS COVERAGE:\n` +
        activeQuotation.events.map(e => `- ${e.name} (${e.date}, ${e.location})\n  Crew: ${e.candidPhoto} Candid Photo, ${e.candidVideo} Candid Video, ${e.tradPhoto} Trad Photo, ${e.tradVideo} Trad Video${e.dronePilot ? `, ${e.dronePilot} Drone` : ''}`).join('\n') +
        `\n\nSERVICES OFFERED:\n` +
        (activeQuotation.services.pictures ? `• High-Resolution Color-Graded Stills\n` : '') +
        (activeQuotation.services.films ? `• 4K Cinematic Teaser & Feature Film\n` : '') +
        (activeQuotation.services.albums ? `• Handcrafted Printed Fine-Art Albums\n` : '') +
        (activeQuotation.services.videos ? `• Full Length Traditional Video Coverage\n` : '') +
        `\nFINAL QUOTE PRICE: ₹ ${activeQuotation.totalPrice}\n\nPAYMENT TIMELINE:\n• ${activeQuotation.advancePct}\n• ${activeQuotation.finalPct}\n• Note: ${activeQuotation.hdNote}`;

      navigator.clipboard.writeText(summaryText);
      showToast('Quotation summary copied to clipboard!');
    });
  }

  const saveDraftBtn = document.getElementById('btn-save-quote-draft');
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
      try {
        localStorage.setItem('studio_active_quotation', JSON.stringify(activeQuotation));
        showToast('Proposal draft saved to browser storage!');
      } catch (e) {
        showToast('Error saving draft');
      }
    });
  }
}

// Confetti Effect Generator
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#F59E0B', '#FBBF24', '#D4AF37', '#FFFFFF', '#EAB308', '#C5A059'];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 24,
      vy: (Math.random() - 0.75) * 22,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12
    });
  }

  let startTime = Date.now();
  function animate() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38;
      p.alpha -= 0.012;
      p.rotation += p.rSpeed;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (elapsed < 3200) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }
  animate();
}

function getCalculatedTotalPrice() {
  const baseStr = (activeQuotation.totalPrice || '2,50,000').replace(/[^0-9]/g, '');
  let total = parseInt(baseStr, 10) || 250000;

  if (activeQuotation.addOns.ledWall) total += 25000;
  if (activeQuotation.addOns.liveStream) total += 15000;
  if (activeQuotation.addOns.droneCoverage) total += 15000;
  if (activeQuotation.addOns.extraAlbums > 0) total += 25000 * activeQuotation.addOns.extraAlbums;

  return total.toLocaleString('en-IN');
}

function renderProposalPreview() {
  const container = document.getElementById('proposal-template-preview');
  if (!container) return;

  const isDarkTemplate = activeQuotation.selectedTemplate === 'template2';
  container.className = isDarkTemplate ? 'proposal-paper-dark' : 'proposal-paper';

  const datesSummary = activeQuotation.events.map(e => e.date).filter(Boolean).join(' • ') || 'Upcoming Wedding Dates';
  const calculatedTotal = getCalculatedTotalPrice();

  if (isDarkTemplate) {
    // =========================================================================
    // TEMPLATE 2: MODERN DARK GLASSMORPHISM LUXURY TEMPLATE
    // =========================================================================
    const eventsDarkHtml = activeQuotation.events.map(e => {
      const crewChips = [];
      if (e.candidPhoto) crewChips.push(`<span class="proposal-crew-chip">📸 ${e.candidPhoto} Candid Photo${e.candidPhoto > 1 ? 's' : ''}</span>`);
      if (e.candidVideo) crewChips.push(`<span class="proposal-crew-chip">🎬 ${e.candidVideo} Candid Video${e.candidVideo > 1 ? 's' : ''}</span>`);
      if (e.tradPhoto) crewChips.push(`<span class="proposal-crew-chip">📷 ${e.tradPhoto} Trad Photo${e.tradPhoto > 1 ? 's' : ''}</span>`);
      if (e.tradVideo) crewChips.push(`<span class="proposal-crew-chip">🎥 ${e.tradVideo} Trad Video${e.tradVideo > 1 ? 's' : ''}</span>`);
      if (e.dronePilot) crewChips.push(`<span class="proposal-crew-chip">🚁 ${e.dronePilot} Drone Pilot${e.dronePilot > 1 ? 's' : ''}</span>`);

      const badgesHtml = Array.isArray(e.badges) && e.badges.length > 0 ? `
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px solid rgba(245, 158, 11, 0.15);">
          ${e.badges.map(b => `<span class="proposal-dark-badge" style="font-size: 0.68rem; padding: 0.2rem 0.6rem;">✨ ${b}</span>`).join('')}
        </div>
      ` : '';

      return `
        <div class="proposal-glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.5rem;">
              <h4 style="font-family: var(--font-heading); font-size: 1.35rem; color: #FFFFFF; margin: 0; font-weight: 600; letter-spacing: -0.01em;">${e.name || 'Event Title'}</h4>
              <span class="proposal-dark-badge">🗓️ ${e.date || 'Date'}</span>
            </div>
            
            <div style="font-size: 0.88rem; color: #F59E0B; font-family: var(--font-ui); font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.35rem;">
              📍 ${e.location || 'Location'}
            </div>

            <div style="margin-bottom: 0.5rem;">
              <div style="font-size: 0.75rem; font-family: var(--font-ui); text-transform: uppercase; letter-spacing: 0.1em; color: #A1A1AA; margin-bottom: 0.45rem; font-weight: 600;">Dedicated Crew Breakdown</div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
                ${crewChips.join('') || '<span style="font-size:0.8rem; color:#71717A;">Standard Crew</span>'}
              </div>
            </div>
          </div>
          ${badgesHtml}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <!-- 1. HERO HEADER WITH EDITORIAL LOCKUP -->
      <div style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(245, 158, 11, 0.2); position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1.25rem;">
          <div>
            <div class="proposal-dark-badge" style="margin-bottom: 0.75rem;">✦ LUXURY GLASSMORPHISM PROPOSAL ✦</div>
            <h1 style="font-family: var(--font-heading); font-size: 2.5rem; margin: 0; font-weight: 400; letter-spacing: -0.02em;" class="proposal-gold-text">
              Timemachine & Co.
            </h1>
            <p style="font-size: 0.95rem; color: #F59E0B; font-family: var(--font-ui); letter-spacing: 0.14em; text-transform: uppercase; margin-top: 0.35rem; font-style: italic;">
              "Because Every Frame Has a Story to Tell"
            </p>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; font-family: var(--font-ui);">
            <div class="proposal-crew-chip" style="background: rgba(245, 158, 11, 0.12); border-color: rgba(245, 158, 11, 0.4); color: #FBBF24; font-weight: 700;">
              📞 +91 97056 32982
            </div>
            <div class="proposal-crew-chip" style="background: rgba(24, 24, 27, 0.8); border-color: rgba(255, 255, 255, 0.1); color: #A1A1AA;">
              🌐 timemachineworks.com
            </div>
          </div>
        </div>

        <!-- Personalized Welcome Experience Card -->
        <div class="proposal-glass-card" style="margin-top: 2rem; text-align: center; border-color: rgba(245, 158, 11, 0.45); background: linear-gradient(145deg, rgba(245, 158, 11, 0.12) 0%, rgba(24, 24, 27, 0.9) 100%);">
          <span style="font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; color: #FBBF24; font-weight: 700;">PROPOSAL PREPARED ESPECIALLY FOR</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #FFFFFF; margin: 0.35rem 0 0.2rem 0; font-style: italic;">${activeQuotation.clientName || 'Bhavya Allu'}</h2>
          <p style="font-size: 0.95rem; color: #D4D4D8; margin: 0.2rem 0 0.85rem 0;">${activeQuotation.coupleNames || 'Groom: Anish • Bride: Bhavya Allu'}</p>
          <div style="font-size: 0.82rem; color: #F59E0B; font-family: var(--font-ui); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(245, 158, 11, 0.1); padding: 0.4rem 1rem; border-radius: 999px; border: 1px solid rgba(245, 158, 11, 0.3);">
            ✨ CELEBRATING YOUR WEDDING STORY &nbsp;•&nbsp; 🗓️ ${datesSummary}
          </div>
        </div>
      </div>

      <!-- 2. EVENT SCHEDULE -->
      <div style="margin-bottom: 3.25rem;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; color: #F59E0B; font-weight: 700;">CELEBRATION SCHEDULE</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #FFFFFF; margin-top: 0.25rem; font-weight: 400;">Event Schedule & Crew Breakdown</h3>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.35rem;">
          ${eventsDarkHtml}
        </div>
      </div>

      <!-- 3. CORE DELIVERABLES GRID -->
      <div style="margin-bottom: 3.25rem;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; color: #F59E0B; font-weight: 700;">EDITORIAL OUTPUTS</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #FFFFFF; margin-top: 0.25rem; font-weight: 400;">Core Deliverables Archive</h3>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.35rem;">
          <div class="proposal-glass-card">
            <div style="font-size: 1.8rem; margin-bottom: 0.6rem; color: #FBBF24;">📸</div>
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #FFFFFF; margin: 0 0 0.35rem 0;">1,000 Edited Stills</h4>
            <p style="font-size: 0.85rem; color: #A1A1AA; margin: 0; line-height: 1.6;">60-day cloud gallery delivery with signature color grading & high-res printing rights.</p>
          </div>

          <div class="proposal-glass-card">
            <div style="font-size: 1.8rem; margin-bottom: 0.6rem; color: #FBBF24;">🎬</div>
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #FFFFFF; margin: 0 0 0.35rem 0;">Cinematic HD Film</h4>
            <p style="font-size: 0.85rem; color: #A1A1AA; margin: 0; line-height: 1.6;">4K Teaser & Feature Film (60-day delivery, 1 round of revisions included).</p>
          </div>

          <div class="proposal-glass-card">
            <div style="font-size: 1.8rem; margin-bottom: 0.6rem; color: #FBBF24;">🎥</div>
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #FFFFFF; margin: 0 0 0.35rem 0;">Traditional Film</h4>
            <p style="font-size: 0.85rem; color: #A1A1AA; margin: 0; line-height: 1.6;">Full uncut documentary video coverage of ceremony proceedings (75-day delivery).</p>
          </div>

          <div class="proposal-glass-card">
            <div style="font-size: 1.8rem; margin-bottom: 0.6rem; color: #FBBF24;">📖</div>
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #FFFFFF; margin: 0 0 0.35rem 0;">3 Signature Albums</h4>
            <p style="font-size: 0.85rem; color: #A1A1AA; margin: 0; line-height: 1.6;">Handcrafted fine-art printed albums (40 sheets each; extra sheets @ ₹600/sheet).</p>
          </div>
        </div>
      </div>

      <!-- 4. REAL-TIME DYNAMIC PRICE CALCULATOR -->
      <div style="margin-bottom: 3.25rem;">
        <div class="proposal-dark-price-box">
          <span style="font-family: var(--font-ui); font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase; color: #FBBF24; font-weight: 800;">DYNAMIC INVESTMENT CALCULATOR</span>
          <p style="font-size: 1.05rem; color: #E4E4E7; margin: 0.75rem 0 0.25rem 0; font-family: var(--font-paragraph);">
            Dear <strong style="color: #FFFFFF;">${activeQuotation.clientName || 'Bhavya Allu'}</strong>, your calculated total investment is:
          </p>
          
          <div class="proposal-dark-price-val">₹ ${calculatedTotal}</div>
          
          <div style="font-size: 0.85rem; color: #A1A1AA; margin-top: 0.75rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
            <span class="proposal-crew-chip">Base Package: ₹${activeQuotation.totalPrice || '2,50,000'}</span>
            ${activeQuotation.addOns.ledWall ? `<span class="proposal-crew-chip" style="color:#FBBF24; border-color:#F59E0B;">+ LED Wall (₹25k)</span>` : ''}
            ${activeQuotation.addOns.liveStream ? `<span class="proposal-crew-chip" style="color:#FBBF24; border-color:#F59E0B;">+ Live Stream (₹15k)</span>` : ''}
            ${activeQuotation.addOns.droneCoverage ? `<span class="proposal-crew-chip" style="color:#FBBF24; border-color:#F59E0B;">+ Drone (₹15k)</span>` : ''}
            ${activeQuotation.addOns.extraAlbums > 0 ? `<span class="proposal-crew-chip" style="color:#FBBF24; border-color:#F59E0B;">+ ${activeQuotation.addOns.extraAlbums} Extra Album(s)</span>` : ''}
          </div>
        </div>
      </div>

      <!-- 5. TERMS & POLICIES -->
      <div style="margin-bottom: 3.25rem;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; color: #F59E0B; font-weight: 700;">TRANSPARENT TERMS</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #FFFFFF; margin-top: 0.25rem; font-weight: 400;">Terms & Policies</h3>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem;">
          <div class="proposal-glass-card" style="font-size: 0.88rem;">
            <strong style="color: #FBBF24; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">✈️ Travel & Accommodations</strong>
            <p style="color: #A1A1AA; margin: 0; line-height: 1.6;">Travel & stay to be arranged by client for events outside Hyderabad.</p>
          </div>

          <div class="proposal-glass-card" style="font-size: 0.88rem;">
            <strong style="color: #FBBF24; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">💳 Payment Retainer Schedule</strong>
            <p style="color: #A1A1AA; margin: 0; line-height: 1.6;">50% booking retainer, 50% balance prior to raw footage handover.</p>
          </div>

          <div class="proposal-glass-card" style="font-size: 0.88rem;">
            <strong style="color: #FBBF24; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">💾 Data Safety & Storage</strong>
            <p style="color: #A1A1AA; margin: 0; line-height: 1.6;">Requirement of two 4TB external hard drives for client data safety.</p>
          </div>

          <div class="proposal-glass-card" style="font-size: 0.88rem;">
            <strong style="color: #FBBF24; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">🔒 Non-Refundable Policy</strong>
            <p style="color: #A1A1AA; margin: 0; line-height: 1.6;">Booking retainers are non-refundable upon cancellation.</p>
          </div>
        </div>
      </div>

      <!-- 6. ACCEPT PROPOSAL & RESERVE DATE BUTTON -->
      <div style="text-align: center;">
        <button type="button" class="proposal-accept-btn" id="btn-accept-proposal">
          ✨ Accept Proposal & Reserve Date
        </button>
        <p style="font-size: 0.8rem; color: #71717A; margin-top: 0.85rem; font-family: var(--font-ui);">
          Clicking reserves your dates & notifies lead cinematographer via instant dispatch.
        </p>
      </div>
    `;

    // Attach Accept Proposal event listener
    const acceptBtn = document.getElementById('btn-accept-proposal');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        triggerConfetti();
        const modal = document.getElementById('proposal-confirm-modal');
        const modalText = document.getElementById('modal-confirm-client-text');
        if (modalText) {
          modalText.textContent = `Thank you, ${activeQuotation.clientName || 'Bhavya Allu'}! Your wedding dates (${datesSummary}) have been provisionally reserved in our studio master calendar with a total investment of ₹ ${calculatedTotal}.`;
        }
        if (modal) modal.classList.add('active');
      });
    }

    const closeModalBtn = document.getElementById('btn-close-confirm-modal');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('proposal-confirm-modal');
        if (modal) modal.classList.remove('active');
      });
    }
  } else {
    // =========================================================================
    // TEMPLATE 1: FINE ART WARM CREAM LUXURY TEMPLATE (Matching Reference Images)
    // =========================================================================
    const eventsHtml = activeQuotation.events.map(e => {
      const crewLines = [];
      if (e.candidPhoto) crewLines.push(`${e.candidPhoto} Candid Photographer${e.candidPhoto > 1 ? 's' : ''}`);
      if (e.candidVideo) crewLines.push(`${e.candidVideo} Candid Videographer${e.candidVideo > 1 ? 's' : ''}`);
      if (e.tradPhoto) crewLines.push(`${e.tradPhoto} Traditional Photographer${e.tradPhoto > 1 ? 's' : ''}`);
      if (e.tradVideo) crewLines.push(`${e.tradVideo} Traditional Videographer${e.tradVideo > 1 ? 's' : ''}`);
      if (e.dronePilot) crewLines.push(`${e.dronePilot} Drone Pilot${e.dronePilot > 1 ? 's' : ''}`);

      return `
        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem; min-height: 160px; border: 1px solid rgba(197, 160, 89, 0.25); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 0.88rem; color: #55524E; font-family: var(--font-paragraph); margin-bottom: 0.4rem; font-weight: 500;">
              ${e.date || 'TBD Date'} | ${e.location || 'Location'}
            </div>
            <h4 style="font-family: var(--font-heading); font-size: 1.4rem; color: #1A1816; margin: 0 0 0.85rem 0; font-weight: 700;">
              ${e.name || 'Event Title'}
            </h4>
            ${crewLines.length > 0 ? `
              <div style="font-size: 0.88rem; color: #2C2622; line-height: 1.65; border-top: 1px solid rgba(197, 160, 89, 0.2); padding-top: 0.6rem;">
                ${crewLines.map(c => `<div>${c}</div>`).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    const svcs = activeQuotation.services;

    container.innerHTML = `
      <!-- PAGE 1: COVER PAGE (Matching Reference Image 1) -->
      <div class="proposal-section-page" style="text-align: center; padding-top: 1rem;">
        <!-- Tagline Line (Italic Serif) -->
        <h3 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; font-weight: 400; font-style: italic; margin: 0 0 0.3rem 0;">
          Timemachine & Co,
        </h3>

        <!-- Main Headline (Bold Headline) -->
        <h1 style="font-family: var(--font-heading); font-size: 2.5rem; color: #1A1816; font-weight: 700; margin: 0 0 0.75rem 0; letter-spacing: -0.02em;">
          Capturing Your Forever Story
        </h1>

        <!-- Subtitle -->
        <p style="font-size: 0.95rem; color: #55524E; max-width: 580px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
          Exclusive Fine Art Wedding Photography & Cinematography Proposal prepared for <strong>${activeQuotation.clientName || 'Bhavya Allu'}</strong>.
        </p>

        <!-- Dark Pill Button -->
        <div style="margin-bottom: 2.5rem;">
          <span style="display: inline-flex; align-items: center; gap: 0.5rem; background: #1A1816; color: #FFFFFF; font-family: var(--font-ui); font-size: 0.85rem; font-weight: 600; padding: 0.6rem 1.4rem; border-radius: 999px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
            Prepared for ${activeQuotation.clientName || 'Bhavya Allu'} →
          </span>
        </div>

        <!-- 3D CURVED ARC GALLERY SHOWCASE (Matching Image 1) -->
        <div style="perspective: 1000px; display: flex; justify-content: center; align-items: center; gap: 0.6rem; margin: 2rem 0; padding: 1.5rem 0; overflow: hidden;">
          <!-- Card -3 -->
          <div style="width: 110px; height: 210px; border-radius: 16px; overflow: hidden; transform: rotateY(38deg) scale(0.78); opacity: 0.82; flex-shrink: 0; box-shadow: 0 10px 20px rgba(0,0,0,0.12);">
            <img src="./images/niharika/groom-lighting.jpg" alt="Gallery 1" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <!-- Card -2 -->
          <div style="width: 120px; height: 235px; border-radius: 16px; overflow: hidden; transform: rotateY(25deg) scale(0.88); opacity: 0.92; flex-shrink: 0; box-shadow: 0 12px 25px rgba(0,0,0,0.14);">
            <img src="./images/niharika/bridal-braid.jpg" alt="Gallery 2" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <!-- Card -1 -->
          <div style="width: 130px; height: 260px; border-radius: 16px; overflow: hidden; transform: rotateY(12deg) scale(0.96); flex-shrink: 0; box-shadow: 0 14px 30px rgba(0,0,0,0.16);">
            <img src="./images/niharika/lotus-portrait.jpg" alt="Gallery 3" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <!-- Card 0 (Center) -->
          <div style="width: 140px; height: 285px; border-radius: 16px; overflow: hidden; transform: rotateY(0deg) scale(1.06) translateZ(20px); flex-shrink: 0; z-index: 5; box-shadow: 0 20px 45px rgba(0,0,0,0.22); border: 2px solid rgba(197, 160, 89, 0.4);">
            <img src="./images/niharika/main-shrine-couple.jpg" alt="Gallery 4" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <!-- Card +1 -->
          <div style="width: 130px; height: 260px; border-radius: 16px; overflow: hidden; transform: rotateY(-12deg) scale(0.96); flex-shrink: 0; box-shadow: 0 14px 30px rgba(0,0,0,0.16);">
            <img src="./images/niharika/couple-doorway.jpg" alt="Gallery 5" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <!-- Card +2 -->
          <div style="width: 120px; height: 235px; border-radius: 16px; overflow: hidden; transform: rotateY(-25deg) scale(0.88); opacity: 0.92; flex-shrink: 0; box-shadow: 0 12px 25px rgba(0,0,0,0.14);">
            <img src="./images/niharika/pooja-lighting.jpg" alt="Gallery 6" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <!-- Card +3 -->
          <div style="width: 110px; height: 210px; border-radius: 16px; overflow: hidden; transform: rotateY(-38deg) scale(0.78); opacity: 0.82; flex-shrink: 0; box-shadow: 0 10px 20px rgba(0,0,0,0.12);">
            <img src="./images/niharika/mandapam-garland.jpg" alt="Gallery 7" style="width:100%; height:100%; object-fit:cover;">
          </div>
        </div>

        <!-- 3-COLUMN FEATURE GRID BELOW ARC (Matching Image 1 bottom) -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; text-align: left; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(197, 160, 89, 0.2);">
          <div style="border-right: 1px solid rgba(197, 160, 89, 0.25); padding-right: 1.25rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0; font-weight: 600;">Fine Art Stills</h4>
            <p style="font-size: 0.82rem; color: #55524E; line-height: 1.6; margin: 0;">1,000 fully edited images from all events, portraying your wedding story, delivered on cloud within 60 days.</p>
          </div>

          <div style="border-right: 1px solid rgba(197, 160, 89, 0.25); padding-right: 1.25rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0; font-weight: 600;">Cinematic HD Films</h4>
            <p style="font-size: 0.82rem; color: #55524E; line-height: 1.6; margin: 0;">4K Teaser trailer + Full Feature Film with original audio remastering & color grading, delivered on cloud within 60 days.</p>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0; font-weight: 600;">Signature Albums</h4>
            <p style="font-size: 0.82rem; color: #55524E; line-height: 1.6; margin: 0;">3 printed albums (40 sheets each) crafted with Italian leather & velvet hardcover finish for timeless family heirlooms.</p>
          </div>
        </div>
      </div>

      <!-- PAGE 2: ABOUT US (Matching Reference Image 2) -->
      <div class="proposal-section-page">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center;">
          <!-- Left Overlapping Photos Block -->
          <div style="position: relative; height: 380px; width: 100%;">
            <!-- Accent Line behind images -->
            <div style="position: absolute; left: 0; top: 40%; width: 100%; height: 1px; background: #C5A059; opacity: 0.5; z-index: 1;"></div>
            
            <!-- Top Right Horizontal Floating Image -->
            <div style="position: absolute; top: 0; right: 5%; width: 62%; height: 200px; border-radius: 16px; overflow: hidden; box-shadow: 0 14px 35px rgba(0,0,0,0.14); z-index: 2; border: 1px solid #EAE3D2;">
              <img src="./images/niharika/doorway-portrait.jpg" alt="About Showcase 1" style="width:100%; height:100%; object-fit:cover;">
            </div>

            <!-- Bottom Left Vertical Floating Image -->
            <div style="position: absolute; top: 80px; left: 2%; width: 55%; height: 280px; border-radius: 16px; overflow: hidden; box-shadow: 0 18px 45px rgba(0,0,0,0.18); z-index: 3; border: 2px solid #FFFFFF;">
              <img src="./images/niharika/pooja-prayer.jpg" alt="About Showcase 2" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>

          <!-- Right Text Content Block -->
          <div style="padding-left: 1rem;">
            <div style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: #C5A059; font-weight: 700; margin-bottom: 0.4rem;">
              OUR CINEMATIC JOURNEY
            </div>
            <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #1A1816; margin: 0 0 1.25rem 0; font-weight: 400;">
              About Us
            </h2>

            <p style="font-family: var(--font-ui); font-size: 0.85rem; color: #3A3733; line-height: 1.8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.25rem;">
              AT TIMEMACHINE & CO, WE FREEZE FLEETING MOMENTS TO MAKE YOUR FOREVER LOVE STORY A TIMELESS MASTERPIECE. OUR SHARED PASSION FOR CINEMA, ART, AND VISUAL STORYTELLING BRINGS OUT THE MAGIC OF YOUR WEDDING INTO A TAPESTRY OF EMOTIONS.
            </p>

            <p style="font-family: var(--font-ui); font-size: 0.85rem; color: #55524E; line-height: 1.8; text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">
              WE WEAVE TRADITIONS, RITUALS, AND ELEGANT MOMENTS INTO VISUAL HEIRLOOMS TO BE TREASURED FOR GENERATIONS TO COME. DISCUSS DETAILS WITH OUR LEAD CINEMATOGRAPHERS AND EMBARK ON A SEAMLESS VISUAL JOURNEY.
            </p>
          </div>
        </div>
      </div>

      <!-- PAGE 3: YOUR EVENTS (Matching Reference Image 3) -->
      <div class="proposal-section-page">
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #1A1816; margin: 0 0 1.75rem 0; font-weight: 700;">
          Your Events
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem;">
          ${eventsHtml || '<p style="text-align:center;">No events configured.</p>'}
        </div>
      </div>

      <!-- PAGE 4: SERVICES OFFERED & PRICING (Matching Reference Image 4) -->
      <div class="proposal-section-page">
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #1A1816; margin: 0 0 1.75rem 0; font-weight: 700;">
          Services Offered
        </h2>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${svcs.pictures ? `
            <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
              <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0; font-weight: 600;">Edited Pictures</h4>
              <p style="font-size: 0.92rem; color: #2C2622; line-height: 1.65; margin: 0;">
                You shall receive 1,000 fully edited images from all events, portraying your wedding story, delivered on the cloud within 60 days from payment clearance.
              </p>
            </div>
          ` : ''}

          ${svcs.films ? `
            <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
              <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0; font-weight: 600;">Cinematic Wedding Films</h4>
              <p style="font-size: 0.92rem; color: #2C2622; line-height: 1.65; margin: 0 0 0.8rem 0;">
                1 cinematic HD film with the best footage from your events, edited according to our style, to be delivered on cloud within 60 days from payment clearance. You can suggest any number of changes but all at once and within a week of delivery.
              </p>
              <div style="font-size: 0.85rem; color: #55524E; font-style: italic;">
                *Changes will be accepted only once from 2nd time Rs 15,000 will be charged extra.
              </div>
            </div>
          ` : ''}

          ${svcs.albums ? `
            <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
              <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0; font-weight: 600;">Printed Albums</h4>
              <p style="font-size: 0.92rem; color: #2C2622; line-height: 1.65; margin: 0;">
                You shall receive 3 Printed albums from the best events each album has 40 sheets. An extra sheet will incur an additional charge of ₹600 per sheet.
              </p>
            </div>
          ` : ''}

          ${svcs.videos ? `
            <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
              <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0; font-weight: 600;">Traditional Videos</h4>
              <p style="font-size: 0.92rem; color: #2C2622; line-height: 1.65; margin: 0;">
                You shall receive 5 long traditional video of all events in documentary style, delivered within 75 days from payment clearance.
              </p>
            </div>
          ` : ''}
        </div>

        <div style="text-align: center; margin: 3rem 0 2rem 0;">
          <!-- Custom Gold Star Line Divider matching Image 4 -->
          <svg width="280" height="20" viewBox="0 0 280 20" fill="none" style="margin: 0 auto; display: block;">
            <line x1="0" y1="10" x2="110" y2="10" stroke="#C5A059" stroke-width="1.2" opacity="0.6"></line>
            <circle cx="110" cy="10" r="3" fill="#C5A059"></circle>
            <path d="M140 3 L143 10 L140 17 L137 10 Z" fill="#C5A059"></path>
            <circle cx="170" cy="10" r="3" fill="#C5A059"></circle>
            <line x1="170" y1="10" x2="280" y2="10" stroke="#C5A059" stroke-width="1.2" opacity="0.6"></line>
          </svg>

          <!-- Quote Price Callout Box matching Image 4 -->
          <div style="padding: 2.5rem 1rem;">
            <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: #C5A059; margin: 0 0 0.5rem 0; font-weight: 700;">
              Dear ${activeQuotation.clientName || 'Bhavya Allu'}
            </h3>
            <p style="font-size: 1rem; color: #2C2622; margin: 0 0 1.25rem 0; font-family: var(--font-paragraph);">
              Your final quote price would be
            </p>
            <div style="font-family: var(--font-heading); font-size: 3.2rem; color: #C5A059; font-weight: 700;">
              ₹${calculatedTotal || activeQuotation.totalPrice || '2,50,000'}
            </div>
          </div>

          <svg width="280" height="20" viewBox="0 0 280 20" fill="none" style="margin: 0 auto; display: block;">
            <line x1="0" y1="10" x2="110" y2="10" stroke="#C5A059" stroke-width="1.2" opacity="0.6"></line>
            <circle cx="110" cy="10" r="3" fill="#C5A059"></circle>
            <path d="M140 3 L143 10 L140 17 L137 10 Z" fill="#C5A059"></path>
            <circle cx="170" cy="10" r="3" fill="#C5A059"></circle>
            <line x1="170" y1="10" x2="280" y2="10" stroke="#C5A059" stroke-width="1.2" opacity="0.6"></line>
          </svg>
        </div>
      </div>

      <!-- PAGE 5: PAYMENT TIMELINE & POLICY -->
      <div class="proposal-section-page">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: #C5A059; font-weight: 700;">COMMISSION TERMS</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.6rem; color: #1A1816; margin-top: 0.2rem; font-weight: 400;">Payment Timeline & Policy</h2>
        </div>

        <div class="proposal-card-grid">
          <div class="proposal-event-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.05rem; margin: 0 0 0.3rem 0; color: #1A1816;">Advance Payment (50%)</h4>
            <p style="font-size: 0.85rem; color: #55524E; margin: 0; line-height: 1.5;">${activeQuotation.advancePct || '50% Advance Upon Booking Confirmation'}</p>
          </div>

          <div class="proposal-event-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.05rem; margin: 0 0 0.3rem 0; color: #1A1816;">Final Payment (50%)</h4>
            <p style="font-size: 0.85rem; color: #55524E; margin: 0; line-height: 1.5;">${activeQuotation.finalPct || '50% Balance Prior to First Event Date'}</p>
          </div>
        </div>

        <div style="background: #F5F1E8; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 8px; padding: 1.25rem; margin-top: 1.25rem;">
          <strong style="font-size: 0.88rem; color: #1A1816; display: flex; align-items: center; gap: 0.4rem;">
            💾 Raw Footage Hard Drive Requirement:
          </strong>
          <p style="font-size: 0.82rem; color: #55524E; margin: 0.3rem 0 0 0; line-height: 1.5;">
            ${activeQuotation.hdNote || 'Client to provide two 4TB high-speed USB-C External Hard Drives for raw footage & master video delivery.'}
          </p>
        </div>
      </div>

      <!-- PAGE 6: CINEMATIC VIDEO SHOWCASE & CLICKABLE CONTACT DETAILS -->
      <div class="proposal-section-page">
        <!-- VIDEO PLAYER SECTION -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: #C5A059; font-weight: 700;">CINEMATIC SHOWCASE</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #1A1816; margin-top: 0.2rem; font-weight: 700;">
            Experience Our Wedding Films
          </h2>
          <p style="font-size: 0.92rem; color: #55524E; max-width: 600px; margin: 0.4rem auto 0 auto; line-height: 1.6;">
            A glimpse into the fine-art cinematography and emotional visual storytelling crafted by Timemachine & Co.
          </p>
        </div>

        <div style="position: relative; width: 100%; max-width: 820px; margin: 0 auto 3.5rem auto; border-radius: 16px; overflow: hidden; box-shadow: 0 18px 45px rgba(0,0,0,0.16); border: 2px solid #EAE3D2;">
          <video controls poster="./videos/preview_check.jpg" playsinline style="width: 100%; display: block; max-height: 440px; object-fit: cover;">
            <source src="./videos/hero-wedding.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- CLICKABLE ADDRESS & CONTACT DETAILS SECTION -->
        <div style="text-align: center; margin-bottom: 1.75rem;">
          <!-- Gold Star Line Divider -->
          <svg width="280" height="20" viewBox="0 0 280 20" fill="none" style="margin: 0 auto 1.5rem auto; display: block;">
            <line x1="0" y1="10" x2="110" y2="10" stroke="#C5A059" stroke-width="1.2" opacity="0.6"></line>
            <circle cx="110" cy="10" r="3" fill="#C5A059"></circle>
            <path d="M140 3 L143 10 L140 17 L137 10 Z" fill="#C5A059"></path>
            <circle cx="170" cy="10" r="3" fill="#C5A059"></circle>
            <line x1="170" y1="10" x2="280" y2="10" stroke="#C5A059" stroke-width="1.2" opacity="0.6"></line>
          </svg>

          <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: #C5A059; font-weight: 700;">GET IN TOUCH WITH US</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin-top: 0.2rem; font-weight: 700;">
            Studio Contact & Location
          </h3>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; width: 100%; max-width: 100%; box-sizing: border-box; margin-bottom: 2.5rem;">
          <!-- CLICKABLE PHONE / WHATSAPP -->
          <a href="https://wa.me/919705632982" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; text-align: center; background: #F3EBDD; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 12px; padding: 1.5rem; transition: transform 0.2s ease, box-shadow 0.2s ease;">
            <div style="width: 46px; height: 46px; border-radius: 50%; background: #1A1816; color: #C5A059; display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: #C5A059; font-weight: 700; margin-bottom: 0.35rem;">PHONE & WHATSAPP</span>
            <span style="font-size: 0.95rem; font-weight: 700; color: #1A1816;">+91 97056 32982</span>
            <span style="font-size: 0.75rem; color: #55524E; margin-top: 0.2rem;">Click to chat / call</span>
          </a>

          <!-- CLICKABLE EMAIL -->
          <a href="mailto:info@timemachineworks.com" target="_blank" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; text-align: center; background: #F3EBDD; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 12px; padding: 1.5rem; transition: transform 0.2s ease, box-shadow 0.2s ease;">
            <div style="width: 46px; height: 46px; border-radius: 50%; background: #1A1816; color: #C5A059; display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: #C5A059; font-weight: 700; margin-bottom: 0.35rem;">EMAIL INQUIRIES</span>
            <span style="font-size: 0.9rem; font-weight: 700; color: #1A1816; word-break: break-all;">info@timemachineworks.com</span>
            <span style="font-size: 0.75rem; color: #55524E; margin-top: 0.2rem;">Click to send email</span>
          </a>

          <!-- CLICKABLE INSTAGRAM -->
          <a href="https://www.instagram.com/timemachineworks" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; text-align: center; background: #F3EBDD; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 12px; padding: 1.5rem; transition: transform 0.2s ease, box-shadow 0.2s ease;">
            <div style="width: 46px; height: 46px; border-radius: 50%; background: #1A1816; color: #C5A059; display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: #C5A059; font-weight: 700; margin-bottom: 0.35rem;">INSTAGRAM</span>
            <span style="font-size: 0.95rem; font-weight: 700; color: #1A1816;">@timemachineworks</span>
            <span style="font-size: 0.75rem; color: #55524E; margin-top: 0.2rem;">Click to open profile</span>
          </a>

          <!-- CLICKABLE ADDRESS / LOCATION -->
          <a href="https://maps.google.com/?q=Timemachine+%26+Co,+Jubilee+Hills,+Hyderabad" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; text-align: center; background: #F3EBDD; border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 12px; padding: 1.5rem; transition: transform 0.2s ease, box-shadow 0.2s ease;">
            <div style="width: 46px; height: 46px; border-radius: 50%; background: #1A1816; color: #C5A059; display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <span style="font-family: var(--font-ui); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: #C5A059; font-weight: 700; margin-bottom: 0.35rem;">STUDIO LOCATION</span>
            <span style="font-size: 0.88rem; font-weight: 700; color: #1A1816; line-height: 1.4;">Jubilee Hills, Road 36,<br>Hyderabad & Guntur</span>
            <span style="font-size: 0.75rem; color: #55524E; margin-top: 0.2rem;">Click for Google Maps</span>
          </a>
        </div>

        <div style="font-size: 0.78rem; color: #8C8780; text-align: center; border-top: 1px solid rgba(197, 160, 89, 0.2); padding-top: 1.5rem;">
          Timemachine & Co • Fine Art Wedding Cinematography & Photography • All Rights Reserved.
        </div>
      </div>
    `;
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
  initQuotationGenerator();
});

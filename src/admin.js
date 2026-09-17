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
  clientName: 'Niharika & Anish',
  coupleNames: 'Groom: Anish • Bride: Niharika',
  phone: '+91 9876543210',
  email: 'niharika.anish@wedding.com',
  events: [
    {
      id: 'evt-1',
      name: 'Lakshmi Devi Vratham & Engagement',
      date: '12 Nov 2026',
      location: 'Sacred Kalasham Mandapam, Hyderabad',
      candidPhoto: 1,
      candidVideo: 1,
      tradPhoto: 1,
      tradVideo: 1,
      dronePilot: 0
    },
    {
      id: 'evt-2',
      name: 'Sangeeth & Haldi Celebration',
      date: '13 Nov 2026',
      location: 'Novotel Convention Centre, Hyderabad',
      candidPhoto: 2,
      candidVideo: 2,
      tradPhoto: 1,
      tradVideo: 1,
      dronePilot: 1
    },
    {
      id: 'evt-3',
      name: 'Grand Wedding & Royal Reception',
      date: '14 Nov 2026',
      location: 'Grand Palace Hall, Hyderabad',
      candidPhoto: 2,
      candidVideo: 2,
      tradPhoto: 2,
      tradVideo: 2,
      dronePilot: 1
    }
  ],
  services: {
    pictures: true,
    films: true,
    albums: true,
    videos: true
  },
  totalPrice: '2,50,000',
  advancePct: '50% Advance Upon Booking Confirmation',
  finalPct: '50% Balance Prior to First Event Date',
  hdNote: 'Client is required to provide two 4TB high-speed USB-C External Hard Drives for raw footage & master video delivery.'
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

  const svcPic = document.getElementById('svc-pictures-check');
  const svcFilm = document.getElementById('svc-films-check');
  const svcAlbum = document.getElementById('svc-albums-check');
  const svcVid = document.getElementById('svc-videos-check');

  if (svcPic) svcPic.checked = activeQuotation.services.pictures;
  if (svcFilm) svcFilm.checked = activeQuotation.services.films;
  if (svcAlbum) svcAlbum.checked = activeQuotation.services.albums;
  if (svcVid) svcVid.checked = activeQuotation.services.videos;
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

  bindInput('svc-pictures-check', 'services', 'pictures');
  bindInput('svc-films-check', 'services', 'films');
  bindInput('svc-albums-check', 'services', 'albums');
  bindInput('svc-videos-check', 'services', 'videos');

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
    printBtn.addEventListener('click', () => {
      window.print();
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

function renderProposalPreview() {
  const container = document.getElementById('proposal-template-preview');
  if (!container) return;

  const datesSummary = activeQuotation.events.map(e => e.date).filter(Boolean).join(' • ') || 'Upcoming Wedding Dates';

  const eventsHtml = activeQuotation.events.map(e => {
    const crewLines = [];
    if (e.candidPhoto) crewLines.push(`${e.candidPhoto} Candid Photographer`);
    if (e.candidVideo) crewLines.push(`${e.candidVideo} Candid Videographer`);
    if (e.tradPhoto) crewLines.push(`${e.tradPhoto} Traditional Photographer`);
    if (e.tradVideo) crewLines.push(`${e.tradVideo} Traditional Videographer`);
    if (e.dronePilot) crewLines.push(`${e.dronePilot} Drone Pilot`);

    return `
      <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
        <div style="font-size: 0.82rem; color: #55524E; font-family: var(--font-paragraph); margin-bottom: 0.35rem;">
          ${e.date || 'TBD Date'} | ${e.location || 'Location'}
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1.35rem; color: #1A1816; margin: 0 0 0.85rem 0; font-weight: 600;">
          ${e.name || 'Event Title'}
        </h4>
        <div style="font-size: 0.88rem; color: #2C2622; line-height: 1.6;">
          ${crewLines.map(c => `<div>${c}</div>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  const svcs = activeQuotation.services;

  container.innerHTML = `
    <!-- PAGE 1: COVER PAGE (Matching Image 1) -->
    <div class="proposal-section-page" style="position: relative; background: #FBF9F5; min-height: 720px; padding: 2.5rem; border-radius: 12px; overflow: hidden; margin-bottom: 3.5rem;">
      <!-- Top Right TM&CO Logo Box -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <!-- Top Left Branch Art SVG -->
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" stroke="#C5A059" stroke-width="1.2">
          <path d="M0 0 C40 20, 80 10, 120 40 M30 15 C50 5, 70 25, 90 20 M60 30 C80 20, 100 35, 130 30"></path>
          <circle cx="90" cy="20" r="3" fill="#C5A059"></circle>
          <circle cx="120" cy="40" r="3" fill="#C5A059"></circle>
        </svg>

        <div style="border: 2px solid #C5A059; padding: 0.5rem 1rem; text-align: center;">
          <div style="font-family: var(--font-heading); font-size: 1.2rem; color: #C5A059; font-weight: 700; letter-spacing: 0.1em; line-height: 1;">TM</div>
          <div style="font-family: var(--font-heading); font-size: 0.95rem; color: #C5A059; font-weight: 700; letter-spacing: 0.1em; line-height: 1; margin-top: 0.2rem;">&CO</div>
        </div>
      </div>

      <!-- Center Client Name Greeting -->
      <div style="text-align: center; margin: 4rem 0 2rem 0;">
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #C5A059; font-weight: 400; font-style: italic;">
          ${activeQuotation.clientName || 'Name'}
        </h2>
      </div>

      <!-- Center Butterfly Graphic Art -->
      <div style="text-align: right; padding-right: 2rem; margin-bottom: 3rem;">
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none" stroke="#C5A059" stroke-width="1.2">
          <path d="M60 40 C30 10, 10 30, 40 70 C10 90, 40 120, 60 100 C80 120, 110 90, 80 70 C110 30, 90 10, 60 40 Z"></path>
          <path d="M60 100 C40 120, 30 140, 60 150 C90 140, 80 120, 60 100 Z"></path>
        </svg>
      </div>

      <!-- Banner Tagline -->
      <div style="margin-top: 2rem;">
        <h3 style="font-family: var(--font-heading); font-size: 1.45rem; letter-spacing: 0.14em; text-transform: uppercase; color: #C5A059; font-weight: 400; margin: 0;">
          BECAUSE EVERY <span style="font-size: 1.8rem; letter-spacing: 0.08em;">FRAME</span>
        </h3>
        <h3 style="font-family: var(--font-heading); font-size: 1.45rem; letter-spacing: 0.14em; text-transform: uppercase; color: #C5A059; font-weight: 400; margin: 0.2rem 0 0 0;">
          HAS A <span style="font-size: 1.8rem; letter-spacing: 0.08em;">STORY</span> TO TELL
        </h3>
      </div>

      <div style="margin-top: 3.5rem; border-top: 1px solid rgba(197, 160, 89, 0.25); padding-top: 1.5rem;">
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: #C5A059; font-weight: 600; margin: 0 0 0.4rem 0;">
          Dear ${activeQuotation.clientName || 'Name'}
        </h4>
        <p style="font-size: 0.92rem; color: #2C2622; line-height: 1.65; margin: 0;">
          We appreciate the opportunity to be a part of your special day and capture the timeless moments that will make your wedding a cherished memory.
        </p>
      </div>
    </div>

    <!-- PAGE 2: ABOUT US (Matching Image 2) -->
    <div class="proposal-section-page" style="margin-bottom: 3.5rem;">
      <div style="position: relative; border-radius: 12px; overflow: hidden; height: 260px; margin-bottom: 2.5rem; background: #1A1816;">
        <img src="./images/niharika/main-shrine-couple.jpg" alt="Showcase Banner" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.55; filter: grayscale(100%);">
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #FFFFFF; padding: 1.5rem;">
          <div style="border: 1.5px solid #C5A059; padding: 0.25rem 0.6rem; color: #C5A059; font-family: var(--font-heading); font-size: 0.75rem; letter-spacing: 0.15em; margin-bottom: 0.5rem;">TM & CO</div>
          <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 400; letter-spacing: 0.18em; margin: 0; text-transform: uppercase;">
            TIMEMACHINE & CO
          </h2>
          <span style="font-family: var(--font-ui); font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: #E5C98D; margin-top: 0.3rem;">PRESENTS</span>
        </div>
      </div>

      <div class="proposal-divider-star">— ✦ —</div>

      <div style="text-align: center; max-width: 680px; margin: 1.5rem auto;">
        <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 1rem 0; font-weight: 600;">About Us</h2>
        <p style="font-size: 0.95rem; color: #2C2622; line-height: 1.75; margin: 0;">
          At Timemachine & Co, we freeze fleeting moments to make your forever love story a timeless masterpiece, weaving the magic of your wedding into a tapestry of emotions, traditions, and heirlooms. Embark on your journey with us, and create a visual legacy treasured for generations to come.
        </p>
      </div>

      <div class="proposal-divider-star">— ✦ —</div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
        <div style="height: 280px; border-radius: 10px; overflow: hidden; border: 1px solid #EAE3D2;">
          <img src="./images/niharika/bridal-braid.jpg" alt="Gallery Portrait" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="height: 132px; border-radius: 10px; overflow: hidden; border: 1px solid #EAE3D2;">
            <img src="./images/niharika/lotus-portrait.jpg" alt="Gallery 2" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="height: 132px; border-radius: 10px; overflow: hidden; border: 1px solid #EAE3D2;">
            <img src="./images/niharika/pooja-lighting.jpg" alt="Gallery 3" style="width:100%; height:100%; object-fit:cover;">
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE 3: YOUR EVENTS (Matching Image 3) -->
    <div class="proposal-section-page" style="margin-bottom: 3.5rem;">
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 1.75rem 0; font-weight: 600;">Your Events</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
        ${eventsHtml || '<p style="text-align:center;">No events configured.</p>'}
      </div>
    </div>

    <!-- PAGE 4: SERVICES OFFERED (Matching Image 4) -->
    <div class="proposal-section-page" style="margin-bottom: 3.5rem;">
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 1.75rem 0; font-weight: 600;">Services Offered</h2>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${svcs.pictures ? `
          <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0;">Edited Pictures</h4>
            <p style="font-size: 0.9rem; color: #2C2622; line-height: 1.65; margin: 0;">
              You shall receive 1,000 fully edited images from all events, portraying your wedding story, delivered on the cloud within 60 days from payment clearance.
            </p>
          </div>
        ` : ''}

        ${svcs.films ? `
          <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0;">Cinematic Wedding Films</h4>
            <p style="font-size: 0.9rem; color: #2C2622; line-height: 1.65; margin: 0 0 0.8rem 0;">
              1 cinematic HD film with the best footage from your events, edited according to our style, to be delivered on cloud within 60 days from payment clearance. You can suggest any number of changes but all at once and within a week of delivery.
            </p>
            <div style="font-size: 0.85rem; color: #55524E; font-style: italic;">
              *Changes will be accepted only once from 2nd time Rs 15,000 will be charged extra.
            </div>
          </div>
        ` : ''}

        ${svcs.albums ? `
          <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0;">Printed Albums</h4>
            <p style="font-size: 0.9rem; color: #2C2622; line-height: 1.65; margin: 0;">
              You shall receive 3 Printed albums from the best events each album has 40 sheets. An extra sheet will incur an additional charge of ₹600 per sheet.
            </p>
          </div>
        ` : ''}

        ${svcs.videos ? `
          <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0;">Traditional Videos</h4>
            <p style="font-size: 0.9rem; color: #2C2622; line-height: 1.65; margin: 0;">
              You shall receive 5 long traditional video of all events in documentary style, delivered within 75 days from payment clearance.
            </p>
          </div>
        ` : ''}
      </div>

      <div class="proposal-divider-star" style="margin: 2.5rem 0;">— ✦ —</div>

      <!-- Quote Price Callout Box -->
      <div style="text-align: center; padding: 2rem 1rem;">
        <h3 style="font-family: var(--font-heading); font-size: 1.65rem; color: #C5A059; margin: 0 0 0.5rem 0; font-weight: 600;">
          Dear ${activeQuotation.clientName || 'Name'}
        </h3>
        <p style="font-size: 0.95rem; color: #2C2622; margin: 0 0 1rem 0;">
          Your final quote price would be
        </p>
        <div style="font-family: var(--font-heading); font-size: 2.8rem; color: #C5A059; font-weight: 700;">
          ₹${activeQuotation.totalPrice || '0'}
        </div>
      </div>

      <div class="proposal-divider-star" style="margin: 2.5rem 0;">— ✦ —</div>
    </div>

    <!-- PAGE 5: PAYMENT TIMELINE (Matching Image 5) -->
    <div class="proposal-section-page" style="margin-bottom: 3.5rem;">
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 1.75rem 0; font-weight: 600;">Payment Timeline</h2>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.5rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0; font-weight: 600;">Advance Payment</h4>
          <p style="font-size: 0.92rem; color: #2C2622; margin: 0; line-height: 1.6;">
            50% of the total billing value to be paid as an advance to block the dates.
          </p>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.5rem 0; font-weight: 600;">Final Payment</h4>
          <p style="font-size: 0.92rem; color: #2C2622; margin: 0 0 0.8rem 0; line-height: 1.6;">
            Remaining 50% payment along with Transportation charges shall be done before/after wedding before receiving Raw footage.
          </p>
          <div style="font-size: 0.85rem; color: #55524E; font-style: italic;">
            *You're required to provide us 2 units of 4TB Hard Drives to ensure the backup and safety of your data.
          </div>
        </div>
      </div>

      <div style="font-size: 0.92rem; color: #1A1816; font-weight: 600; margin-top: 1.5rem;">
        Note : Incase of any cancellation, the advance or the payments cannot be returned.
      </div>
    </div>

    <!-- PAGE 6: ADDITIONAL SERVICES (Matching Image 6) -->
    <div class="proposal-section-page" style="margin-bottom: 3.5rem;">
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 0.6rem 0; font-weight: 600;">Additional Services</h2>
      <p style="font-size: 0.92rem; color: #2C2622; margin: 0 0 1.75rem 0; line-height: 1.6;">
        If you're interested in expanding your package, we also provide additional services that are not included in the standard package:
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.5rem; position: relative;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.5rem 0;">LED Wall</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0 0 1rem 0; line-height: 1.6;">
            Digital LED Screens to showcase your Event video from multiple cameras LIVE. Equipped with a P3 display, of about 10 ft width and 8ft height.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #1A1816;">₹25000</div>
            <button type="button" style="background: #F8F4EC; border: none; padding: 0.4rem 1.2rem; border-radius: 999px; font-size: 0.82rem; font-weight: 600; cursor: pointer; color: #1A1816;">Select</button>
          </div>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem; position: relative;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.5rem 0;">Web Live</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0 0 1rem 0; line-height: 1.6;">
            Live telecasting of your event video footage on the web. You're required to provide a name to generate a custom link that you can share with your friends and family so that they can watch the event remotely.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #1A1816;">₹15000</div>
            <button type="button" style="background: #E6D7B8; border: none; padding: 0.4rem 1.2rem; border-radius: 999px; font-size: 0.82rem; font-weight: 600; cursor: pointer; color: #1A1816;">Select</button>
          </div>
        </div>

        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.5rem; position: relative;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.5rem 0;">Drone</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0 0 1rem 0; line-height: 1.6;">
            If you wish for a drone service for your events it would be chargeable at Rs.15,000/- per event. The drones will be used to cover decor only and are subject to government permissions.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #1A1816;">₹15000</div>
            <button type="button" style="background: #F8F4EC; border: none; padding: 0.4rem 1.2rem; border-radius: 999px; font-size: 0.82rem; font-weight: 600; cursor: pointer; color: #1A1816;">Select</button>
          </div>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.5rem; position: relative;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.5rem 0;">Print Albums</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0 0 1rem 0; line-height: 1.6;">
            Premium designer album of 40 sheets portraying your wedding story and each costs
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #1A1816;">₹25000</div>
            <button type="button" style="background: #E6D7B8; border: none; padding: 0.4rem 1.2rem; border-radius: 999px; font-size: 0.82rem; font-weight: 600; cursor: pointer; color: #1A1816;">Select</button>
          </div>
        </div>
      </div>

      <div class="proposal-divider-star" style="margin: 2.5rem 0;">— ✦ —</div>
    </div>

    <!-- PAGE 7: TERMS OF SERVICE (Matching Images 7 & 8) -->
    <div class="proposal-section-page" style="margin-bottom: 3.5rem;">
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 0.6rem 0; font-weight: 600;">Terms of Service</h2>
      <p style="font-size: 0.92rem; color: #2C2622; margin: 0 0 1.75rem 0; line-height: 1.6;">
        Our terms of service, including cancellation policies and copyright information, are detailed below for your review.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.1rem;">
        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Travel Expense</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            You shall arrange for the travel and accommodation of our shoot crew for all your events occurring in places away from hyderabad.
          </p>
        </div>

        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Project Cancellation</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            If you cancel the project after the advance payment & reserving team schedules for you, the payments cannot be returned.
          </p>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Delivery Timeline</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            We strictly adhere to deliveries on the mentioned timeline. We do not entertain any early requests, as it will hamper timelines of other deliverables.
          </p>
        </div>

        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Change of Plans</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Any change of plans or postponement of events will be accommodated with the best team available on the new dates and chargeable depending on the type of events and crew required.
          </p>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Shoot Permissions</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Please note that all the required government permissions for any couple shoot shall be attained by the clients and the team is in no way responsible for it. In case of any fines/ inconvenience to the shoot, we are not to be held responsible.
          </p>
        </div>

        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Print Albums</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Photos selection has to be given by the client and that is mandatory. After the selection has been given it will take 25-30 days for the team to send you the layouts and once the approval has been made from the client, then it will take a week to hand over the albums. If selections are not made for more than 7 months from the date of the event then each album will be charged Rs. 15,000/- extra
          </p>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Security for Loss</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Client agrees to indemnify and hold harmless to the crew for any liability, damage or loss, related to technological failure, including data loss.
          </p>
        </div>

        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Data Safety</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Although we've never lost any event's data in the past 12 years, in the rarest probability of any data loss, we are liable to shoot another event for free or deduct the corresponding event charges.
          </p>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Additional Services Quality</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            We don't take responsibility for the quality of Web-live, LED walls and other services, since they are provided by 3rd party vendors. Our primary focus lies on great work with our photos & videos.
          </p>
        </div>

        <div style="background: #E6D7B8; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Video Revisions Timeline:</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Any requests for video changes must be communicated within 20-30days from the date of final output delivery.
          </p>
        </div>

        <div style="background: #F3EBDD; border-radius: 12px; padding: 1.35rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #1A1816; margin: 0 0 0.4rem 0;">Final Payment & Editing:</h4>
          <p style="font-size: 0.9rem; color: #2C2622; margin: 0; line-height: 1.6;">
            Post-event editing work will begin only after the final payment has been successfully completed. This ensures a streamlined workflow and helps us maintain our quality standards.
          </p>
        </div>
      </div>

      <div class="proposal-divider-star" style="margin: 2.5rem 0;">— ✦ —</div>
    </div>

    <!-- PAGE 8: NEXT STEPS & BRAND FOOTER (Matching Image 9) -->
    <div class="proposal-section-page">
      <h2 style="font-family: var(--font-heading); font-size: 1.85rem; color: #1A1816; margin: 0 0 1rem 0; font-weight: 600;">Next Steps</h2>
      <p style="font-size: 0.95rem; color: #2C2622; line-height: 1.75; margin: 0 0 1.25rem 0;">
        Please take a moment to review the proposal and attached terms of service. If you have any questions or would like to discuss specific details, feel free to reach out
      </p>
      <p style="font-size: 0.95rem; color: #2C2622; line-height: 1.75; margin: 0 0 1.5rem 0;">
        We eagerly anticipate the opportunity to contribute to your special day and create a visual story that will be cherished for a lifetime.
      </p>
      <div style="font-size: 0.95rem; color: #1A1816; font-weight: 600; margin-bottom: 2.5rem;">
        Best regards,<br>
        <strong style="font-size: 1.1rem; font-family: var(--font-heading);">Timemachine & Co.</strong>
      </div>

      <!-- Centered Brand Logo Footer -->
      <div style="text-align: center; border-top: 1px solid rgba(197, 160, 89, 0.25); padding-top: 3rem; margin-top: 3rem;">
        <div style="display: inline-block; border: 2px solid #C5A059; padding: 0.6rem 1.2rem; text-align: center; margin-bottom: 1rem;">
          <div style="font-family: var(--font-heading); font-size: 1.5rem; color: #C5A059; font-weight: 700; letter-spacing: 0.1em; line-height: 1;">TM</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; color: #C5A059; font-weight: 700; letter-spacing: 0.1em; line-height: 1; margin-top: 0.2rem;">&CO</div>
        </div>

        <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: #1A1816; margin: 0 0 0.3rem 0; font-weight: 600;">TimemachineandCo</h3>
        <div style="font-size: 0.88rem; color: #55524E; margin-bottom: 0.2rem;">https://www.timemachineworks.com</div>
        <div style="font-size: 0.88rem; color: #C5A059; font-weight: 600;">+919705632982</div>
      </div>
    </div>
  `;
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

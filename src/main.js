import { PORTFOLIO_ITEMS, HERO_VIDEOS, EXHIBITIONS, MONOGRAPHS, STUDIO_INFO } from './data/portfolio.js';

// ==========================================================================
// 1. STATE & AUDIO SYNTHESIZER
// ==========================================================================
let currentFilter = 'all';
let soundEnabled = true;
let activeHeroVideoIndex = 0;

// Web Audio API Camera Shutter Click Synthesizer
function playShutterSound() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Create click noise buffer
    const bufferSize = ctx.sampleRate * 0.04; // 40ms shutter snap
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15));
    }
    
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    
    // Bandpass filter for mechanical click texture
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 3.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    whiteNoise.start();
  } catch (e) {
    console.warn('Audio context init failed or blocked:', e);
  }
}

// ==========================================================================
// 2. HERO FLOATING CARDS & VIDEO CONTROLS
// ==========================================================================
function renderHeroFloatingCards() {
  const container = document.getElementById('hero-cards-slider');
  if (!container) return;

  const featuredItems = PORTFOLIO_ITEMS.filter(item => item.featured).slice(0, 5);
  
  container.innerHTML = featuredItems.map((item, idx) => {
    const isVideo = !!item.videoUrl;
    return `
      <div class="hero-card-item" data-id="${item.id}">
        ${isVideo ? `
          <video class="hero-card-img" autoplay loop muted playsinline poster="${item.image}">
            <source src="${item.videoUrl}" type="video/mp4">
          </video>
        ` : `
          <img src="${item.image}" alt="${item.title}" class="hero-card-img" loading="lazy">
        `}
        <div class="hero-card-overlay">
          <div class="hero-card-meta">${item.category.toUpperCase()} • ${item.year}</div>
          <h3 class="hero-card-title">${item.title}</h3>
        </div>
      </div>
    `;
  }).join('');

  // Event listener for hero cards click to open lightbox
  container.querySelectorAll('.hero-card-item').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = PORTFOLIO_ITEMS.find(p => p.id === id);
      if (item) openLightbox(item);
    });
  });
}

function initHeroVideoControls() {
  const video = document.getElementById('hero-bg-video');
  const wrapper = document.getElementById('hero-video-wrapper');
  const playPauseBtn = document.getElementById('hero-video-playpause');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const focusBtn = document.getElementById('hero-video-focus');
  const selectors = document.querySelectorAll('.video-selector-pill');

  if (!video) return;

  // Play / Pause Toggle
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
      } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
    });
  }

  // Focus View Toggle
  if (focusBtn) {
    focusBtn.addEventListener('click', () => {
      wrapper.classList.toggle('full-focus');
    });
  }

  // Switch Video Sources
  selectors.forEach(pill => {
    pill.addEventListener('click', () => {
      selectors.forEach(s => s.classList.remove('active'));
      pill.classList.add('active');
      const index = parseInt(pill.getAttribute('data-video-index'), 10);
      if (HERO_VIDEOS[index]) {
        video.src = HERO_VIDEOS[index].videoUrl;
        video.play();
        activeHeroVideoIndex = index;
      }
    });
  });
}

function initHeroVideoAnimation() {
  const video = document.getElementById('hero-bg-video');
  const heroContent = document.getElementById('hero-content');
  if (!video || !heroContent) return;

  const handleTimeUpdate = () => {
    const t = video.currentTime;
    // Stage 1 (0s - 3.2s): Door is closed/opening -> Text stays hidden
    if (t < 3.2) {
      heroContent.classList.remove('stage-enter', 'stage-minimize');
    } 
    // Stage 2 (3.2s - 7.5s): Inside house after door opens -> Text fades in centered
    else if (t >= 3.2 && t < 7.5) {
      heroContent.classList.add('stage-enter');
      heroContent.classList.remove('stage-minimize');
    } 
    // Stage 3 (7.5s+): After some time -> Smoothly moves down & reduces size
    else if (t >= 7.5) {
      heroContent.classList.add('stage-minimize');
    }
  };

  video.addEventListener('timeupdate', handleTimeUpdate);
  handleTimeUpdate();
}

// ==========================================================================
// 3. PORTFOLIO GRID & FILTERING
// ==========================================================================
function renderPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const filtered = currentFilter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === currentFilter);

  // Column span pattern generator for Swiss asymmetric masonry grid
  const colSpans = ['col-6', 'col-6', 'col-4', 'col-4', 'col-4', 'col-6', 'col-6', 'col-12'];

  grid.innerHTML = filtered.map((item, idx) => {
    const colClass = colSpans[idx % colSpans.length];
    const isVideo = !!item.videoUrl;

    return `
      <div class="portfolio-card ${colClass}" data-id="${item.id}">
        <div class="portfolio-img-container ratio-${item.aspectRatio.replace('/', '-')}">
          ${isVideo ? `
            <video class="portfolio-img" autoplay loop muted playsinline poster="${item.image}">
              <source src="${item.videoUrl}" type="video/mp4">
            </video>
          ` : `
            <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
          `}
          <div style="position: absolute; top: 1rem; right: 1rem;">
            <span class="exif-badge-pill">
              ${isVideo ? 'MOTION' : item.exif.camera.split(' ')[0]}
            </span>
          </div>
        </div>

        <div class="portfolio-card-info">
          <div>
            <h3 class="portfolio-card-title">${item.title}</h3>
            <p class="portfolio-card-sub">${item.subtitle} — ${item.location}</p>
          </div>
          <div class="exif-badge-pill">
            ${item.exif.focal} • ${item.exif.aperture}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach click events
  grid.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = PORTFOLIO_ITEMS.find(p => p.id === id);
      if (item) openLightbox(item);
    });
  });
}

function initFilterListeners() {
  const filterBtns = document.querySelectorAll('#filter-group .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderPortfolioGrid();
    });
  });

  initSelectedWorksFilter();
}

function initSelectedWorksFilter() {
  const filterBtns = document.querySelectorAll('.works-filter-btn');
  const cards = document.querySelectorAll('.works-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

// ==========================================================================
// 4. LIGHTBOX MODAL & CAMERA EXIF METADATA
// ==========================================================================
function openLightbox(item) {
  playShutterSound();

  const modal = document.getElementById('lightbox-modal');
  const imgPreview = document.getElementById('lightbox-image');
  const videoPreview = document.getElementById('lightbox-video');

  const catEl = document.getElementById('lb-category');
  const titleEl = document.getElementById('lb-title');
  const subEl = document.getElementById('lb-subtitle');
  const descEl = document.getElementById('lb-description');

  // EXIF Elements
  document.getElementById('exif-camera').innerText = item.exif.camera || '-';
  document.getElementById('exif-lens').innerText = item.exif.lens || '-';
  document.getElementById('exif-aperture').innerText = item.exif.aperture || '-';
  document.getElementById('exif-shutter').innerText = item.exif.shutter || '-';
  document.getElementById('exif-iso').innerText = item.exif.iso || '-';
  document.getElementById('exif-format').innerText = item.exif.format || '-';
  document.getElementById('exif-location').innerText = item.location || '-';

  catEl.innerText = `${item.category.toUpperCase()} • ${item.year}`;
  titleEl.innerText = item.title;
  subEl.innerText = item.subtitle;
  descEl.innerText = item.description;

  if (item.videoUrl) {
    imgPreview.style.display = 'none';
    videoPreview.style.display = 'block';
    videoPreview.src = item.videoUrl;
    videoPreview.play();
  } else {
    videoPreview.style.display = 'none';
    videoPreview.pause();
    imgPreview.style.display = 'block';
    imgPreview.src = item.image;
    imgPreview.alt = item.title;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const videoPreview = document.getElementById('lightbox-video');
  if (videoPreview) videoPreview.pause();
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initLightboxListeners() {
  const closeBtn = document.getElementById('lightbox-close');
  const modal = document.getElementById('lightbox-modal');
  const inquireBtn = document.getElementById('lb-inquire-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      closeLightbox();
      const inquirySec = document.getElementById('inquiry');
      if (inquirySec) inquirySec.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 5. EXHIBITIONS & MONOGRAPHS RENDER
// ==========================================================================
function renderExhibitionsAndMonographs() {
  const exhibContainer = document.getElementById('exhibition-list');
  const monoContainer = document.getElementById('monographs-list');

  if (exhibContainer) {
    exhibContainer.innerHTML = EXHIBITIONS.map(e => `
      <div class="exhibition-item-row">
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-heading);">${e.title}</h4>
          <p style="font-family: var(--font-paragraph); font-size: 0.9rem; color: var(--color-body-muted);">${e.venue} — ${e.city}</p>
        </div>
        <div style="text-align: right;">
          <span class="ui-tag">${e.type}</span>
          <p style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--color-heading);">${e.year}</p>
        </div>
      </div>
    `).join('');
  }

  if (monoContainer) {
    monoContainer.innerHTML = MONOGRAPHS.map(m => `
      <div class="exhibition-card" style="display: flex; gap: 1.5rem; align-items: center;">
        <img src="${m.cover}" alt="${m.title}" style="width: 100px; height: 130px; object-fit: cover; border-radius: 8px; box-shadow: var(--shadow-subtle);">
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-heading);">${m.title}</h4>
          <p style="font-family: var(--font-paragraph); font-size: 0.9rem; color: var(--color-body-muted); margin: 0.3rem 0;">Published by ${m.publisher}</p>
          <p class="ui-tag" style="font-size: 0.65rem;">${m.pages} • ${m.isbn}</p>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 6. FORM HANDLER & SOUND TOGGLE
// ==========================================================================
function initFormAndSoundHandlers() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundLabel = document.getElementById('sound-label');
  const form = document.getElementById('commission-form');

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('active', soundEnabled);
      if (soundLabel) soundLabel.innerText = soundEnabled ? 'SHUTTER AUDIO' : 'AUDIO OFF';
      if (soundEnabled) playShutterSound();
    });
  }

  if (form) {
    form.addEventListener('click', (e) => {
      // Trigger subtle shutter audio when user clicks input fields
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        playShutterSound();
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      playShutterSound();

      const name = document.getElementById('client-name').value;
      const type = document.getElementById('project-type').value;

      form.innerHTML = `
        <div style="padding: 3rem 1rem; text-align: center;">
          <div class="exif-badge-pill" style="margin-bottom: 1rem; background-color: var(--color-sage-light); font-size: 0.8rem; padding: 0.5rem 1.2rem;">
            COMMISSION TRANSMITTED
          </div>
          <h3 class="heading-section">Thank you, ${name}.</h3>
          <p class="subtitle-text" style="margin-top: 0.5rem;">
            Your brief for <strong>${type}</strong> has been logged in our Zürich studio registry.<br>
            Our principal curator will respond within 24 business hours.
          </p>
        </div>
      `;
    });
  }

  // Motion & Wedding card click listeners
  const featuredMotionCard = document.getElementById('featured-motion-card');
  const playReelBtn = document.getElementById('play-reel-btn');
  const featuredWeddingCard = document.getElementById('featured-wedding-video-card');
  const playWeddingReelBtn = document.getElementById('play-wedding-reel-btn');

  const openMotionReel = () => {
    const motionItem = PORTFOLIO_ITEMS.find(p => p.id === 'work-6');
    if (motionItem) openLightbox(motionItem);
  };

  const openWeddingReel = () => {
    const weddingItem = PORTFOLIO_ITEMS.find(p => p.id === 'work-wedding-1');
    if (weddingItem) openLightbox(weddingItem);
  };

  if (featuredMotionCard) featuredMotionCard.addEventListener('click', openMotionReel);
  if (playReelBtn) playReelBtn.addEventListener('click', openMotionReel);
  if (featuredWeddingCard) featuredWeddingCard.addEventListener('click', openWeddingReel);
  if (playWeddingReelBtn) playWeddingReelBtn.addEventListener('click', openWeddingReel);
}

// ==========================================================================
// 4B. CLASSY WEDDING FILM STORY MONOGRAPH MODAL HANDLER
// ==========================================================================
const WEDDING_FILM_STORIES = {
  "Niharika's Lakshmi Devi Vratham": {
    categoryTag: "LAKSHMI DEVI VRATHAM CEREMONY",
    coupleTitle: "Niharika's Lakshmi Devi Vratham",
    locationSub: "Divine Kalasham Mandapam • Lakshmi Devi Vratham",
    videoUrl: "./videos/hero-wedding.mp4",
    heroPoster: "./images/niharika/main-shrine-couple.jpg",
    flankLeft: {
      img: "./images/niharika/lotus-portrait.jpg",
      caption: "BRIDE NIHARIKA & LOTUS POOJA"
    },
    flankRight: {
      img: "./images/niharika/pooja-kalasham.jpg",
      caption: "SACRED KALASHAM BLESSINGS"
    },
    narrative: `
      <p>A divine cinematic story celebrating Niharika's sacred Lakshmi Devi Vratham (Varalakshmi Vratam) ceremony. Performed to invoke health, prosperity, and divine grace, the holy sanctuary was decorated with lotus flowers, fresh mango leaves, and handcrafted silk drapery.</p>
      <p>From the grand Lakshmi Devi idol centerpiece and sacred Kalasham sthapana to the lighting of the holy brass lamps, Sri Suktam chanting, and family blessings, every moment captures spiritual elegance and radiant warmth.</p>
    `,
    reviewQuote: `"Timemachine captured the divine aura, holy kumkum archana, and radiant family joy of my Lakshmi Devi Vratham so beautifully. Every memory from the pooja feels preserved in true cinema magic."`,
    reviewAuthor: "— Niharika (Bride)",
    specLocation: "Grand Lakshmi Mandapam",
    specVenue: "Sacred Vratham Sanctuary",
    specDuration: "04:45 • 8K RAW Cinema",
    specCamera: "RED V-Raptor 8K VV",
    specLens: "Leica Summilux-C T1.4",
    specFormat: "35mm Fine Art Color",
    timeline: [
      { time: "06:30", text: "Lakshmi Kalasham Sthapana & Mandapam Alankaram" },
      { time: "08:15", text: "Lighting of Sacred Diya & Pranam Prayer" },
      { time: "09:45", text: "Kumkuma Archana & Sri Suktam Chanting" },
      { time: "11:00", text: "Sacred Kalasham Processional & Couple Blessings" },
      { time: "12:30", text: "Traditional Naivedyam Feast & Family Celebrations" }
    ],
    stills: [
      "./images/niharika/main-shrine-couple.jpg",
      "./images/niharika/lotus-portrait.jpg",
      "./images/niharika/pooja-kalasham.jpg",
      "./images/niharika/pooja-prayer.jpg",
      "./images/niharika/couple-doorway.jpg",
      "./images/niharika/pooja-lighting.jpg",
      "./images/niharika/groom-lighting.jpg",
      "./images/niharika/doorway-portrait.jpg",
      "./images/niharika/lakshmi-shrine.jpg",
      "./images/niharika/mandapam-garland.jpg",
      "./images/niharika/preparation.jpg"
    ]
  },
  "Niharika's Vratham": {
    categoryTag: "LAKSHMI DEVI VRATHAM CEREMONY",
    coupleTitle: "Niharika's Lakshmi Devi Vratham",
    locationSub: "Divine Kalasham Mandapam • Lakshmi Devi Vratham",
    videoUrl: "./videos/hero-wedding.mp4",
    heroPoster: "./images/niharika/main-shrine-couple.jpg",
    flankLeft: {
      img: "./images/niharika/lotus-portrait.jpg",
      caption: "BRIDE NIHARIKA & LOTUS POOJA"
    },
    flankRight: {
      img: "./images/niharika/pooja-kalasham.jpg",
      caption: "SACRED KALASHAM BLESSINGS"
    },
    narrative: `
      <p>A divine cinematic story celebrating Niharika's sacred Lakshmi Devi Vratham (Varalakshmi Vratam) ceremony. Performed to invoke health, prosperity, and divine grace, the holy sanctuary was decorated with lotus flowers, fresh mango leaves, and handcrafted silk drapery.</p>
      <p>From the grand Lakshmi Devi idol centerpiece and sacred Kalasham sthapana to the lighting of the holy brass lamps, Sri Suktam chanting, and family blessings, every moment captures spiritual elegance and radiant warmth.</p>
    `,
    reviewQuote: `"Timemachine captured the divine aura, holy kumkum archana, and radiant family joy of my Lakshmi Devi Vratham so beautifully. Every memory from the pooja feels preserved in true cinema magic."`,
    reviewAuthor: "— Niharika (Bride)",
    specLocation: "Grand Lakshmi Mandapam",
    specVenue: "Sacred Vratham Sanctuary",
    specDuration: "04:45 • 8K RAW Cinema",
    specCamera: "RED V-Raptor 8K VV",
    specLens: "Leica Summilux-C T1.4",
    specFormat: "35mm Fine Art Color",
    timeline: [
      { time: "06:30", text: "Lakshmi Kalasham Sthapana & Mandapam Alankaram" },
      { time: "08:15", text: "Lighting of Sacred Diya & Pranam Prayer" },
      { time: "09:45", text: "Kumkuma Archana & Sri Suktam Chanting" },
      { time: "11:00", text: "Sacred Kalasham Processional & Couple Blessings" },
      { time: "12:30", text: "Traditional Naivedyam Feast & Family Celebrations" }
    ],
    stills: [
      "./images/niharika/main-shrine-couple.jpg",
      "./images/niharika/lotus-portrait.jpg",
      "./images/niharika/pooja-kalasham.jpg",
      "./images/niharika/pooja-prayer.jpg",
      "./images/niharika/couple-doorway.jpg",
      "./images/niharika/pooja-lighting.jpg",
      "./images/niharika/groom-lighting.jpg",
      "./images/niharika/doorway-portrait.jpg",
      "./images/niharika/lakshmi-shrine.jpg",
      "./images/niharika/mandapam-garland.jpg",
      "./images/niharika/preparation.jpg"
    ]
  },
  "A Saga in Dhaka": {
    categoryTag: "DESTINATION WEDDING FILM",
    coupleTitle: "A Saga in Dhaka",
    locationSub: "Royal Palace • Dhaka, Bangladesh",
    videoUrl: "./videos/hero-wedding.mp4",
    flankLeft: {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      caption: "PALACE COURTYARD"
    },
    flankRight: {
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
      caption: "ROYAL HENNA CELEBRATION"
    },
    narrative: `
      <p>Set within the monumental Royal Palace in Dhaka, this film is a cinematic tribute to heritage, intense emotion, and opulent royal celebrations. From the sacred Nikah vows exchanged under handcrafted floral canopies to the midnight fireworks over the courtyard, every moment was captured with 8K cinema optics.</p>
      <p>The couple's deep reverence for tradition combined with a contemporary aesthetic created an unforgettable spectacle of color, music, and raw human connection.</p>
    `,
    reviewQuote: `"Timemachine created an absolute masterpiece for our wedding. Watching our film brings tears to our eyes every single time. It feels like watching a high-budget cinema release about our love."`,
    reviewAuthor: "— Safa & Tanvir (Bride & Groom)",
    specLocation: "Dhaka, Bangladesh",
    specVenue: "Royal Palace Gardens",
    specDuration: "05:20 • 8K RAW Cinema",
    specCamera: "RED V-Raptor 8K VV",
    specLens: "Leica Summilux-C T1.4",
    specFormat: "35mm Anamorphic Print",
    timeline: [
      { time: "11:00", text: "Traditional Pithi & Turmeric Rituals" },
      { time: "15:30", text: "Royal Nikah Ceremony under Floral Canopy" },
      { time: "19:00", text: "Palace Banquet & Live Sitar Ensemble" },
      { time: "22:30", text: "Midnight Fireworks & Lantern Release" }
    ],
    stills: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800"
    ]
  },
  "Maitri & Aneesh": {
    categoryTag: "LUXURY ESTATE CEREMONY",
    coupleTitle: "Maitri & Aneesh",
    locationSub: "Villa d'Este • Lake Como, Italy",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4",
    flankLeft: {
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
      caption: "LAKEFRONT GARDEN VOWS"
    },
    flankRight: {
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
      caption: "VILLA D'ESTE DOCK"
    },
    narrative: `
      <p>Perched gracefully along the serene shorelines of Lake Como, Villa d'Este served as the backdrop for Maitri & Aneesh's sunset vows. Arriving by mahogany Riva boat across glassy waters, their intimate ceremony radiated Italian romance.</p>
      <p>Our focus was on capturing the unscripted glances, the gentle breeze rustling through ancient cypress trees, and the golden hour glow illuminating their outdoor banquet.</p>
    `,
    reviewQuote: `"Timemachine didn't just capture our wedding; they bottled the magic, tears, and joy of Lake Como forever. Watching our film brings back every emotional nuance we felt under the sunset."`,
    reviewAuthor: "— Maitri & Aneesh (Bride & Groom)",
    specLocation: "Lake Como, Italy",
    specVenue: "Villa d'Este Estate",
    specDuration: "04:15 • 4K Cinema",
    specCamera: "ARRI Alexa Mini LF",
    specLens: "ARRI Signature Prime 35mm",
    specFormat: "Kodak 250D Film Print",
    timeline: [
      { time: "14:00", text: "Riva Boat Arrival across Lake Como" },
      { time: "16:30", text: "Terrace Sunset Vows Exchange" },
      { time: "18:30", text: "Garden Cocktail & Violin Serenade" },
      { time: "21:00", text: "Candlelit Banquet & Champagne Toast" }
    ],
    stills: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800"
    ]
  },
  "Dhruv & Pippa": {
    categoryTag: "SWISS ALPINE MOUNTAIN WEDDING",
    coupleTitle: "Dhruv & Pippa",
    locationSub: "Highland Solitude • St. Moritz, Switzerland",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-clouds-over-a-mountain-range-42894-large.mp4",
    flankLeft: {
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
      caption: "ALPINES CELEBRATION"
    },
    flankRight: {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800",
      caption: "MOUNTAIN CHAPEL"
    },
    narrative: `
      <p>Surrounded by snow-capped peaks and crisp alpine air, Dhruv & Pippa's winter wedding in St. Moritz was a story of warm intimacy amidst dramatic mountain wilderness.</p>
      <p>From an intimate chapel ceremony to a horse-drawn carriage ride through snow-draped pine forests, every frame captures atmospheric elegance and quiet, deep devotion.</p>
    `,
    reviewQuote: `"Atmospheric, artistic, and deeply personal. Timemachine captured our quietest moments with such dignity and grace. It feels like an art-house film about our life together."`,
    reviewAuthor: "— Dhruv & Pippa (Bride & Groom)",
    specLocation: "St. Moritz, Switzerland",
    specVenue: "Alpine Chapel & Kulm Hotel",
    specDuration: "05:40 • 4K Cinema",
    specCamera: "RED V-Raptor 8K VV",
    specLens: "Leica Summilux-C 50mm",
    specFormat: "Winter Monochrome & Color",
    timeline: [
      { time: "11:00", text: "Historic Alpine Chapel Vows" },
      { time: "14:00", text: "Horse Carriage Snow Tour" },
      { time: "17:00", text: "Fireside Reception & Jazz Trio" },
      { time: "20:30", text: "Torchlit Alpine Celebration" }
    ],
    stills: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800"
    ]
  },
  "Palak & Priya": {
    categoryTag: "AMALFI CLIFFSIDE CEREMONY",
    coupleTitle: "Palak & Priya",
    locationSub: "Ravello Cliffside • Amalfi Coast, Italy",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fog-over-a-forest-in-a-mountainous-region-42898-large.mp4",
    flankLeft: {
      img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800",
      caption: "AMALFI CLIFFSIDE VOWS"
    },
    flankRight: {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      caption: "PETAL SHOWER CELEBRATION"
    },
    narrative: `
      <p>Perched high above the Mediterranean sea in Ravello, Palak & Priya celebrated their union under cascading bougainvillea and a shower of fresh rose petals.</p>
      <p>Our cameras caught the infectious energy of the Italian sun, lemon grove dinners, and uninhibited dancing into the coastal night.</p>
    `,
    reviewQuote: `"We watched our film ten times on the night we received it. It's not just a wedding video—it's a high-fashion piece of art that brings back every scent and smile of Ravello."`,
    reviewAuthor: "— Palak & Priya (Bride & Groom)",
    specLocation: "Amalfi Coast, Italy",
    specVenue: "Villa Cimbrone Gardens",
    specDuration: "03:50 • 4K Cinema",
    specCamera: "Sony FX9 6K Full Frame",
    specLens: "G-Master 85mm f/1.4",
    specFormat: "Mediterranean Daylight LUT",
    timeline: [
      { time: "15:00", text: "Cliffside Ceremony at Infinity Terrace" },
      { time: "16:30", text: "Rose Petal Shower & String Quartet" },
      { time: "19:30", text: "Lemon Grove Banquet & Toasts" },
      { time: "22:00", text: "Poolside Dancing & Afterparty" }
    ],
    stills: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800"
    ]
  },
  "Ira & Sameer": {
    categoryTag: "HISTORIC SANCTUARY CEREMONY",
    coupleTitle: "Ira & Sameer",
    locationSub: "Bamboo Forest Sanctuary • Kyoto, Japan",
    videoUrl: "./videos/hero-wedding.mp4",
    flankLeft: {
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
      caption: "SANCTUARY PATHWAY"
    },
    flankRight: {
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
      caption: "PAPER LANTERN EVENING"
    },
    narrative: `
      <p>Amidst towering bamboo shoots and ancient wooden temple architecture, Ira & Sameer tied the knot in an atmosphere of serene reverence and minimalist luxury.</p>
      <p>The film captures delicate natural lighting filtering through bamboo leaves, traditional paper lantern illumination, and quiet moments of profound love.</p>
    `,
    reviewQuote: `"Every single frame feels like a frameable painting. The sound design, music score, and cinematography exceeded all our dreams."`,
    reviewAuthor: "— Ira & Sameer (Bride & Groom)",
    specLocation: "Kyoto, Japan",
    specVenue: "Arashiyama Sanctuary",
    specDuration: "04:30 • 8K RAW Cinema",
    specCamera: "RED V-Raptor 8K VV",
    specLens: "Leica Noctilux 50mm",
    specFormat: "Fine Art Cinema",
    timeline: [
      { time: "10:00", text: "Traditional Tea & Sanctuary Ritual" },
      { time: "13:00", text: "Bamboo Grove Couple Portrait Walk" },
      { time: "17:00", text: "Garden Paper Lantern Reception" },
      { time: "20:00", text: "Acoustic Koto & Evening Toast" }
    ],
    stills: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800"
    ]
  },
  "Rohan & Ananya": {
    categoryTag: "CLIFFSIDE SUNSET VOWS",
    coupleTitle: "Rohan & Ananya",
    locationSub: "Caldera Villa • Santorini, Greece",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4",
    flankLeft: {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800",
      caption: "CALDERA OVERLOOK"
    },
    flankRight: {
      img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800",
      caption: "AEGEAN SUNSET"
    },
    narrative: `
      <p>Framed by Aegean blue waters and white Aegean architecture, Rohan & Ananya's Santorini film captures pure Mediterranean romance as the sun sets over the caldera.</p>
      <p>With cinematic aerial drone shots and warm handheld cinema camera work, the film embodies joy, sea breeze, and lifetime commitment.</p>
    `,
    reviewQuote: `"Timemachine is in a league of their own. They didn't miss a single glance, laugh, or embrace. Our family back home felt like they were right there in Santorini with us."`,
    reviewAuthor: "— Rohan & Ananya (Bride & Groom)",
    specLocation: "Santorini, Greece",
    specVenue: "Canaves Oia Villa",
    specDuration: "06:10 • 4K Cinema",
    specCamera: "ARRI Alexa Mini LF",
    specLens: "Cooke Anamorphic 40mm",
    specFormat: "Anamorphic Widescreen",
    timeline: [
      { time: "16:00", text: "Caldera Cliffside Vows Exchange" },
      { time: "18:30", text: "Sunset Champagne Toast on Deck" },
      { time: "20:30", text: "Greek Feast & Traditional Music" },
      { time: "23:00", text: "Poolside Celebration" }
    ],
    stills: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800"
    ]
  }
};

function openFilmStoryModal(title) {
  playShutterSound();

  const storyData = WEDDING_FILM_STORIES[title] || WEDDING_FILM_STORIES["Maitri & Aneesh"];
  const modal = document.getElementById('film-story-modal');
  if (!modal) return;

  // Set Hero Meta
  const catEl = document.getElementById('story-category-tag');
  const titleEl = document.getElementById('story-main-title');
  const subEl = document.getElementById('story-main-sub');
  const headEl = document.getElementById('story-header-title');

  if (catEl) catEl.innerText = storyData.categoryTag;
  if (titleEl) titleEl.innerText = storyData.coupleTitle;
  if (subEl) subEl.innerText = storyData.locationSub;
  if (headEl) headEl.innerText = `TIMEMACHINE CINEMA ARCHIVE • ${storyData.coupleTitle.toUpperCase()}`;

  // Set Video
  const videoPlayer = document.getElementById('story-video-player');
  const videoSrc = document.getElementById('story-video-src');
  if (videoPlayer && videoSrc) {
    if (storyData.heroPoster) {
      videoPlayer.poster = storyData.heroPoster;
    }
    videoSrc.src = storyData.videoUrl;
    videoPlayer.load();
    videoPlayer.play().catch(() => {});
  }

  // Set Narrative & Review
  const narEl = document.getElementById('story-narrative');
  const qEl = document.getElementById('story-review-quote');
  const aEl = document.getElementById('story-review-author');

  if (narEl) narEl.innerHTML = storyData.narrative;
  if (qEl) qEl.innerText = storyData.reviewQuote;
  if (aEl) aEl.innerText = storyData.reviewAuthor;

  // Set Specs
  const locEl = document.getElementById('story-spec-location');
  const venEl = document.getElementById('story-spec-venue');
  const durEl = document.getElementById('story-spec-duration');
  const camEl = document.getElementById('story-spec-camera');
  const lenEl = document.getElementById('story-spec-lens');
  const fmtEl = document.getElementById('story-spec-format');

  if (locEl) locEl.innerText = storyData.specLocation;
  if (venEl) venEl.innerText = storyData.specVenue;
  if (durEl) durEl.innerText = storyData.specDuration;
  if (camEl) camEl.innerText = storyData.specCamera;
  if (lenEl) lenEl.innerText = storyData.specLens;
  if (fmtEl) fmtEl.innerText = storyData.specFormat;

  // Set Side Photo Card Slideshow & Direct Gallery Scroll Link
  const sideImg = document.getElementById('story-side-img');
  let currentSideIdx = 0;
  const stillsList = storyData.stills || [];

  if (sideImg && stillsList.length > 0) {
    sideImg.src = stillsList[0];
    sideImg.style.transition = 'opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    
    if (window.storySideSlideshowTimer) clearInterval(window.storySideSlideshowTimer);
    window.storySideSlideshowTimer = setInterval(() => {
      currentSideIdx = (currentSideIdx + 1) % stillsList.length;
      sideImg.style.opacity = '0.2';
      setTimeout(() => {
        sideImg.src = stillsList[currentSideIdx];
        sideImg.style.opacity = '1';
      }, 200);
    }, 3500);
  }

  const scrollBtn = document.getElementById('story-side-scroll-btn');
  const sideCard = document.getElementById('story-side-photo-card');
  const scrollToGallery = (e) => {
    if (e) e.stopPropagation();
    const gallerySec = document.getElementById('story-gallery-section');
    if (gallerySec) {
      gallerySec.scrollIntoView({ behavior: 'smooth' });
    }
  };
  if (scrollBtn) scrollBtn.onclick = scrollToGallery;
  if (sideCard) sideCard.onclick = scrollToGallery;

  // Set Photo Stills Gallery & Interactive Shuffle
  const galleryGrid = document.getElementById('story-gallery-grid');
  const shuffleBtn = document.getElementById('story-shuffle-btn');

  const renderStills = (stillsArray) => {
    if (!galleryGrid) return;
    galleryGrid.style.transition = 'opacity 0.25s ease';
    galleryGrid.style.opacity = '0.3';
    setTimeout(() => {
      galleryGrid.innerHTML = stillsArray.map((imgUrl, idx) => `
        <div class="story-gallery-item" data-img="${imgUrl}">
          <img src="${imgUrl}" alt="Wedding Still ${idx + 1}" class="story-gallery-img" loading="lazy">
        </div>
      `).join('');

      // Attach lightbox click to stills
      galleryGrid.querySelectorAll('.story-gallery-item').forEach(item => {
        item.addEventListener('click', () => {
          const url = item.getAttribute('data-img');
          openLightbox({
            title: `${storyData.coupleTitle} — Photography Still`,
            subtitle: storyData.locationSub,
            image: url,
            category: "wedding",
            year: "2026",
            location: storyData.specLocation,
            exif: {
              camera: storyData.specCamera,
              lens: storyData.specLens,
              focal: "50mm",
              aperture: "f/1.4",
              shutter: "1/250s",
              iso: "ISO 400",
              format: "35mm Fine Art Print"
            },
            description: "High-resolution wedding photography still captured on location."
          });
        });
      });
      galleryGrid.style.opacity = '1';
    }, 180);
  };

  if (stillsList.length > 0) {
    renderStills(stillsList);
  }

  if (shuffleBtn) {
    shuffleBtn.onclick = (e) => {
      e.stopPropagation();
      const shuffled = [...stillsList].sort(() => Math.random() - 0.5);
      renderStills(shuffled);
    };
  }

  // Open Modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFilmStoryModal() {
  if (window.storySideSlideshowTimer) {
    clearInterval(window.storySideSlideshowTimer);
    window.storySideSlideshowTimer = null;
  }
  const modal = document.getElementById('film-story-modal');
  const videoPlayer = document.getElementById('story-video-player');
  if (videoPlayer) videoPlayer.pause();
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initFilmStoryListeners() {
  const closeBtn = document.getElementById('story-close-btn');
  const closeX = document.getElementById('story-close-x');
  const inquireBtn = document.getElementById('story-inquire-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeFilmStoryModal);
  if (closeX) closeX.addEventListener('click', closeFilmStoryModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFilmStoryModal();
  });

  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      closeFilmStoryModal();
      const inquirySec = document.getElementById('inquiry');
      if (inquirySec) inquirySec.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function initFilmsCarousel() {
  const prevBtn = document.getElementById('films-prev');
  const nextBtn = document.getElementById('films-next');
  const trackWrapper = document.getElementById('films-track-wrapper');
  const cardItems = document.querySelectorAll('.films-card-item');

  if (!trackWrapper) return;

  // Arrow Navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      trackWrapper.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      trackWrapper.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  // Smooth Mouse Drag to Scroll
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let dragDistance = 0;

  trackWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragDistance = 0;
    trackWrapper.classList.add('active-drag');
    startX = e.pageX - trackWrapper.offsetLeft;
    scrollLeft = trackWrapper.scrollLeft;
  });

  trackWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    trackWrapper.classList.remove('active-drag');
  });

  trackWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    trackWrapper.classList.remove('active-drag');
  });

  trackWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackWrapper.offsetLeft;
    const walk = (x - startX) * 1.5;
    dragDistance += Math.abs(walk);
    trackWrapper.scrollLeft = scrollLeft - walk;
  });

  // Poster & Play Trigger Click Handlers -> Open Story Monograph Modal
  cardItems.forEach(card => {
    const playTrigger = card.querySelector('.films-play-trigger');
    const poster = card.querySelector('.films-poster-card');
    
    const handler = (e) => {
      if (dragDistance > 10) return; // Prevent modal opening when dragging
      const title = card.getAttribute('data-title') || "Maitri & Aneesh";
      openFilmStoryModal(title);
    };

    if (playTrigger) playTrigger.addEventListener('click', handler);
    if (poster) poster.addEventListener('click', handler);
  });
}

function initScrollEffects() {
  const progressBar = document.getElementById('header-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Intersection Observer for Classy Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }
}

// ==========================================================================
// 12. GET A QUOTE MULTI-STEP WIZARD LOGIC
// ==========================================================================
function initQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const backdrop = document.getElementById('quote-modal-backdrop');
  const closeBtn = document.getElementById('quote-modal-close-btn');
  const wizardCard = document.querySelector('.wizard-card');
  const steps = Array.from(document.querySelectorAll('.wizard-step'));
  let currentStep = 0;
  let addedEvents = [];
  let editingIndex = null;

  const addEventModal = document.getElementById('add-event-modal');
  const addEventBackdrop = document.getElementById('add-event-backdrop');
  const openAddEventBtn = document.getElementById('open-add-event-btn');
  const closeAddEventBtn = document.getElementById('close-add-event-btn');
  const addEventForm = document.getElementById('add-event-form');
  const addedEventsListEl = document.getElementById('added-events-list');
  const tableWrapperEl = document.getElementById('added-events-table-wrapper');

  const STEP_BACKGROUNDS = {
    0: "url('/images/niharika/main-shrine-couple.jpg')",
    1: "url('/images/niharika/doorway-portrait.jpg')",
    2: "url('/images/niharika/groom-lighting.jpg')",
    3: "url('/images/niharika/lotus-portrait.jpg')",
    4: "url('/images/niharika/pooja-kalasham.jpg')",
    5: "url('/images/niharika/mandapam-garland.jpg')",
    "success": "url('/images/niharika/pooja-prayer.jpg')"
  };

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  function renderAddedEvents() {
    if (!addedEventsListEl) return;
    if (addedEvents.length === 0) {
      addedEventsListEl.innerHTML = '';
      if (tableWrapperEl) tableWrapperEl.style.display = 'none';
      return;
    }
    if (tableWrapperEl) tableWrapperEl.style.display = 'block';

    addedEventsListEl.innerHTML = addedEvents.map((evt, idx) => `
      <div class="event-row-card">
        <span class="event-col-val">${evt.name}</span>
        <span class="event-col-val">${formatDate(evt.date)}</span>
        <span class="event-col-val">${evt.time || '-'}</span>
        <span class="event-col-val">${evt.location || '-'}</span>
        <span class="event-col-val">${evt.guests || '-'}</span>
        <div class="event-col-actions">
          <button type="button" class="action-btn-edit" data-index="${idx}" aria-label="Edit Event">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button type="button" class="action-btn-delete" data-index="${idx}" aria-label="Delete Event">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `).join('');

    addedEventsListEl.querySelectorAll('.action-btn-edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        const item = addedEvents[index];
        if (item) {
          editingIndex = index;
          const nameSelect = document.getElementById('event-name-select');
          const dateInput = document.getElementById('event-date-input');
          const timeSelect = document.getElementById('event-time-select');
          const locationInput = document.getElementById('event-location-input');
          const guestsInput = document.getElementById('event-guests-input');

          if (nameSelect) nameSelect.value = item.name;
          if (dateInput) dateInput.value = item.date;
          if (timeSelect) timeSelect.value = item.time || '';
          if (locationInput) locationInput.value = item.location || '';
          if (guestsInput) guestsInput.value = item.guests || '';

          openAddEventPopup();
        }
      });
    });

    addedEventsListEl.querySelectorAll('.action-btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        addedEvents.splice(index, 1);
        renderAddedEvents();
      });
    });
  }

  function resetWizardForm() {
    steps.forEach(step => {
      const inputs = step.querySelectorAll('input, select');
      inputs.forEach(inp => {
        if (inp.tagName.toLowerCase() === 'select') {
          inp.selectedIndex = 0;
        } else {
          inp.value = '';
        }
      });
    });
    addedEvents = [];
    renderAddedEvents();
    if (addEventForm) {
      addEventForm.reset();
    }
  }

  function openModal() {
    resetWizardForm();
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    goToStep(0);
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    resetWizardForm();
  }

  function goToStep(stepIndex) {
    if (typeof stepIndex === 'number') {
      if (stepIndex < 0 || stepIndex >= steps.length) return;
      currentStep = stepIndex;
    }

    let bgKey = currentStep;
    const targetStepEl = steps[currentStep];
    if (targetStepEl) {
      const stepAttr = targetStepEl.getAttribute('data-step');
      if (stepAttr === 'success') bgKey = 'success';
    }

    if (wizardCard && STEP_BACKGROUNDS[bgKey]) {
      wizardCard.style.setProperty('--wizard-bg-image', STEP_BACKGROUNDS[bgKey]);
    }

    steps.forEach((step, idx) => {
      if (idx === currentStep) {
        step.classList.add('active');
        const input = step.querySelector('input');
        if (input) setTimeout(() => input.focus(), 150);
      } else {
        step.classList.remove('active');
      }
    });
  }

  function openAddEventPopup() {
    if (addEventModal) addEventModal.classList.add('active');
  }

  function closeAddEventPopup() {
    if (addEventModal) addEventModal.classList.remove('active');
    if (addEventForm) addEventForm.reset();
    editingIndex = null;
  }

  if (openAddEventBtn) {
    openAddEventBtn.addEventListener('click', () => {
      editingIndex = null;
      if (addEventForm) addEventForm.reset();
      openAddEventPopup();
    });
  }

  if (closeAddEventBtn) closeAddEventBtn.addEventListener('click', closeAddEventPopup);
  if (addEventBackdrop) addEventBackdrop.addEventListener('click', closeAddEventPopup);

  if (addEventForm) {
    addEventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameSelect = document.getElementById('event-name-select');
      const dateInput = document.getElementById('event-date-input');
      const timeSelect = document.getElementById('event-time-select');
      const locationInput = document.getElementById('event-location-input');
      const guestsInput = document.getElementById('event-guests-input');

      if (!nameSelect || !dateInput) return;
      if (!nameSelect.value || !dateInput.value) {
        if (!nameSelect.value) nameSelect.reportValidity();
        if (!dateInput.value) dateInput.reportValidity();
        return;
      }

      const eventData = {
        name: nameSelect.value,
        date: dateInput.value,
        time: timeSelect ? timeSelect.value : '',
        location: locationInput ? locationInput.value : '',
        guests: guestsInput ? guestsInput.value : ''
      };

      if (editingIndex !== null && editingIndex >= 0 && editingIndex < addedEvents.length) {
        addedEvents[editingIndex] = eventData;
      } else {
        addedEvents.push(eventData);
      }

      renderAddedEvents();
      closeAddEventPopup();
    });
  }

  // Clean form state on page load / refresh
  resetWizardForm();
  window.addEventListener('pageshow', () => {
    resetWizardForm();
  });

  steps.forEach((step, idx) => {
    const nextBtn = step.querySelector('.wizard-next-btn');
    const submitBtn = step.querySelector('#wizard-final-submit-btn');
    const backBtn = step.querySelector('.wizard-back-btn');
    const clearBtn = step.querySelector('.wizard-clear-btn');
    const input = step.querySelector('input');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (input && input.hasAttribute('required') && !input.value.trim()) {
          input.reportValidity();
          input.focus();
          return;
        }
        goToStep(idx + 1);
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', async () => {
        if (addedEvents.length === 0) {
          alert('Please click "+ Add Events" to add at least one event before submitting.');
          openAddEventPopup();
          return;
        }

        const clientName = document.getElementById('step-client-name')?.value || '';
        const groomName = document.getElementById('step-groom-name')?.value || '';
        const brideName = document.getElementById('step-bride-name')?.value || '';
        const countryCode = document.getElementById('step-country-code')?.value || '+91';
        const phone = document.getElementById('step-phone-number')?.value || '';

        const payload = {
          clientName,
          groomName,
          brideName,
          countryCode,
          phone,
          events: addedEvents
        };

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting... ⏳';
        submitBtn.disabled = true;

        try {
          const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
            ? 'http://localhost:5000/api/quote' 
            : '/api/quote';
            
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          const data = await res.json();
          if (res.ok && data.success) {
            console.log('✅ Quote saved to MongoDB:', data);
          } else {
            console.error('❌ Quote API Error:', data.error || 'Failed to record quote.');
            alert('Form submission warning: ' + (data.error || 'Server did not save to database.'));
          }
        } catch (err) {
          console.error('❌ Network / API Server connection error:', err.message);
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            alert('Note: Local server (server.js on port 5000) is not running. Please start it using "npm run server" to save quotes locally.');
          } else {
            alert('Unable to connect to the backend server. Please verify MONGODB_URI is configured in Vercel settings.');
          }
        } finally {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;

          const successStepIdx = steps.findIndex(s => s.getAttribute('data-step') === 'success');
          if (successStepIdx !== -1) goToStep(successStepIdx);
        }
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        goToStep(idx - 1);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (input) input.value = '';
        const select = step.querySelector('select');
        if (select) select.selectedIndex = 0;
        if (idx === 5) {
          addedEvents = [];
          renderAddedEvents();
        }
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (nextBtn) nextBtn.click();
        }
      });
    }
  });

  const startOverBtn = document.getElementById('wizard-start-over-btn');
  if (startOverBtn) {
    startOverBtn.addEventListener('click', () => {
      resetWizardForm();
      goToStep(0);
    });
  }

  // Bind all quote modal triggers across the website
  const triggerSelectors = [
    '#footer-get-quote-btn',
    '#header-book-film-btn',
    '.header-actions .btn-primary',
    '.header-actions .btn',
    '.open-quote-modal'
  ];

  triggerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (addEventModal && addEventModal.classList.contains('active')) {
        closeAddEventPopup();
      } else if (modal && modal.classList.contains('active')) {
        closeModal();
      }
    }
  });

  const lbInquireBtn = document.getElementById('lb-inquire-btn');
  const storyInquireBtn = document.getElementById('story-inquire-btn');

  if (lbInquireBtn) {
    lbInquireBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const lbModal = document.getElementById('lightbox-modal');
      if (lbModal) lbModal.classList.remove('active');
      openModal();
    });
  }

  if (storyInquireBtn) {
    storyInquireBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const filmModal = document.getElementById('film-story-modal');
      if (filmModal) filmModal.classList.remove('active');
      openModal();
    });
  }
}


// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderHeroFloatingCards();
  initHeroVideoControls();
  initHeroVideoAnimation();
  initFilmsCarousel();
  initFilmStoryListeners();
  renderPortfolioGrid();
  initFilterListeners();
  initLightboxListeners();
  renderExhibitionsAndMonographs();
  initFormAndSoundHandlers();
  initScrollEffects();
  initQuoteModal();
});



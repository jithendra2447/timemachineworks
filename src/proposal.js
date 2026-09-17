// proposal.js — Standalone Interactive Proposal Logic & Media Customizer

const PRESET_MEDIA_SETS = {
  set1: {
    name: 'Set 1: Fine Art Shrine & Rituals',
    coverArc: [
      './images/niharika/groom-lighting.jpg',
      './images/niharika/bridal-braid.jpg',
      './images/niharika/lotus-portrait.jpg',
      './images/niharika/main-shrine-couple.jpg',
      './images/niharika/couple-doorway.jpg',
      './images/niharika/pooja-lighting.jpg',
      './images/niharika/mandapam-garland.jpg'
    ],
    aboutTop: './images/niharika/doorway-portrait.jpg',
    aboutBottom: './images/niharika/pooja-prayer.jpg',
    video: './videos/hero-wedding.mp4',
    poster: './videos/preview_check.jpg'
  },
  set2: {
    name: 'Set 2: Sacred Ceremonies & Pooja Focus',
    coverArc: [
      './images/niharika/lakshmi-shrine.jpg',
      './images/niharika/pooja-kalasham.jpg',
      './images/niharika/pooja-prayer.jpg',
      './images/niharika/lakshmi-shrine.jpg',
      './images/niharika/pooja-lighting.jpg',
      './images/niharika/preparation.jpg',
      './images/niharika/lotus-portrait.jpg'
    ],
    aboutTop: './images/niharika/pooja-kalasham.jpg',
    aboutBottom: './images/niharika/lakshmi-shrine.jpg',
    video: './videos/hero-wedding.mp4',
    poster: './videos/seek_frame_04.jpg'
  },
  set3: {
    name: 'Set 3: Royal Couple Portraits Focus',
    coverArc: [
      './images/niharika/couple-doorway.jpg',
      './images/niharika/doorway-portrait.jpg',
      './images/niharika/bridal-braid.jpg',
      './images/niharika/main-shrine-couple.jpg',
      './images/niharika/lotus-portrait.jpg',
      './images/niharika/groom-lighting.jpg',
      './images/niharika/mandapam-garland.jpg'
    ],
    aboutTop: './images/niharika/main-shrine-couple.jpg',
    aboutBottom: './images/niharika/couple-doorway.jpg',
    video: './videos/hero-wedding.mp4',
    poster: './videos/seek_frame_02.jpg'
  }
};

let currentMediaState = { ...PRESET_MEDIA_SETS.set1 };

document.addEventListener('DOMContentLoaded', () => {
  initUrlParams();
  initPdfExport();
  initAcceptProposal();
  initMediaCustomizer();
});

function applyMediaState(state) {
  // Update Cover Arc Cards (7 cards)
  const arcCards = document.querySelectorAll('.gallery-arc-card img');
  if (state.coverArc && arcCards.length > 0) {
    state.coverArc.forEach((url, i) => {
      if (arcCards[i] && url) {
        arcCards[i].src = url;
      }
    });
  }

  // Update About Us Photos
  const aboutTop = document.querySelector('.about-photo-top img');
  const aboutBottom = document.querySelector('.about-photo-bottom img');
  if (aboutTop && state.aboutTop) aboutTop.src = state.aboutTop;
  if (aboutBottom && state.aboutBottom) aboutBottom.src = state.aboutBottom;

  // Update Video Element
  const videoEl = document.querySelector('#slice-contact video');
  if (videoEl) {
    if (state.poster) videoEl.poster = state.poster;
    if (state.video) {
      const source = videoEl.querySelector('source');
      if (source) {
        source.src = state.video;
        videoEl.load();
      } else {
        videoEl.src = state.video;
      }
    }
  }

  // Sync Modal Input Fields
  const inputVid = document.getElementById('cust-video-url');
  const inputTop = document.getElementById('cust-about-top');
  const inputBot = document.getElementById('cust-about-bottom');

  if (inputVid && state.video) inputVid.value = state.video;
  if (inputTop && state.aboutTop) inputTop.value = state.aboutTop;
  if (inputBot && state.aboutBottom) inputBot.value = state.aboutBottom;
}

function initUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const client = params.get('client') || params.get('name') || 'Bhavya Allu';
  const price = params.get('price') || params.get('total') || '2,50,000';

  const docClient = document.getElementById('doc-client-name');
  const calloutClient = document.getElementById('callout-client-name');
  const modalClient = document.getElementById('modal-client-name');
  const priceEl = document.getElementById('live-total-price');

  if (docClient) docClient.textContent = client;
  if (calloutClient) calloutClient.textContent = client;
  if (modalClient) modalClient.textContent = client;

  if (priceEl) {
    const formattedPrice = price.startsWith('₹') ? price : `₹ ${price}`;
    priceEl.textContent = formattedPrice;
  }

  // Parse Media Theme / Custom URL Overrides
  const themeParam = params.get('theme') || params.get('set');
  if (themeParam && PRESET_MEDIA_SETS[themeParam]) {
    currentMediaState = { ...PRESET_MEDIA_SETS[themeParam] };
  }

  const customVid = params.get('video');
  const customPoster = params.get('poster');
  const customAbout1 = params.get('about1');
  const customAbout2 = params.get('about2');

  if (customVid) currentMediaState.video = customVid;
  if (customPoster) currentMediaState.poster = customPoster;
  if (customAbout1) currentMediaState.aboutTop = customAbout1;
  if (customAbout2) currentMediaState.aboutBottom = customAbout2;

  // Custom Cover Arc cards cover1..cover7
  for (let i = 1; i <= 7; i++) {
    const cParam = params.get(`cover${i}`);
    if (cParam) {
      if (!currentMediaState.coverArc) currentMediaState.coverArc = [];
      currentMediaState.coverArc[i - 1] = cParam;
    }
  }

  applyMediaState(currentMediaState);
}

function initMediaCustomizer() {
  const customizerBtns = [document.getElementById('nav-btn-media-customizer'), document.getElementById('nav-btn-media-mobile')].filter(Boolean);
  const modal = document.getElementById('media-customizer-modal');
  if (!modal && customizerBtns.length === 0) return;
  const closeBtn = document.getElementById('btn-close-media-customizer');
  const applyBtn = document.getElementById('btn-apply-media-customizer');
  const copyBtn = document.getElementById('btn-copy-media-link');
  const themeChips = document.querySelectorAll('#media-theme-chips .theme-chip-btn');
  const mobileBar = document.querySelector('.mobile-floating-bar');

  customizerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.add('active');
      if (mobileBar) mobileBar.style.display = 'none';
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      if (mobileBar && window.innerWidth <= 900) {
        mobileBar.style.display = 'flex';
      }
    });
  }

  // Preset Theme Chips Toggle
  themeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      themeChips.forEach(c => {
        c.style.background = 'rgba(255, 255, 255, 0.05)';
        c.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        c.style.color = '#CCC';
        c.classList.remove('active');
      });

      chip.style.background = 'rgba(197, 160, 89, 0.2)';
      chip.style.borderColor = 'var(--gold-accent)';
      chip.style.color = '#FFF';
      chip.classList.add('active');

      const themeKey = chip.getAttribute('data-theme');
      if (PRESET_MEDIA_SETS[themeKey]) {
        currentMediaState = { ...PRESET_MEDIA_SETS[themeKey] };
        applyMediaState(currentMediaState);
      }
    });
  });

  // Apply Custom Inputs to Quotation Page
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const vidVal = document.getElementById('cust-video-url')?.value.trim();
      const topVal = document.getElementById('cust-about-top')?.value.trim();
      const botVal = document.getElementById('cust-about-bottom')?.value.trim();

      if (vidVal) currentMediaState.video = vidVal;
      if (topVal) currentMediaState.aboutTop = topVal;
      if (botVal) currentMediaState.aboutBottom = botVal;

      applyMediaState(currentMediaState);

      if (modal) modal.classList.remove('active');
      if (mobileBar && window.innerWidth <= 900) {
        mobileBar.style.display = 'flex';
      }

      alert('✨ Quotation pictures & video updated successfully!');
    });
  }

  // Copy Custom Shareable Link
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const clientName = document.getElementById('doc-client-name')?.textContent || 'Bhavya Allu';
      const priceText = (document.getElementById('live-total-price')?.textContent || '2,50,000').replace(/[^0-9,]/g, '');

      const activeChip = document.querySelector('#media-theme-chips .theme-chip-btn.active');
      const themeKey = activeChip ? activeChip.getAttribute('data-theme') : 'set1';

      const vidVal = document.getElementById('cust-video-url')?.value.trim();
      const topVal = document.getElementById('cust-about-top')?.value.trim();
      const botVal = document.getElementById('cust-about-bottom')?.value.trim();

      const shareUrl = new URL(window.location.href);
      shareUrl.searchParams.set('client', clientName);
      shareUrl.searchParams.set('price', priceText);
      shareUrl.searchParams.set('theme', themeKey);
      if (vidVal) shareUrl.searchParams.set('video', vidVal);
      if (topVal) shareUrl.searchParams.set('about1', topVal);
      if (botVal) shareUrl.searchParams.set('about2', botVal);

      navigator.clipboard.writeText(shareUrl.toString()).then(() => {
        alert('🔗 Custom proposal link copied to clipboard!\n\nLink: ' + shareUrl.toString());
      }).catch(() => {
        prompt('Copy your custom proposal URL:', shareUrl.toString());
      });
    });
  }
}

function initPdfExport() {
  const pdfBtns = [document.getElementById('nav-btn-pdf'), document.getElementById('nav-btn-pdf-mobile')].filter(Boolean);
  if (pdfBtns.length === 0) return;

  pdfBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const element = document.getElementById('proposal-interactive-doc');
      if (!element) return;

      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `⏳ PDF...`;

      // Swap videos for posters during PDF canvas capture
      const videos = element.querySelectorAll('video');
      const videoParents = [];
      videos.forEach(v => {
        const img = document.createElement('img');
        img.src = v.poster || './videos/preview_check.jpg';
        img.style.cssText = v.style.cssText;
        img.style.height = '320px';
        img.className = 'pdf-temp-video-poster';
        v.parentNode.insertBefore(img, v);
        v.style.display = 'none';
        videoParents.push({ video: v, posterImg: img });
      });

      const clientName = (document.getElementById('doc-client-name')?.textContent || 'Bhavya_Allu').replace(/[^a-zA-Z0-9]/g, '_');
      const opt = {
        margin:       [0.3, 0.3, 0.3, 0.3],
        filename:     `Timemachine_Quotation_${clientName}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak:    { mode: ['css', 'legacy'] }
      };

      try {
        if (typeof window.html2pdf === 'function') {
          await window.html2pdf().set(opt).from(element).save();
        } else {
          window.print();
        }
      } catch (err) {
        console.warn('PDF export error:', err);
        window.print();
      } finally {
        videoParents.forEach(item => {
          if (item.posterImg && item.posterImg.parentNode) {
            item.posterImg.parentNode.removeChild(item.posterImg);
          }
          item.video.style.display = 'block';
        });
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    });
  });
}

function initAcceptProposal() {
  const acceptBtns = [document.getElementById('nav-btn-accept'), document.getElementById('nav-btn-accept-mobile')].filter(Boolean);
  const modal = document.getElementById('accept-modal-overlay');
  const closeBtn = document.getElementById('btn-modal-close');
  const mobileBar = document.querySelector('.mobile-floating-bar');

  acceptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      triggerGoldConfetti();
      if (modal) modal.classList.add('active');
      if (mobileBar) mobileBar.style.display = 'none';
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      if (mobileBar && window.innerWidth <= 900) {
        mobileBar.style.display = 'flex';
      }
    });
  }
}

function triggerGoldConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#FBBF24', '#FFFFFF']
    });
  }
}

// proposal.js — Standalone Interactive Proposal Logic

document.addEventListener('DOMContentLoaded', () => {
  initUrlParams();
  initPdfExport();
  initAcceptProposal();
});

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

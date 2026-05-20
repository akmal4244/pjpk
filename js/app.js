/* ═══════════════════════════════════════════════
   PJPK KP2027 — App Engine
   Navigation, localStorage, progress, render
   ═══════════════════════════════════════════════ */

/* ─── Storage Layer ─── */
window.pjpkStorage = {
  prefix: 'pjpk.',

  // Last Slide
  getLastSlide() { return parseInt(localStorage.getItem('pjpk.lastSlide')) || 1; },
  setLastSlide(n) { localStorage.setItem('pjpk.lastSlide', n); },

  // Audio
  getAudio() { return localStorage.getItem('pjpk.audio') || 'off'; },
  setAudio(v) { localStorage.setItem('pjpk.audio', v); },

  // Completed slides
  getCompleted() {
    try { return JSON.parse(localStorage.getItem('pjpk.completed')) || []; }
    catch { return []; }
  },
  addCompleted(n) {
    const c = this.getCompleted();
    if (!c.includes(n)) { c.push(n); localStorage.setItem('pjpk.completed', JSON.stringify(c)); }
  },

  // Quiz answers
  getQuiz(slideNo) {
    try {
      const q = JSON.parse(localStorage.getItem('pjpk.quiz')) || {};
      return q[slideNo] !== undefined ? q[slideNo] : null;
    } catch { return null; }
  },
  getQuizCorrect(slideNo) {
    try {
      const q = JSON.parse(localStorage.getItem('pjpk.quizCorrect')) || {};
      return q[slideNo] === true;
    } catch { return false; }
  },
  setQuiz(slideNo, key, isCorrect) {
    try {
      const q = JSON.parse(localStorage.getItem('pjpk.quiz')) || {};
      q[slideNo] = key;
      localStorage.setItem('pjpk.quiz', JSON.stringify(q));
      const qc = JSON.parse(localStorage.getItem('pjpk.quizCorrect')) || {};
      qc[slideNo] = isCorrect;
      localStorage.setItem('pjpk.quizCorrect', JSON.stringify(qc));
    } catch {}
  },
  getQuizAll() {
    try { return JSON.parse(localStorage.getItem('pjpk.quizCorrect')) || {}; }
    catch { return {}; }
  },

  // Reflection
  getReflection(slideNo) {
    try {
      const r = JSON.parse(localStorage.getItem('pjpk.reflection')) || {};
      return r[slideNo] || '';
    } catch { return ''; }
  },
  saveReflection(slideNo, text) {
    try {
      const r = JSON.parse(localStorage.getItem('pjpk.reflection')) || {};
      r[slideNo] = text;
      localStorage.setItem('pjpk.reflection', JSON.stringify(r));
    } catch {}
  },

  // Reset all
  resetAll() {
    const keys = ['pjpk.lastSlide','pjpk.audio','pjpk.completed','pjpk.quiz','pjpk.quizCorrect','pjpk.reflection'];
    keys.forEach(k => localStorage.removeItem(k));
  }
};

/* ─── Main App ─── */
window.pjpkApp = (function () {
  let currentSlide = 1;
  const TOTAL = 30;

  /* ── Render slide ── */
  function renderSlide(n, direction = 'next') {
    const stage = document.getElementById('slide-stage');
    const slideData = slides[n - 1];
    if (!slideData) return;

    // Remove existing
    const existing = stage.querySelector('.slide');
    if (existing) {
      existing.classList.remove('active');
      existing.style.opacity = '0';
      existing.style.transform = direction === 'next' ? 'translateX(-30px)' : 'translateX(30px)';
      setTimeout(() => existing.remove(), 380);
    }

    // Create new slide div
    const el = document.createElement('div');
    el.className = 'slide';
    el.dataset.slideNo = n;
    el.dataset.anim = slideData.animation || 'fade';
    el.style.opacity = '0';
    el.style.transform = direction === 'next' ? 'translateX(30px)' : 'translateX(-30px)';

    stage.appendChild(el);

    // Let slide render itself
    slideData.render(el);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.38s ease, transform 0.38s cubic-bezier(0.4,0,0.2,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
        el.classList.add('active');
      });
    });

    // Update state
    currentSlide = n;
    updateFooter();
    updateProgress();
    pjpkStorage.setLastSlide(n);
    pjpkStorage.addCompleted(n);

    // Announce to screen readers
    stage.setAttribute('aria-label', `Slide ${n} daripada ${TOTAL}: ${slideData.title}`);
  }

  /* ── Footer (Back/Next visibility) ── */
  function updateFooter() {
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const counter = document.getElementById('slide-current');

    counter.textContent = currentSlide;

    // Slide 1 — no back
    if (currentSlide === 1) {
      btnBack.disabled = true;
      btnBack.style.opacity = '0.35';
      btnNext.style.display = 'none'; // handled by Mula button
    } else if (currentSlide === 30) {
      btnBack.disabled = false;
      btnBack.style.opacity = '1';
      btnNext.style.display = 'none';
    } else {
      btnBack.disabled = false;
      btnBack.style.opacity = '1';
      btnNext.style.display = 'flex';
    }
  }

  /* ── Progress bar ── */
  function updateProgress() {
    const completed = pjpkStorage.getCompleted();
    const pct = Math.round((completed.length / TOTAL) * 100);
    const bar = document.getElementById('progress-bar');
    const label = document.getElementById('progress-label');
    const wrap = document.getElementById('progress-bar-wrap');
    bar.style.width = pct + '%';
    label.textContent = pct + '%';
    wrap.setAttribute('aria-valuenow', pct);
  }

  /* ── Navigation ── */
  function next() {
    if (currentSlide < TOTAL) renderSlide(currentSlide + 1, 'next');
  }

  function back() {
    if (currentSlide > 1) renderSlide(currentSlide - 1, 'back');
  }

  function goToSlide(n) {
    if (n >= 1 && n <= TOTAL) renderSlide(n, n > currentSlide ? 'next' : 'back');
  }

  function restart() {
    pjpkStorage.resetAll();
    renderSlide(1, 'next');
  }

  /* ── Toast ── */
  function showToast(msg, duration = 2500) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => t.classList.add('hidden'), duration);
  }

  /* ── Popup: Bantuan ── */
  function openBantuan() { document.getElementById('popup-bantuan').classList.remove('hidden'); }
  function closeBantuan() { document.getElementById('popup-bantuan').classList.add('hidden'); }

  /* ── Popup: Reset ── */
  function openReset() { document.getElementById('popup-reset').classList.remove('hidden'); }
  function closeReset() { document.getElementById('popup-reset').classList.add('hidden'); }

  /* ── INIT ── */
  function init() {
    // Set total
    document.getElementById('slide-total').textContent = TOTAL;

    // Resume last slide
    const last = pjpkStorage.getLastSlide();
    renderSlide(last, 'next');

    // Button events
    document.getElementById('btn-next').addEventListener('click', next);
    document.getElementById('btn-back').addEventListener('click', back);
    document.getElementById('btn-bantuan').addEventListener('click', openBantuan);
    document.getElementById('btn-reset').addEventListener('click', openReset);
    document.getElementById('close-bantuan').addEventListener('click', closeBantuan);
    document.getElementById('confirm-reset').addEventListener('click', () => { closeReset(); restart(); showToast('🔄 Kemajuan dipadam. Bermula semula...'); });
    document.getElementById('cancel-reset').addEventListener('click', closeReset);

    // Popup overlay click outside
    document.getElementById('popup-bantuan').addEventListener('click', function(e) {
      if (e.target === this) closeBantuan();
    });
    document.getElementById('popup-reset').addEventListener('click', function(e) {
      if (e.target === this) closeReset();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const bantuanOpen = !document.getElementById('popup-bantuan').classList.contains('hidden');
      const resetOpen   = !document.getElementById('popup-reset').classList.contains('hidden');
      if (bantuanOpen) { if (e.key === 'Escape') closeBantuan(); return; }
      if (resetOpen)   { if (e.key === 'Escape') closeReset(); return; }
      switch (e.key) {
        case 'ArrowRight': next(); break;
        case 'ArrowLeft':  back(); break;
        case ' ':
          e.preventDefault();
          if (currentSlide === 1) goToSlide(2);
          else next();
          break;
      }
    });

    // Audio init
    window.pjpkAudio.init();
  }

  // Expose
  return { init, next, back, goToSlide, restart, showToast, getCurrentSlide: () => currentSlide };
})();

/* ─── Boot on DOM ready ─── */
document.addEventListener('DOMContentLoaded', () => window.pjpkApp.init());

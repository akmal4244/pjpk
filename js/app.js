/* ═══════════════════════════════════════════════
   PJPK KP2027 — App Engine v2
   ═══════════════════════════════════════════════ */

/* ─── Storage Layer ─── */
window.pjpkStorage = {
  getLastSlide()  { return parseInt(localStorage.getItem('pjpk.lastSlide')) || 1; },
  setLastSlide(n) { localStorage.setItem('pjpk.lastSlide', n); },
  getAudio()      { return localStorage.getItem('pjpk.audio') || 'off'; },
  setAudio(v)     { localStorage.setItem('pjpk.audio', v); },
  getCompleted() {
    try { return JSON.parse(localStorage.getItem('pjpk.completed')) || []; } catch { return []; }
  },
  addCompleted(n) {
    const c = this.getCompleted();
    if (!c.includes(n)) { c.push(n); localStorage.setItem('pjpk.completed', JSON.stringify(c)); }
  },
  getQuiz(no) {
    try { const q = JSON.parse(localStorage.getItem('pjpk.quiz')) || {}; return q[no] !== undefined ? q[no] : null; } catch { return null; }
  },
  getQuizCorrect(no) {
    try { const q = JSON.parse(localStorage.getItem('pjpk.quizCorrect')) || {}; return q[no] === true; } catch { return false; }
  },
  setQuiz(no, key, ok) {
    try {
      const q = JSON.parse(localStorage.getItem('pjpk.quiz')) || {};
      q[no] = key; localStorage.setItem('pjpk.quiz', JSON.stringify(q));
      const qc = JSON.parse(localStorage.getItem('pjpk.quizCorrect')) || {};
      qc[no] = ok; localStorage.setItem('pjpk.quizCorrect', JSON.stringify(qc));
    } catch {}
  },
  getQuizAll() { try { return JSON.parse(localStorage.getItem('pjpk.quizCorrect')) || {}; } catch { return {}; } },
  getReflection(no) { try { const r = JSON.parse(localStorage.getItem('pjpk.reflection')) || {}; return r[no] || ''; } catch { return ''; } },
  saveReflection(no, txt) {
    try { const r = JSON.parse(localStorage.getItem('pjpk.reflection')) || {}; r[no] = txt; localStorage.setItem('pjpk.reflection', JSON.stringify(r)); } catch {}
  },
  resetAll() {
    ['pjpk.lastSlide','pjpk.audio','pjpk.completed','pjpk.quiz','pjpk.quizCorrect','pjpk.reflection']
      .forEach(k => localStorage.removeItem(k));
  }
};

/* ─── Main App ─── */
window.pjpkApp = (function () {
  const TOTAL = 30;
  let current = 1;
  let transitioning = false;

  /* ── Dot nav ── */
  function buildDots() {
    const wrap = document.getElementById('slide-dots');
    if (!wrap) return;
    wrap.innerHTML = '';
    for (let i = 1; i <= TOTAL; i++) {
      const d = document.createElement('div');
      d.className = 'slide-dot';
      d.dataset.slide = i;
      d.title = `Slide ${i}`;
      wrap.appendChild(d);
    }
  }

  function updateDots() {
    const completed = pjpkStorage.getCompleted();
    document.querySelectorAll('.slide-dot').forEach(d => {
      const n = parseInt(d.dataset.slide);
      d.classList.remove('visited','current');
      if (n === current) d.classList.add('current');
      else if (completed.includes(n)) d.classList.add('visited');
    });
  }

  /* ── Render ── */
  function renderSlide(n, dir = 'next') {
    if (transitioning) return;
    if (n < 1 || n > TOTAL) return;
    transitioning = true;

    const stage = document.getElementById('slide-stage');
    const data  = slides[n - 1];
    if (!data) { transitioning = false; return; }

    const old = stage.querySelector('.slide');

    // Create new
    const el = document.createElement('div');
    el.className = 'slide';
    el.dataset.slideNo = n;

    // For special slides set class before render
    if (data.type === 'intro')   el.className = 'slide slide--intro';
    if (data.type === 'closing') el.className = 'slide slide--closing';

    stage.appendChild(el);
    data.render(el);

    // Entrance animation
    el.style.opacity = '0';
    el.style.transform = dir === 'next' ? 'translateX(32px)' : 'translateX(-32px)';
    el.style.transition = 'none';

    // Animate out old
    if (old) {
      old.style.transition = 'opacity 0.28s ease, transform 0.28s cubic-bezier(0.4,0,0.2,1)';
      old.style.opacity = '0';
      old.style.transform = dir === 'next' ? 'translateX(-28px)' : 'translateX(28px)';
      setTimeout(() => old.remove(), 300);
    }

    // Animate in new
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
        el.classList.add('active');
        setTimeout(() => { transitioning = false; }, 360);
      });
    });

    current = n;
    pjpkStorage.setLastSlide(n);
    pjpkStorage.addCompleted(n);

    updateFooter();
    updateProgress();
    updateDots();

    stage.setAttribute('aria-label', `Slide ${n} daripada ${TOTAL}: ${data.title}`);
  }

  /* ── Footer ── */
  function updateFooter() {
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    document.getElementById('slide-current').textContent = current;

    if (current === 1) {
      btnBack.disabled = true;
      btnBack.style.opacity = '0.35';
      btnNext.style.display = 'none';
    } else if (current === 30) {
      btnBack.disabled = false;
      btnBack.style.opacity = '1';
      btnNext.style.display = 'none';
    } else {
      btnBack.disabled = false;
      btnBack.style.opacity = '1';
      btnNext.style.display = 'flex';
    }
  }

  /* ── Progress ── */
  function updateProgress() {
    const c    = pjpkStorage.getCompleted();
    const pct  = Math.round((c.length / TOTAL) * 100);
    const bar  = document.getElementById('progress-bar');
    const lbl  = document.getElementById('progress-label');
    const wrap = document.getElementById('progress-bar-wrap');
    if (bar)  bar.style.width  = pct + '%';
    if (lbl)  lbl.textContent  = pct + '%';
    if (wrap) wrap.setAttribute('aria-valuenow', pct);
  }

  function next()        { if (current < TOTAL) renderSlide(current + 1, 'next'); }
  function back()        { if (current > 1)     renderSlide(current - 1, 'back'); }
  function goToSlide(n)  { renderSlide(n, n > current ? 'next' : 'back'); }
  function restart()     { pjpkStorage.resetAll(); renderSlide(1, 'next'); }

  /* ── Toast ── */
  function showToast(msg, ms = 2600) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(window._toastT);
    window._toastT = setTimeout(() => t.classList.add('hidden'), ms);
  }

  /* ── Popups ── */
  const openBantuan  = () => document.getElementById('popup-bantuan').classList.remove('hidden');
  const closeBantuan = () => document.getElementById('popup-bantuan').classList.add('hidden');
  const openReset    = () => document.getElementById('popup-reset').classList.remove('hidden');
  const closeReset   = () => document.getElementById('popup-reset').classList.add('hidden');

  /* ── INIT ── */
  function init() {
    document.getElementById('slide-total').textContent = TOTAL;
    buildDots();

    const last = pjpkStorage.getLastSlide();
    // Pre-mark visited
    for (let i = 1; i < last; i++) pjpkStorage.addCompleted(i);
    renderSlide(last, 'next');

    /* Button events */
    document.getElementById('btn-next').addEventListener('click', next);
    document.getElementById('btn-back').addEventListener('click', back);
    document.getElementById('btn-bantuan').addEventListener('click', openBantuan);
    document.getElementById('btn-reset').addEventListener('click', openReset);
    document.getElementById('close-bantuan').addEventListener('click', closeBantuan);
    document.getElementById('confirm-reset').addEventListener('click', () => {
      closeReset(); restart(); showToast('🔄 Kemajuan dipadam. Bermula semula...');
    });
    document.getElementById('cancel-reset').addEventListener('click', closeReset);

    /* Overlay click-outside */
    ['popup-bantuan','popup-reset'].forEach(id => {
      document.getElementById(id).addEventListener('click', function(e) {
        if (e.target === this) this.classList.add('hidden');
      });
    });

    /* Keyboard */
    document.addEventListener('keydown', e => {
      const bOpen = !document.getElementById('popup-bantuan').classList.contains('hidden');
      const rOpen = !document.getElementById('popup-reset').classList.contains('hidden');
      if (bOpen) { if (e.key==='Escape') closeBantuan(); return; }
      if (rOpen) { if (e.key==='Escape') closeReset();   return; }
      if (e.key==='ArrowRight')      next();
      else if (e.key==='ArrowLeft')  back();
      else if (e.key===' ') { e.preventDefault(); current===1 ? goToSlide(2) : next(); }
    });

    /* Touch swipe */
    let touchStartX = 0;
    const stage = document.getElementById('slide-stage');
    stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : back(); }
    }, { passive: true });

    /* Audio */
    window.pjpkAudio.init();
  }

  return { init, next, back, goToSlide, restart, showToast, getCurrentSlide: () => current };
})();

document.addEventListener('DOMContentLoaded', () => window.pjpkApp.init());

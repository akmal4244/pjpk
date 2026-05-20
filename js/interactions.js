/* ═══════════════════════════════════════════════
   PJPK KP2027 — Interactions Module
   Flip card, FITT tooltip, Accordion, Quiz, Bidang grid
   ═══════════════════════════════════════════════ */

window.pjpkInteractions = {

  /* ── Flip Card ──────────────────────────────── */
  toggleFlip(wrapEl) {
    wrapEl.classList.toggle('flipped');
    const isFlipped = wrapEl.classList.contains('flipped');
    wrapEl.setAttribute('aria-pressed', isFlipped);
  },

  /* ── FITT Tooltip (toggle on mobile tap) ───── */
  toggleFitt(cardEl) {
    // Close all others first
    document.querySelectorAll('.fitt-card.active').forEach(c => {
      if (c !== cardEl) c.classList.remove('active');
    });
    cardEl.classList.toggle('active');
  },

  /* ── Accordion ──────────────────────────────── */
  toggleAccordion(btnEl) {
    const body = btnEl.nextElementSibling;
    const isOpen = body.classList.contains('open');

    // Close all siblings
    const parent = btnEl.closest('#accordion-kecergasan') || btnEl.parentElement.parentElement;
    if (parent) {
      parent.querySelectorAll('.accordion-btn').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
    }

    // Toggle current
    if (!isOpen) {
      btnEl.classList.add('open');
      body.classList.add('open');
    }
  },

  /* ── Bidang Grid Highlight ──────────────────── */
  highlightBidang(cardEl, targetSlide) {
    // Remove highlight from all
    document.querySelectorAll('.bidang-card').forEach(c => c.classList.remove('active'));
    // Add to clicked
    cardEl.classList.add('active');
    // Navigate after brief delay for visual feedback
    setTimeout(() => {
      window.pjpkApp.goToSlide(targetSlide);
    }, 320);
  },

  /* ── Quiz Answer ────────────────────────────── */
  answerQuiz(btnEl, slideNo) {
    const key = btnEl.dataset.key;
    const isCorrect = btnEl.dataset.correct === 'true';
    const container = document.getElementById(`quiz-options-${slideNo}`);
    const resultEl  = document.getElementById(`quiz-result-${slideNo}`);
    const slide     = slides[slideNo - 1];
    const { quizData } = slide;

    // Disable all
    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.disabled = true;
      const bKey = btn.dataset.key;
      const bCorrect = btn.dataset.correct === 'true';
      if (bCorrect) {
        btn.classList.add('correct');
        btn.innerHTML += '<span style="margin-left:auto;font-size:1rem">✅</span>';
      } else if (bKey === key && !bCorrect) {
        btn.classList.add('wrong');
        btn.innerHTML += '<span style="margin-left:auto;font-size:1rem">❌</span>';
      }
    });

    // Show result
    resultEl.classList.add('show', isCorrect ? 'correct' : 'wrong');
    resultEl.innerHTML = isCorrect
      ? '✅ Jawapan betul! Syabas! Anda memahami konsep ini dengan baik.'
      : `❌ Jawapan kurang tepat. Jawapan betul: <strong>${quizData.options.find(o => o.correct).key}</strong>`;

    // Show explanation
    const expEl = document.createElement('div');
    expEl.style.cssText = 'margin-top:10px;background:#F0FDF4;border:1px solid #86EFAC;border-radius:8px;padding:10px 12px;font-size:0.78rem;color:#065f46;line-height:1.55';
    expEl.innerHTML = `<strong>💡 Penjelasan:</strong> ${quizData.explanation}`;
    resultEl.parentElement.appendChild(expEl);

    // Save to storage
    window.pjpkStorage.setQuiz(slideNo, key, isCorrect);

    // Toast
    window.pjpkApp.showToast(isCorrect ? '🌟 Betul! Syabas!' : '📖 Semak jawapan betul di atas.');
  },
};

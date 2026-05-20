/* ═══════════════════════════════════════════════
   PJPK KP2027 — Audio Module
   BGM toggle, localStorage persistence
   ═══════════════════════════════════════════════ */

window.pjpkAudio = {
  audio: null,
  isOn: false,
  btn: null,

  init() {
    this.audio = document.getElementById('bgm');
    this.btn   = document.getElementById('btn-audio');
    if (!this.audio || !this.btn) return;

    // Load saved state (default off — browser autoplay policy)
    const saved = window.pjpkStorage.getAudio();
    this.isOn = (saved === 'on');

    // Audio event: update icon if it starts/stops for any reason
    this.audio.addEventListener('play',  () => this._updateIcon(true));
    this.audio.addEventListener('pause', () => this._updateIcon(false));
    this.audio.addEventListener('error', () => {
      // BGM file not found — gracefully degrade
      this.btn.title = 'Fail muzik tidak dijumpai (assets/bgm.mp3)';
    });

    this._updateIcon(this.isOn);

    // Don't autoplay — just show state. User must click.
    if (this.isOn) {
      // Attempt play (may be blocked by browser)
      this.audio.play().catch(() => {
        this.isOn = false;
        this._updateIcon(false);
        window.pjpkStorage.setAudio('off');
      });
    }

    this.btn.addEventListener('click', () => this.toggle());
  },

  toggle() {
    if (this.isOn) {
      this.audio.pause();
      this.isOn = false;
      window.pjpkStorage.setAudio('off');
    } else {
      this.audio.play().then(() => {
        this.isOn = true;
        window.pjpkStorage.setAudio('on');
        this._updateIcon(true);
      }).catch(() => {
        window.pjpkApp.showToast('⚠️ Tidak dapat mainkan muzik. Pastikan fail assets/bgm.mp3 ada.');
      });
    }
    this._updateIcon(this.isOn);
  },

  _updateIcon(on) {
    if (!this.btn) return;
    this.btn.textContent = on ? '🔊' : '🔇';
    this.btn.title = on ? 'Matikan Muzik' : 'Hidupkan Muzik';
    this.btn.setAttribute('aria-label', on ? 'Matikan Muzik Latar' : 'Hidupkan Muzik Latar');
  }
};

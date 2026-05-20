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
    // Replace SVG icon based on state
    const iconEl = document.getElementById('icon-audio');
    if (iconEl) {
      iconEl.innerHTML = on
        ? `<path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"/>`
        : `<path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"/>`;
    }
    this.btn.title = on ? 'Matikan Muzik' : 'Hidupkan Muzik';
    this.btn.setAttribute('aria-label', on ? 'Matikan Muzik Latar' : 'Hidupkan Muzik Latar');
    this.btn.classList.toggle('hdr-btn--active', on);
  }
};

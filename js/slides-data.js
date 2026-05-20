/* ═══════════════════════════════════════════════
   PJPK KP2027 — Slides Data (30 Slides)
   ═══════════════════════════════════════════════ */

const slides = [

  /* ───────────────────────────── SLIDE 1 ── */
  {
    no: 1,
    type: "intro",
    animation: "fade",
    title: "Penataran Kurikulum Persekolahan 2027",
    subtitle: "Pendidikan Jasmani dan Pendidikan Kesihatan (PJPK) Tingkatan 1",
    objective: "Memperkenalkan modul Penataran KP2027 PJPK Tingkatan 1 kepada peserta.",
    vo: "Selamat datang ke Penataran Pendidikan Jasmani dan Pendidikan Kesihatan Tingkatan 1. Modul interaktif ini akan memperkenalkan anda kepada Kurikulum Persekolahan 2027. Sila klik butang Mula untuk meneruskan.",
    interaction: ["Klik butang MULA untuk meneruskan"],
    notes: "Slide pembuka modul — reka bentuk rasmi BPK/KPM. Butang Mula sahaja.",
    render: function(el) {
      el.className = "slide slide--intro-official active";
      el.dataset.anim = "fade";

      // Jata Negara SVG (simplified official crest)
      const jataSVG = `<svg class="s1-jata" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Jata Negara Malaysia">
        <!-- Shield body -->
        <path d="M8 12 Q8 4 16 4 L64 4 Q72 4 72 12 L72 60 Q72 80 40 92 Q8 80 8 60 Z" fill="#CC0001"/>
        <!-- Yellow crescent + star -->
        <path d="M40 24 C32 24 26 30 26 38 C26 46 32 52 40 52 C48 52 54 46 54 38 C54 30 48 24 40 24Z" fill="none"/>
        <path d="M34 30 C30 33 28 37 29 41 C30 46 35 50 40 50 C45 50 50 46 51 41" fill="#FFD700" stroke="#FFD700" stroke-width="0"/>
        <path d="M29 40 C30 35 34 31 38 30 C33 29 26 33 24 39 C22 46 26 54 33 56" fill="#FFD700"/>
        <!-- 14-point star simplified -->
        <polygon points="40,16 41.5,21 46,21 42.5,24 44,29 40,26 36,29 37.5,24 34,21 38.5,21" fill="#FFD700"/>
        <!-- Crescent -->
        <path d="M36 35 C36 31 40 28 44 29 C40 28 37 31 37 35 C37 39 40 42 44 43 C40 44 36 41 36 37 Z" fill="none"/>
        <path d="M34 36 C34 30 38 26 43 27 C38 26 33 30 33 36 C33 42 38 46 43 47 C38 47 34 43 34 37 Z" fill="#FFD700"/>
        <!-- Bottom decorative strips -->
        <rect x="12" y="62" width="14" height="6" rx="1" fill="#003F87"/>
        <rect x="28" y="62" width="24" height="6" rx="1" fill="#FFD700"/>
        <rect x="54" y="62" width="14" height="6" rx="1" fill="#CC0001"/>
        <!-- White shield border -->
        <path d="M8 12 Q8 4 16 4 L64 4 Q72 4 72 12 L72 60 Q72 80 40 92 Q8 80 8 60 Z" fill="none" stroke="white" stroke-width="1.5" opacity="0.6"/>
      </svg>`;

      el.innerHTML = `
        <!-- Dot grid decoration -->
        <div class="s1-dots" aria-hidden="true">
          ${Array(25).fill('<div class="s1-dot"></div>').join('')}
        </div>

        <!-- Geometric right panel -->
        <div class="s1-chevron-blue" aria-hidden="true"></div>
        <div class="s1-chevron-yellow" aria-hidden="true"></div>

        <!-- Building illustration -->
        <div class="s1-bldg-wrap" aria-hidden="true">
          <div class="s1-bldg-inner">
            <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
              <!-- Sky gradient -->
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#bfdbfe"/>
                  <stop offset="100%" stop-color="#dbeafe"/>
                </linearGradient>
              </defs>
              <rect width="200" height="400" fill="url(#skyGrad)"/>
              <!-- Building facade -->
              <rect x="20" y="40" width="160" height="360" fill="#1e3a8a" opacity="0.85" rx="2"/>
              <!-- Window grid -->
              ${(() => {
                let wins = '';
                for(let row=0; row<14; row++) {
                  for(let col=0; col<5; col++) {
                    const x = 28 + col * 30;
                    const y = 55 + row * 26;
                    const lit = Math.random() > 0.35;
                    wins += `<rect x="${x}" y="${y}" width="18" height="14" rx="1" fill="${lit ? '#93c5fd' : '#1e40af'}" opacity="${lit ? '0.9' : '0.5'}"/>`;
                  }
                }
                return wins;
              })()}
              <!-- Ground -->
              <rect x="0" y="370" width="200" height="30" fill="#1e3a8a" opacity="0.5"/>
            </svg>
          </div>
        </div>

        <!-- Main content -->
        <div class="s1-content">
          <!-- Logo row -->
          <div class="s1-logo-row">
            ${jataSVG}
            <div class="s1-logo-text">Kementerian Pendidikan Malaysia<br/>Bahagian Pembangunan Kurikulum</div>
          </div>

          <!-- Divider -->
          <div class="s1-divider"></div>

          <!-- Title -->
          <div class="s1-title-main">Penataran</div>
          <div class="s1-title-kp">Kurikulum Persekolahan 2027</div>
          <div class="s1-title-mp">Pendidikan Jasmani<br/>dan Pendidikan Kesihatan (PJPK)<br/>Tingkatan 1</div>
          <div class="s1-modul-label">Pengenalan PJPK Tingkatan 1</div>

          <!-- CTA Button -->
          <button class="s1-btn" id="btn-mula-main">
            <span class="s1-btn-icon">▶</span>
            Mula Sekarang
          </button>

          <div class="s1-spacer"></div>

          <!-- Branding footer -->
          <div class="s1-footer-brands">
            <span class="s1-brand-item s1-brand-item--hash">#kurikulumkita</span>
            <span class="s1-brand-item s1-brand-item--red">Reformasi Pendidikan</span>
            <span class="s1-brand-item s1-brand-item--green">Malaysia Madani</span>
            <span class="s1-brand-item s1-brand-item--gold">Visit Malaysia 2026</span>
            <span class="s1-brand-item s1-brand-item--purple">Generasi Madani</span>
          </div>
          <div class="s1-nav-hint">Gunakan ← → atau swipe untuk navigasi</div>
        </div>
      `;
      el.querySelector('#btn-mula-main').addEventListener('click', () => window.pjpkApp.goToSlide(2));
    }
  },

  /* ───────────────────────────── SLIDE 2 ── */
  {
    no: 2,
    type: "intro",
    animation: "fade",
    title: "Maklumat Penataran",
    objective: "Memaklumkan peserta tentang maklumat asas sesi penataran.",
    vo: "Penataran ini dianjurkan oleh Bahagian Pembangunan Kurikulum, Kementerian Pendidikan Malaysia. Sesi ini akan berlangsung sepanjang hari bagi memastikan guru dan peserta memahami sepenuhnya Kurikulum Persekolahan 2027 bagi mata pelajaran PJPK Tingkatan 1.",
    interaction: ["Tekan butang Seterusnya untuk meneruskan"],
    notes: "Slide maklumat penataran — tarikh, masa, fasilitator.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📋 Maklumat Penataran</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--2" style="gap:10px">
            ${[
              { icon: '📅', label: 'Tarikh', value: 'Mengikut Jadual Penataran' },
              { icon: '🕗', label: 'Masa', value: '8:00 pagi — 5:00 petang' },
              { icon: '👨‍🏫', label: 'Fasilitator', value: 'Guru Pakar PJPK BPK' },
              { icon: '🏛️', label: 'Anjuran', value: 'Bahagian Pembangunan Kurikulum (BPK), KPM' },
            ].map(i => `
              <div class="content-card" style="display:flex;gap:12px;align-items:flex-start">
                <span style="font-size:1.8rem">${i.icon}</span>
                <div><div class="card-label">${i.label}</div><div class="card-desc">${i.value}</div></div>
              </div>
            `).join('')}
          </div>
          <div class="content-card" style="background:linear-gradient(135deg,#FEF3C7,#FDE68A);border-color:#F59E0B">
            <div style="display:flex;gap:10px;align-items:center">
              <span style="font-size:1.5rem">⚠️</span>
              <div>
                <div class="card-label" style="color:#92400E">Penting: Menelusuri Dokumen KP2027</div>
                <div class="card-desc" style="color:#78350F">Pastikan anda telah memuat turun dan membaca Dokumen Kurikulum PJPK Tingkatan 1 sebelum sesi bermula.</div>
              </div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 3 ── */
  {
    no: 3,
    type: "reflection",
    animation: "peel",
    title: "Refleksi: Video Pembuka",
    objective: "Merangsang pemikiran kritis peserta berkaitan video pembuka.",
    vo: "Sila tonton video pembuka yang telah dipaparkan. Setelah menonton, kongsikan refleksi anda dalam kotak yang disediakan. Tiada jawapan yang salah — ini adalah peluang untuk anda meluahkan pandangan dan perasaan anda.",
    interaction: ["Taip refleksi anda", "Klik Simpan Refleksi"],
    notes: "Slide refleksi — kotak teks untuk pengguna tulis.",
    render: function(el) {
      const saved = window.pjpkStorage.getReflection(3);
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">💭 Refleksi: Video Pembuka</h2>
        <div class="slide-body">
          <div style="background:linear-gradient(135deg,#6D28D9,#7C3AED);border-radius:14px;padding:20px;color:#fff;text-align:center">
            <div style="font-size:3rem;margin-bottom:8px">🎬</div>
            <div style="font-size:1rem;font-weight:700;margin-bottom:4px">Video Pembuka Telah Ditayangkan</div>
            <div style="font-size:0.8rem;opacity:0.85">Sila berikan refleksi anda berdasarkan video yang ditonton</div>
          </div>
          <div class="reflection-wrap">
            <div class="reflection-prompt">
              <span>❓</span>
              <span>Apakah <strong>reaksi</strong> dan <strong>perasaan</strong> anda berkenaan video tersebut? Apakah yang bermakna bagi anda?</span>
            </div>
            <textarea id="reflection-3" class="reflection-textarea" placeholder="Tulis refleksi anda di sini... (contoh: Saya rasa teruja dengan pendekatan baru PJPK KP2027 kerana...)" rows="5">${saved || ''}</textarea>
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
              <button class="btn-save-reflection" onclick="window.pjpkStorage.saveReflection(3, document.getElementById('reflection-3').value); document.getElementById('reflection-saved-3').classList.add('show'); window.pjpkApp.showToast('✅ Refleksi disimpan!')">💾 Simpan Refleksi</button>
              <div id="reflection-saved-3" class="reflection-saved-msg ${saved ? 'show' : ''}">✅ Refleksi disimpan!</div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 4 ── */
  {
    no: 4,
    type: "content",
    animation: "zoom",
    title: "Kandungan Modul",
    objective: "Memberi gambaran keseluruhan enam perkara utama dalam modul penataran.",
    vo: "Modul Penataran KP2027 PJPK Tingkatan 1 mengandungi enam perkara utama. Anda boleh klik pada mana-mana kad untuk melompat terus ke bahagian tersebut, atau tekan Seterusnya untuk meneruskan secara berurutan.",
    interaction: ["Klik kad untuk lompat ke topik berkaitan"],
    notes: "Interaktif: klik kad untuk lompat ke slide.",
    render: function(el) {
      const items = [
        { no:'01', icon:'📖', label:'Pengenalan PJPK', slide:5, color:'#EFF6FF', border:'#93c5fd' },
        { no:'02', icon:'🎯', label:'Matlamat & Objektif', slide:10, color:'#F0FDF4', border:'#86EFAC' },
        { no:'03', icon:'🏃', label:'Bidang Pembelajaran', slide:16, color:'#FEF3C7', border:'#FCD34D' },
        { no:'04', icon:'💪', label:'Kecergasan Fizikal', slide:24, color:'#FFF1F2', border:'#FCA5A5' },
        { no:'05', icon:'🤝', label:'PEERS', slide:26, color:'#F5F3FF', border:'#C4B5FD' },
        { no:'06', icon:'🥗', label:'Pemakanan & Bantu Mula', slide:28, color:'#ECFDF5', border:'#6EE7B7' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📋 Kandungan Modul</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--3">
            ${items.map(i => `
              <div class="content-card content-card--clickable" 
                   style="background:${i.color};border-color:${i.border};text-align:center"
                   onclick="window.pjpkApp.goToSlide(${i.slide})">
                <div style="font-size:2rem;margin-bottom:6px">${i.icon}</div>
                <div class="card-num" style="color:${i.border.replace('c4b5fd','6D28D9').replace('93c5fd','2563EA').replace('86efac','10B981').replace('fcd34d','D97706').replace('fca5a5','DC2626').replace('6ee7b7','059669')}">${i.no}</div>
                <div class="card-label">${i.label}</div>
                <div style="font-size:0.7rem;color:#94a3b8;margin-top:4px">Klik untuk buka →</div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 5 ── */
  {
    no: 5,
    type: "content",
    animation: "fade",
    title: "Pengenalan PJPK",
    objective: "Memahami konsep asas Pendidikan Jasmani dan Pendidikan Kesihatan (PJPK).",
    vo: "Pendidikan Jasmani dan Pendidikan Kesihatan, atau PJPK, ialah satu mata pelajaran yang direka untuk membantu murid mencapai literasi fizikal dan literasi kesihatan. PJPK merangkumi tiga domain pembelajaran utama iaitu psikomotor, kognitif, dan afektif.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Pengenalan umum PJPK KP2027.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📚 Pengenalan PJPK</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#1e3a8a,#2563EA);color:#fff;border:none;padding:20px">
            <div style="font-size:0.75rem;opacity:0.8;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px">DEFINISI RINGKAS</div>
            <p style="font-size:1rem;line-height:1.6;font-style:italic">"Mata pelajaran yang membantu murid mencapai <strong style="color:#FCD34D">literasi fizikal</strong> dan <strong style="color:#FCD34D">literasi kesihatan</strong> melalui pelbagai aktiviti jasmani dan pembelajaran kesihatan."</p>
          </div>
          <div class="card-grid card-grid--3">
            ${[
              { icon:'🏋️', color:'#FEF3C7', border:'#F59E0B', title:'PSIKOMOTOR', desc:'Kemahiran fizikal, pergerakan, koordinasi dan kelincahan badan.' },
              { icon:'🧠', color:'#DBEAFE', border:'#2563EA', title:'KOGNITIF', desc:'Pengetahuan, pemahaman dan aplikasi konsep jasmani dan kesihatan.' },
              { icon:'❤️', color:'#D1FAE5', border:'#10B981', title:'AFEKTIF', desc:'Nilai murni, sikap positif, semangat berpasukan dan tanggungjawab.' },
            ].map(d => `
              <div class="content-card" style="background:${d.color};border-color:${d.border};text-align:center">
                <div style="font-size:2rem;margin-bottom:6px">${d.icon}</div>
                <div class="card-label" style="font-size:0.8rem">${d.title}</div>
                <div class="card-desc">${d.desc}</div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 6 ── */
  {
    no: 6,
    type: "content",
    animation: "fade",
    title: "Status Mata Pelajaran PJPK",
    objective: "Mengenal pasti status mata pelajaran PJPK dalam sistem persekolahan Malaysia.",
    vo: "PJPK adalah mata pelajaran TERAS dan WAJIB dalam sistem persekolahan Malaysia. Ini bermakna semua murid perlu mengambil mata pelajaran ini dan ia merupakan sebahagian daripada penilaian akademik mereka.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Status: Teras, Elektif, Wajib, Tambahan.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🏷️ Status Mata Pelajaran PJPK</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--2">
            ${[
              { icon:'⭐', label:'TERAS', desc:'Mata pelajaran asas yang mesti dipelajari oleh SEMUA murid.', active:true },
              { icon:'📌', label:'ELEKTIF', desc:'Mata pelajaran pilihan berdasarkan aliran atau minat murid.', active:false },
              { icon:'✅', label:'WAJIB', desc:'Mata pelajaran yang MESTI diambil dan dinilai untuk sijil.', active:true },
              { icon:'➕', label:'TAMBAHAN', desc:'Mata pelajaran opsyen di luar sukatan minimum.', active:false },
            ].map(s => `
              <div class="content-card ${s.active ? 'content-card--highlighted' : ''}" style="${s.active ? 'border-color:#2563EA;' : ''}">
                <div style="display:flex;gap:12px;align-items:center">
                  <span style="font-size:2rem">${s.icon}</span>
                  <div>
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                      <span class="card-label">${s.label}</span>
                      ${s.active ? '<span class="tag" style="background:#2563EA;color:#fff;font-size:0.65rem">PJPK</span>' : ''}
                    </div>
                    <div class="card-desc">${s.desc}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="background:linear-gradient(135deg,#2563EA,#1e3a8a);border-radius:14px;padding:16px;color:#fff;display:flex;gap:12px;align-items:center">
            <span style="font-size:2rem">⚡</span>
            <div>
              <div style="font-weight:700;font-size:0.95rem;margin-bottom:4px">PJPK = Mata Pelajaran TERAS & WAJIB</div>
              <div style="font-size:0.8rem;opacity:0.85">Semua murid Tingkatan 1 WAJIB mengambil mata pelajaran PJPK tanpa pengecualian.</div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 7 ── */
  {
    no: 7,
    type: "content",
    animation: "peel",
    title: "Definisi PJPK & Peruntukan Masa",
    objective: "Memahami definisi rasmi PJPK dan peruntukan masa pembelajaran seminggu.",
    vo: "PJPK ialah mata pelajaran wajib yang menyediakan peluang kepada murid untuk mengembangkan potensi dan kesihatan secara menyeluruh melalui aktiviti jasmani dan kesihatan. Masa yang diperuntukkan adalah 4 waktu seminggu, terdiri daripada 2 waktu Pendidikan Jasmani dan 2 waktu Pendidikan Kesihatan.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Definisi + 4 waktu seminggu.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📖 Definisi PJPK & Peruntukan Masa</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#F0F9FF,#E0F2FE);border-color:#38BDF8;padding:20px">
            <div class="section-label">Definisi Rasmi KP2027</div>
            <p style="font-size:0.95rem;color:#0C4A6E;line-height:1.7;font-style:italic">"PJPK ialah mata pelajaran <strong>wajib</strong> yang menyediakan peluang kepada murid untuk mengembangkan potensi dan kesihatan secara <strong>menyeluruh</strong> melalui aktiviti jasmani dan kesihatan."</p>
          </div>
          <div class="card-grid card-grid--2">
            <div class="content-card" style="background:linear-gradient(135deg,#EFF6FF,#DBEAFE);border-color:#2563EA;text-align:center;padding:20px">
              <div style="font-size:3rem;font-weight:700;color:#2563EA;line-height:1">4</div>
              <div style="font-size:0.9rem;font-weight:700;color:#1e3a8a;margin:4px 0">Waktu Seminggu</div>
              <div style="font-size:0.75rem;color:#64748b">Jumlah masa pembelajaran PJPK</div>
            </div>
            <div class="card-grid" style="gap:8px;grid-template-columns:1fr">
              <div class="content-card" style="background:#EFF6FF;border-color:#93c5fd;padding:12px;display:flex;gap:10px;align-items:center">
                <span style="font-size:1.5rem">⚽</span>
                <div><div class="card-label">2 Waktu</div><div class="card-desc">Pendidikan Jasmani (PJ)</div></div>
              </div>
              <div class="content-card" style="background:#F0FDF4;border-color:#86EFAC;padding:12px;display:flex;gap:10px;align-items:center">
                <span style="font-size:1.5rem">💊</span>
                <div><div class="card-label">2 Waktu</div><div class="card-desc">Pendidikan Kesihatan (PK)</div></div>
              </div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 8 ── */
  {
    no: 8,
    type: "content",
    animation: "zoom",
    title: "Literasi Fizikal & Literasi Kesihatan",
    objective: "Memahami konsep Literasi Fizikal dan Literasi Kesihatan dalam PJPK KP2027.",
    vo: "Klik pada setiap kad untuk melihat definisi Literasi Fizikal dan Literasi Kesihatan. Kedua-dua literasi ini adalah asas kepada pembelajaran PJPK Tingkatan 1.",
    interaction: ["Klik kad untuk flip dan lihat definisi"],
    notes: "Interaktif: flip card on click.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📘 Literasi Fizikal & Literasi Kesihatan</h2>
        <div class="slide-body">
          <p style="font-size:0.82rem;color:#64748b;text-align:center">👆 Klik pada setiap kad untuk melihat definisi</p>
          <div class="card-grid card-grid--2" style="gap:16px">
            <div class="flip-card-wrap" id="flip-literasi-fizikal" onclick="window.pjpkInteractions.toggleFlip(this)">
              <div class="flip-card">
                <div class="flip-card__front">
                  <div style="font-size:3rem">🏃‍♂️</div>
                  <div style="font-size:1rem;font-weight:700;color:#1e3a8a;margin-top:10px">Literasi Fizikal</div>
                  <div class="flip-hint">Klik untuk lihat definisi →</div>
                </div>
                <div class="flip-card__back">
                  <div style="font-size:1.5rem;margin-bottom:8px">🏃‍♂️</div>
                  <div style="font-size:0.85rem;font-weight:700;margin-bottom:8px;color:#FCD34D">Literasi Fizikal</div>
                  <p style="font-size:0.78rem;line-height:1.6;opacity:0.9">Keupayaan seseorang untuk bergerak dengan cekap dan yakin dalam pelbagai situasi fizikal, serta memahami kepentingan aktiviti fizikal untuk kehidupan aktif dan sihat.</p>
                </div>
              </div>
            </div>
            <div class="flip-card-wrap" id="flip-literasi-kesihatan" onclick="window.pjpkInteractions.toggleFlip(this)">
              <div class="flip-card">
                <div class="flip-card__front">
                  <div style="font-size:3rem">💊</div>
                  <div style="font-size:1rem;font-weight:700;color:#065f46;margin-top:10px">Literasi Kesihatan</div>
                  <div class="flip-hint">Klik untuk lihat definisi →</div>
                </div>
                <div class="flip-card__back" style="background:linear-gradient(135deg,#065f46,#059669)">
                  <div style="font-size:1.5rem;margin-bottom:8px">💊</div>
                  <div style="font-size:0.85rem;font-weight:700;margin-bottom:8px;color:#A7F3D0">Literasi Kesihatan</div>
                  <p style="font-size:0.78rem;line-height:1.6;opacity:0.9">Keupayaan seseorang untuk mendapatkan, memahami, dan menggunakan maklumat dan perkhidmatan kesihatan bagi membuat keputusan yang baik untuk kesihatan diri dan komuniti.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 9 — QUIZ 1 ── */
  {
    no: 9,
    type: "quiz",
    animation: "zoom",
    title: "Kuiz 1: Definisi PJPK",
    objective: "Menguji pemahaman peserta tentang definisi PJPK yang betul.",
    vo: "Sila pilih jawapan yang anda fikir betul. Baca setiap pilihan dengan teliti sebelum memilih. Anda hanya mempunyai satu peluang untuk menjawab.",
    interaction: ["Klik pilihan jawapan", "Semak jawapan anda"],
    notes: "Quiz 1 — definisi PJPK.",
    quizData: {
      question: "Yang manakah merupakan definisi yang BETUL tentang PJPK?",
      options: [
        { key:'A', text:'Mata pelajaran elektif yang mengajar kemahiran sukan dan permainan sahaja kepada murid berbakat.' },
        { key:'B', text:'Mata pelajaran wajib yang menyediakan peluang murid mengembangkan potensi dan kesihatan melalui aktiviti jasmani dan kesihatan.', correct:true },
        { key:'C', text:'Mata pelajaran tambahan untuk pelajar yang berminat dalam bidang sukan di peringkat kebangsaan.' },
        { key:'D', text:'Kelas kokurikulum yang dijalankan di luar waktu sekolah untuk pelajar aktif.' },
      ],
      explanation: 'PJPK adalah mata pelajaran WAJIB (bukan elektif atau tambahan) yang bertujuan mengembangkan potensi murid secara menyeluruh melalui aktiviti jasmani DAN kesihatan.'
    },
    render: function(el) {
      renderQuiz(el, this);
    }
  },

  /* ───────────────────────────── SLIDE 10 ── */
  {
    no: 10,
    type: "content",
    animation: "fade",
    title: "Matlamat PJPK",
    objective: "Memahami matlamat utama mata pelajaran PJPK KP2027.",
    vo: "Matlamat PJPK adalah untuk melahirkan murid yang cergas, sihat, berpengetahuan, berkemahiran, dan mempunyai nilai murni melalui amalan gaya hidup aktif dan sihat. Empat fokus utama adalah kecergasan fizikal, kesihatan dan keselamatan, pengetahuan dan kemahiran, serta pemupukan nilai murni.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Matlamat PJPK — 4 fokus utama.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🏆 Matlamat PJPK</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#1e3a8a,#2563EA);color:#fff;border:none;text-align:center;padding:24px">
            <div style="font-size:2rem;margin-bottom:10px">🏆</div>
            <p style="font-size:0.95rem;line-height:1.7;font-style:italic">"Untuk melahirkan murid yang <strong style="color:#FCD34D">cergas</strong>, <strong style="color:#FCD34D">sihat</strong>, <strong style="color:#FCD34D">berpengetahuan</strong>, <strong style="color:#FCD34D">berkemahiran</strong>, dan mempunyai <strong style="color:#FCD34D">nilai murni</strong> melalui amalan gaya hidup aktif dan sihat."</p>
          </div>
          <div class="card-grid card-grid--2">
            ${[
              { icon:'💪', color:'#FEF3C7', border:'#F59E0B', title:'Cergas & Aktif', desc:'Murid mampu aktif secara fizikal dalam kehidupan seharian dan mengekalkan tahap kecergasan yang baik.' },
              { icon:'🏥', color:'#D1FAE5', border:'#10B981', title:'Sihat & Selamat', desc:'Murid mengamalkan gaya hidup sihat dan menjaga keselamatan diri dalam aktiviti fizikal.' },
              { icon:'📚', color:'#DBEAFE', border:'#2563EA', title:'Berpengetahuan', desc:'Murid memiliki pengetahuan tentang konsep PJPK, sains sukan, dan pendidikan kesihatan.' },
              { icon:'🌟', color:'#F5F3FF', border:'#7C3AED', title:'Nilai Murni', desc:'Murid memupuk nilai murni seperti semangat berpasukan, jujur, dan bertanggungjawab.' },
            ].map(d => `
              <div class="content-card" style="background:${d.color};border-color:${d.border}">
                <div class="card-icon">${d.icon}</div>
                <div class="card-label">${d.title}</div>
                <div class="card-desc">${d.desc}</div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 11 ── */
  {
    no: 11,
    type: "content",
    animation: "fade",
    title: "Objektif Umum PJPK (1–4)",
    objective: "Memahami empat objektif umum pertama mata pelajaran PJPK KP2027.",
    vo: "Terdapat lapan objektif umum PJPK. Objektif pertama adalah menguasai kemahiran asas pergerakan. Kedua, memahami konsep dan prinsip aktiviti jasmani. Ketiga, mengamalkan gaya hidup aktif dan sihat. Keempat, mengaplikasikan nilai murni dan etika dalam aktiviti jasmani.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Objektif 1-4.",
    render: function(el) {
      const objs = [
        { n:1, icon:'🏃', text:'Menguasai kemahiran asas pergerakan dan kemahiran sukan yang pelbagai dengan cekap dan yakin.' },
        { n:2, icon:'🧠', text:'Memahami konsep dan prinsip yang berkaitan dengan aktiviti jasmani, sains sukan, dan kesihatan.' },
        { n:3, icon:'🌿', text:'Mengamalkan gaya hidup aktif dan sihat sebagai satu amalan berterusan dalam kehidupan seharian.' },
        { n:4, icon:'⭐', text:'Mengaplikasikan nilai murni, etika, dan semangat sukan yang baik dalam semua aktiviti jasmani.' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📋 Objektif Umum PJPK (1–4)</h2>
        <div class="slide-body">
          <div style="display:flex;flex-direction:column;gap:10px">
            ${objs.map(o => `
              <div class="content-card" style="display:flex;gap:14px;align-items:flex-start;padding:14px 16px">
                <div style="background:#2563EA;color:#fff;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">${o.n}</div>
                <div style="display:flex;gap:8px;align-items:flex-start">
                  <span style="font-size:1.3rem">${o.icon}</span>
                  <p style="font-size:0.85rem;color:#374151;line-height:1.55">${o.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 12 ── */
  {
    no: 12,
    type: "content",
    animation: "fade",
    title: "Objektif Umum PJPK (5–8)",
    objective: "Memahami empat objektif umum kedua mata pelajaran PJPK KP2027.",
    vo: "Empat objektif seterusnya: Kelima, membina kerjasama, kepimpinan, dan semangat berpasukan. Keenam, memahami kepentingan pemakanan seimbang untuk kesihatan optimum. Ketujuh, menguasai kemahiran pertolongan cemas asas. Kelapan, menghargai kepelbagaian budaya melalui permainan tradisional.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Objektif 5-8.",
    render: function(el) {
      const objs = [
        { n:5, icon:'🤝', text:'Membina kerjasama, kepimpinan, semangat berpasukan, dan tanggungjawab sosial melalui aktiviti berkumpulan.' },
        { n:6, icon:'🥗', text:'Memahami kepentingan pemakanan yang seimbang dan berkhasiat untuk mencapai kesihatan yang optimum.' },
        { n:7, icon:'🚑', text:'Menguasai kemahiran pertolongan cemas asas dan bertindak balas dengan betul dalam situasi kecemasan.' },
        { n:8, icon:'🎭', text:'Menghargai kepelbagaian budaya dan warisan bangsa Malaysia melalui permainan tradisional dan aktiviti rekreasi.' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📋 Objektif Umum PJPK (5–8)</h2>
        <div class="slide-body">
          <div style="display:flex;flex-direction:column;gap:10px">
            ${objs.map(o => `
              <div class="content-card" style="display:flex;gap:14px;align-items:flex-start;padding:14px 16px">
                <div style="background:#1e3a8a;color:#fff;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0">${o.n}</div>
                <div style="display:flex;gap:8px;align-items:flex-start">
                  <span style="font-size:1.3rem">${o.icon}</span>
                  <p style="font-size:0.85rem;color:#374151;line-height:1.55">${o.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 13 ── */
  {
    no: 13,
    type: "content",
    animation: "morph",
    title: "Fokus PJPK — Tiga Domain",
    objective: "Memahami tiga domain pembelajaran utama dalam PJPK: Psikomotor, Kognitif, Afektif.",
    vo: "PJPK memberi tumpuan kepada tiga domain pembelajaran. Domain Psikomotor merangkumi kemahiran pergerakan dan fizikal. Domain Kognitif melibatkan pengetahuan dan pemahaman konsep. Domain Afektif pula memupuk nilai murni, sikap positif, dan semangat sukan.",
    interaction: ["Hover/klik pada setiap domain kad untuk kembangkan"],
    notes: "Interaktif: hover expand domain kad.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🎯 Fokus PJPK — Tiga Domain</h2>
        <div class="slide-body">
          <p style="font-size:0.8rem;color:#64748b;text-align:center">👆 Hover atau klik pada setiap kad untuk melihat butiran lanjut</p>
          <div class="card-grid card-grid--3" style="gap:14px">
            <div class="domain-card domain-card--psikomor">
              <div style="font-size:2.2rem;margin-bottom:8px">🏋️</div>
              <div class="domain-card__title" style="color:#92400E">PSIKOMOTOR</div>
              <div class="domain-card__desc">Kemahiran pergerakan, koordinasi, keseimbangan dan daya ketahanan fizikal.</div>
              <div class="domain-card__extra">
                <hr style="border-color:#F59E0B;margin:8px 0"/>
                <strong>Contoh aktiviti:</strong><br/>
                • Tarian Joget & Sewang<br/>• Gimnastik Asas (lantunan)<br/>• Sukan & Permainan<br/>• Ujian SEGAK
              </div>
            </div>
            <div class="domain-card domain-card--kognitif">
              <div style="font-size:2.2rem;margin-bottom:8px">🧠</div>
              <div class="domain-card__title" style="color:#1e3a8a">KOGNITIF</div>
              <div class="domain-card__desc">Pengetahuan, pemahaman, analisis dan aplikasi konsep dalam aktiviti jasmani.</div>
              <div class="domain-card__extra">
                <hr style="border-color:#2563EA;margin:8px 0"/>
                <strong>Contoh aktiviti:</strong><br/>
                • Prinsip FITT<br/>• Peraturan sukan<br/>• Pengetahuan pemakanan<br/>• Pertolongan cemas
              </div>
            </div>
            <div class="domain-card domain-card--afektif">
              <div style="font-size:2.2rem;margin-bottom:8px">❤️</div>
              <div class="domain-card__title" style="color:#065f46">AFEKTIF</div>
              <div class="domain-card__desc">Nilai murni, sikap positif, tanggungjawab sosial dan semangat sukan.</div>
              <div class="domain-card__extra">
                <hr style="border-color:#10B981;margin:8px 0"/>
                <strong>Contoh nilai:</strong><br/>
                • Semangat berpasukan<br/>• Tanggungjawab kendiri<br/>• Interaksi sosial positif<br/>• Kerjasama
              </div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 14 ── */
  {
    no: 14,
    type: "content",
    animation: "fade",
    title: "Fokus Menengah Rendah (Tingkatan 1–3)",
    objective: "Memahami fokus pembelajaran PJPK bagi Tingkatan 1, 2, dan 3.",
    vo: "Bagi peringkat Menengah Rendah, setiap tingkatan mempunyai fokus pembelajaran yang berbeza namun saling berkaitan. Tingkatan 1 memberi tumpuan kepada asas pergerakan dan kecergasan. Tingkatan 2 meluaskan kemahiran dan memperkenalkan PEERS. Tingkatan 3 mengintegrasikan semua kemahiran dengan elemen kepimpinan.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Fokus Tingkatan 1-3.",
    render: function(el) {
      const t = [
        { ting:'T1', title:'Tingkatan 1', icon:'🌱', color:'#EFF6FF', border:'#93c5fd', items:['Asas Pergerakan (Berirama & Gimnastik)','Pengenalan 7 Bidang Pembelajaran','Kecergasan Fizikal — Prinsip FITT','PEERS — Pengenalan','Pemakanan & Bantu Mula Asas'] },
        { ting:'T2', title:'Tingkatan 2', icon:'🌿', color:'#F0FDF4', border:'#86EFAC', items:['Kemahiran Sukan Lanjutan','Pelbagai Sukan & Permainan','PEERS — Pengembangan','Kecergasan — SEGAK','Rekreasi & Pendidikan Luar'] },
        { ting:'T3', title:'Tingkatan 3', icon:'🌳', color:'#FEF3C7', border:'#FCD34D', items:['Integrasi Kemahiran Sukan','Kepimpinan & Pengurusan','Program Kecergasan Peribadi','PEERS — Aplikasi Kehidupan','Pertolongan Cemas Lanjutan'] },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📊 Fokus Menengah Rendah (T1–T3)</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--3" style="gap:12px">
            ${t.map(tt => `
              <div class="content-card" style="background:${tt.color};border-color:${tt.border};padding:16px">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
                  <span style="font-size:1.5rem">${tt.icon}</span>
                  <div><div style="font-size:0.72rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">${tt.ting}</div><div class="card-label">${tt.title}</div></div>
                </div>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:5px">
                  ${tt.items.map(item => `<li style="font-size:0.75rem;color:#374151;display:flex;gap:6px;line-height:1.4"><span style="color:#2563EA;flex-shrink:0">•</span>${item}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 15 ── */
  {
    no: 15,
    type: "content",
    animation: "fade",
    title: "Fokus Menengah Rendah (Tingkatan 4–5)",
    objective: "Memahami fokus pembelajaran PJPK bagi Tingkatan 4 dan 5.",
    vo: "Di Tingkatan 4, pelajar akan mempelajari kemahiran yang lebih advanced dan menyediakan program kecergasan peribadi yang dirancang sendiri. Di Tingkatan 5, pembelajaran bersifat komprehensif dan menyeluruh sebagai persediaan untuk Sijil Pelajaran Malaysia.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Fokus Tingkatan 4-5.",
    render: function(el) {
      const t = [
        { ting:'T4', title:'Tingkatan 4', icon:'🔥', color:'#FFF1F2', border:'#FCA5A5', items:['Kemahiran Sukan Advanced','Program Kecergasan Peribadi','PEERS — Peringkat Lanjut','Kepimpinan dalam Sukan','Nutrisi Sukan & Prestasi'] },
        { ting:'T5', title:'Tingkatan 5', icon:'🏆', color:'#F5F3FF', border:'#C4B5FD', items:['Penilaian Komprehensif','Persediaan Peperiksaan SPM','Integrasi 7 Bidang Pembelajaran','Kemahiran Hidup Berkait PJPK','Perancangan Gaya Hidup Aktif'] },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">📊 Fokus Menengah Rendah (T4–T5)</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--2" style="gap:14px">
            ${t.map(tt => `
              <div class="content-card" style="background:${tt.color};border-color:${tt.border};padding:18px">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
                  <span style="font-size:2rem">${tt.icon}</span>
                  <div><div style="font-size:0.72rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.06em">${tt.ting}</div><div class="card-label;font-size:1rem">${tt.title}</div></div>
                </div>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:7px">
                  ${tt.items.map((item, idx) => `<li style="font-size:0.82rem;color:#374151;display:flex;gap:8px;line-height:1.45;align-items:flex-start"><span style="background:#2563EA;color:#fff;border-radius:4px;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0;margin-top:1px">${idx+1}</span>${item}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
          <div class="content-card" style="background:linear-gradient(135deg,#1e3a8a,#2563EA);color:#fff;border:none;padding:16px;display:flex;gap:12px;align-items:center">
            <span style="font-size:2rem">⚡</span>
            <div>
              <div style="font-weight:700;margin-bottom:4px">Kontinuiti Kurikulum KP2027</div>
              <div style="font-size:0.8rem;opacity:0.85">Setiap tahap pembelajaran PJPK dibina di atas asas yang kukuh dari tahap sebelumnya — berperingkat dan berterusan.</div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 16 ── */
  {
    no: 16,
    type: "content",
    animation: "zoom",
    title: "7 Bidang Pembelajaran PJPK",
    objective: "Mengenal pasti tujuh bidang pembelajaran utama dalam PJPK KP2027 Tingkatan 1.",
    vo: "PJPK Tingkatan 1 merangkumi tujuh bidang pembelajaran utama. Klik pada mana-mana bidang untuk melihat maklumat lanjut. Setiap bidang mempunyai subbidang dan aktiviti tersendiri yang dibina mengikut keperluan perkembangan murid.",
    interaction: ["Klik pada kad bidang untuk highlight dan navigasi"],
    notes: "Interaktif: grid 7 kad boleh diklik.",
    render: function(el) {
      const bidang = [
        { no:'1.0', icon:'🤸', label:'Asas Pergerakan', slide:17, color:'#FEF3C7', border:'#F59E0B' },
        { no:'2.0', icon:'⚽', label:'Sukan & Permainan', slide:20, color:'#DBEAFE', border:'#2563EA' },
        { no:'3.0', icon:'🏕️', label:'Rekreasi & Pendidikan Luar', slide:22, color:'#D1FAE5', border:'#10B981' },
        { no:'4.0', icon:'💪', label:'Kecergasan Fizikal', slide:24, color:'#FEE2E2', border:'#EF4444' },
        { no:'5.0', icon:'🤝', label:'PEERS', slide:26, color:'#F5F3FF', border:'#7C3AED' },
        { no:'6.0', icon:'🥗', label:'Pemakanan', slide:28, color:'#ECFDF5', border:'#059669' },
        { no:'7.0', icon:'🚑', label:'Respons & Bantu Mula', slide:29, color:'#FFF7ED', border:'#EA580C' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🏫 7 Bidang Pembelajaran PJPK</h2>
        <div class="slide-body">
          <p style="font-size:0.8rem;color:#64748b;text-align:center">👆 Klik pada mana-mana bidang untuk maklumat lanjut</p>
          <div class="card-grid card-grid--7" style="gap:10px">
            ${bidang.map(b => `
              <div class="bidang-card" style="background:${b.color};border-color:${b.border}" onclick="window.pjpkInteractions.highlightBidang(this, ${b.slide})">
                <div style="font-size:1.8rem;margin-bottom:4px">${b.icon}</div>
                <div class="bidang-num" style="color:${b.border}">${b.no}</div>
                <div class="bidang-label">${b.label}</div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 17 ── */
  {
    no: 17,
    type: "content",
    animation: "peel",
    title: "1.0 Bidang Pembelajaran: Asas Pergerakan",
    objective: "Memahami skop Bidang Pembelajaran 1.0 — Asas Pergerakan dalam PJPK KP2027.",
    vo: "Bidang Pembelajaran 1.0 iaitu Asas Pergerakan merangkumi dua subbidang utama: Pergerakan Berirama dan Gimnastik Asas. Bidang ini membentuk asas kepada semua aktiviti jasmani dan membangunkan koordinasi, keseimbangan, serta kepekaan irama dalam diri murid.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Slide Bidang 1.0 — overview.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🤸 1.0 Asas Pergerakan</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#FEF3C7,#FDE68A);border-color:#F59E0B;text-align:center;padding:20px">
            <div style="font-size:3rem;margin-bottom:8px">🤸‍♀️</div>
            <div class="card-label" style="font-size:0.95rem;color:#92400E">Bidang Pembelajaran 1.0</div>
            <div class="card-desc" style="color:#78350F;margin-top:6px;line-height:1.6">Merangkumi pergerakan asas yang membentuk teras kepada semua aktiviti jasmani — dari koordinasi badan hingga kepekaan irama.</div>
          </div>
          <div class="card-grid card-grid--2" style="gap:12px">
            <div class="content-card" style="background:#EFF6FF;border-color:#93c5fd;padding:18px">
              <div style="font-size:2rem;margin-bottom:8px">💃</div>
              <div class="card-label">1.1 Pergerakan Berirama</div>
              <div class="card-desc" style="margin-top:4px">Tarian Joget & Tarian Sewang — gerakan badan mengikut irama muzik tradisional Malaysia.</div>
              <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
                <span class="tag">Psikomotor</span><span class="tag">Kognitif</span><span class="tag">Afektif</span>
              </div>
            </div>
            <div class="content-card" style="background:#FEF3C7;border-color:#FCD34D;padding:18px">
              <div style="font-size:2rem;margin-bottom:8px">🤸</div>
              <div class="card-label">1.2 Gimnastik Asas</div>
              <div class="card-desc" style="margin-top:4px">Lantunan & Layangan di atas trampolin — kemahiran fizikal asas dengan alatan gimnastik.</div>
              <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
                <span class="tag tag--yellow">Psikomotor</span><span class="tag tag--yellow">Kognitif</span><span class="tag tag--yellow">Afektif</span>
              </div>
            </div>
          </div>
          <div class="content-card" style="border-color:#e2e8f0">
            <div class="section-label">Kompetensi yang Dibina</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
              ${['Perkembangan Diri','Literasi Pelbagai','Komunikasi','Kemahiran Berfikir','Nilai Murni'].map(k => `<span class="tag">${k}</span>`).join('')}
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 18 ── */
  {
    no: 18,
    type: "content",
    animation: "peel",
    title: "1.1 Pergerakan Berirama & 1.2 Gimnastik Asas",
    objective: "Memahami standard pembelajaran Pergerakan Berirama dan Gimnastik Asas secara terperinci.",
    vo: "Subbidang 1.1 Pergerakan Berirama memperkenalkan Tarian Joget dan Tarian Sewang, dua tarian tradisional Malaysia. Murid akan belajar meniru langkah dan mempersembahkannya mengikut muzik. Subbidang 1.2 Gimnastik Asas melibatkan lantunan dan layangan di atas trampolin yang membina koordinasi dan keberanian.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Detail standard pembelajaran 1.1 dan 1.2.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">💃 1.1 Berirama & 🤸 1.2 Gimnastik</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--2" style="gap:12px">
            <div class="content-card" style="background:#EFF6FF;border-color:#93c5fd;padding:16px">
              <div style="font-weight:700;color:#1e3a8a;font-size:0.9rem;margin-bottom:10px;display:flex;gap:6px">💃 1.1 Pergerakan Berirama</div>
              <div style="display:flex;flex-direction:column;gap:6px">
                ${[
                  { domain:'PSIKOMOTOR', color:'#FEF3C7', tc:'#92400E', text:'P1.1.2 Meniru langkah tarian Joget dan Sewang dengan betul mengikut muzik yang didengar.' },
                  { domain:'KOGNITIF', color:'#DBEAFE', tc:'#1e3a8a', text:'K1.1.2 Menyatakan langkah asas dalam tarian Joget dan Sewang.' },
                  { domain:'AFEKTIF', color:'#D1FAE5', tc:'#065f46', text:'A1.1.3 Mempamerkan keseronokan semasa melakukan aktiviti dan A1.1.4 Berinteraksi positif tanpa mengira perbezaan.' },
                ].map(d => `
                  <div style="background:${d.color};border-radius:8px;padding:8px 10px">
                    <div style="font-size:0.65rem;font-weight:700;color:${d.tc};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:3px">${d.domain}</div>
                    <div style="font-size:0.75rem;color:#374151;line-height:1.45">${d.text}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="content-card" style="background:#FEF3C7;border-color:#FCD34D;padding:16px">
              <div style="font-weight:700;color:#92400E;font-size:0.9rem;margin-bottom:10px;display:flex;gap:6px">🤸 1.2 Gimnastik Asas</div>
              <div style="display:flex;flex-direction:column;gap:6px">
                ${[
                  { domain:'PSIKOMOTOR', color:'#FEF3C7', tc:'#92400E', text:'P1.2.1 Melakukan kemahiran lantunan dan layangan di atas trampolin dengan cekap.' },
                  { domain:'KOGNITIF', color:'#DBEAFE', tc:'#1e3a8a', text:'K1.2.1 Menjelaskan hubung kait antara aras lantunan dan layangan di atas trampolin.' },
                  { domain:'AFEKTIF', color:'#D1FAE5', tc:'#065f46', text:'A1.2.1 Bersedia dari segi pakaian dan peralatan yang selamat sebelum aktiviti.' },
                ].map(d => `
                  <div style="background:${d.color};border-radius:8px;padding:8px 10px">
                    <div style="font-size:0.65rem;font-weight:700;color:${d.tc};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:3px">${d.domain}</div>
                    <div style="font-size:0.75rem;color:#374151;line-height:1.45">${d.text}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 19 — QUIZ 2 ── */
  {
    no: 19,
    type: "quiz",
    animation: "zoom",
    title: "Kuiz 2: Bidang Asas Pergerakan",
    objective: "Menguji pemahaman peserta tentang subbidang Asas Pergerakan.",
    vo: "Soalan ini menguji pemahaman anda tentang Bidang Pembelajaran Asas Pergerakan. Fikirkan dengan teliti — manakah aktiviti yang tergolong dalam Pergerakan Berirama berbanding Gimnastik Asas?",
    interaction: ["Klik pilihan jawapan", "Semak jawapan anda"],
    notes: "Quiz 2 — padankan aktiviti dengan subbidang.",
    quizData: {
      question: "Manakah AKTIVITI yang terdapat dalam Subbidang 1.1 Pergerakan Berirama?",
      options: [
        { key:'A', text:'Lantunan dan layangan di atas trampolin.' },
        { key:'B', text:'Tarian Joget dan Tarian Sewang.', correct:true },
        { key:'C', text:'Bola tampar dan bola jaring.' },
        { key:'D', text:'Jogging dan renang jarak jauh.' },
      ],
      explanation: 'Subbidang 1.1 Pergerakan Berirama merangkumi Tarian Joget dan Tarian Sewang. Lantunan dan layangan di atas trampolin adalah aktiviti dalam Subbidang 1.2 Gimnastik Asas.'
    },
    render: function(el) {
      renderQuiz(el, this);
    }
  },

  /* ───────────────────────────── SLIDE 20 ── */
  {
    no: 20,
    type: "content",
    animation: "fade",
    title: "2.0 Sukan dan Permainan",
    objective: "Memahami skop Bidang Pembelajaran 2.0 — Sukan dan Permainan.",
    vo: "Bidang Pembelajaran 2.0 iaitu Sukan dan Permainan merangkumi lima subbidang utama. Bidang ini memfokuskan kepada penguasaan kemahiran sukan, pemahaman peraturan, dan pembangunan strategi permainan dalam kalangan murid.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Slide overview Bidang 2.0.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">⚽ 2.0 Sukan dan Permainan</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#DBEAFE,#BFDBFE);border-color:#2563EA;text-align:center;padding:20px">
            <div style="font-size:3rem;margin-bottom:8px">⚽🏸🏊</div>
            <div class="card-label" style="color:#1e3a8a;font-size:0.95rem">Bidang Pembelajaran 2.0</div>
            <p class="card-desc" style="color:#1e40af;margin-top:6px;line-height:1.6">Membangunkan kemahiran sukan dan permainan, memahami peraturan, dan membina strategi melalui pelbagai aktiviti sukan berstruktur.</p>
          </div>
          <div class="card-grid card-grid--3">
            ${[
              { icon:'🤜', text:'Kemahiran teknikal sukan' },
              { icon:'📋', text:'Peraturan & etika sukan' },
              { icon:'🧩', text:'Strategi & taktik' },
              { icon:'🤝', text:'Semangat berpasukan' },
              { icon:'🏃', text:'Kecergasan melalui sukan' },
              { icon:'🏆', text:'Semangat pertandingan sihat' },
            ].map(i => `
              <div class="content-card" style="display:flex;gap:8px;align-items:center;padding:10px 12px">
                <span style="font-size:1.4rem">${i.icon}</span>
                <span class="card-desc" style="font-size:0.78rem">${i.text}</span>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 21 ── */
  {
    no: 21,
    type: "content",
    animation: "fade",
    title: "Subbidang 2.1–2.5 Sukan & Permainan",
    objective: "Mengenal pasti lima subbidang dalam Sukan dan Permainan beserta contoh sukan.",
    vo: "Dalam bidang Sukan dan Permainan, terdapat lima subbidang. Subbidang 2.1 melibatkan sukan beregu dan berpasukan seperti bola sepak dan bola jaring. 2.2 adalah sukan individu seperti balapan dan renang. 2.3 merangkumi sukan raket. 2.4 adalah seni bela diri. 2.5 pula memperkenalkan permainan tradisional Malaysia yang kaya budaya.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "5 subbidang Sukan & Permainan.",
    render: function(el) {
      const sub = [
        { no:'2.1', icon:'⚽', label:'Sukan Beregu/Berpasukan', items:['Bola Sepak','Bola Jaring','Bola Tampar','Hoki'], color:'#EFF6FF', border:'#93c5fd' },
        { no:'2.2', icon:'🏃', label:'Sukan Individu', items:['Balapan (100m, 200m)','Padang (Lontar Peluru, Lompat Jauh)','Renang'], color:'#F0FDF4', border:'#86EFAC' },
        { no:'2.3', icon:'🏸', label:'Sukan Raket', items:['Badminton','Tenis','Skuasy'], color:'#FEF3C7', border:'#FCD34D' },
        { no:'2.4', icon:'🥋', label:'Seni Bela Diri', items:['Silat','Taekwondo','Judo'], color:'#FFF1F2', border:'#FCA5A5' },
        { no:'2.5', icon:'🎮', label:'Permainan Tradisional', items:['Congkak','Gasing','Wau','Sepak Takraw'], color:'#F5F3FF', border:'#C4B5FD' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">⚽ Subbidang 2.1–2.5 Sukan & Permainan</h2>
        <div class="slide-body">
          <div style="display:flex;flex-direction:column;gap:8px">
            ${sub.map(s => `
              <div class="content-card" style="background:${s.color};border-color:${s.border};display:flex;gap:12px;align-items:center;padding:12px 16px;flex-wrap:wrap">
                <span style="font-size:1.6rem">${s.icon}</span>
                <div style="min-width:100px">
                  <div style="font-size:0.7rem;font-weight:700;color:#94a3b8;letter-spacing:0.06em">${s.no}</div>
                  <div class="card-label">${s.label}</div>
                </div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;margin-left:auto">
                  ${s.items.map(i => `<span class="tag">${i}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 22 ── */
  {
    no: 22,
    type: "content",
    animation: "peel",
    title: "3.0 Rekreasi dan Pendidikan Luar",
    objective: "Memahami skop Bidang Pembelajaran 3.0 — Rekreasi dan Pendidikan Luar.",
    vo: "Bidang Pembelajaran 3.0 iaitu Rekreasi dan Pendidikan Luar membawa murid ke luar bilik darjah untuk belajar melalui persekitaran semula jadi. Bidang ini membangunkan kemahiran hidup, kecintaan terhadap alam, dan keberanian dalam kalangan murid.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Bidang 3.0 overview.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🏕️ 3.0 Rekreasi & Pendidikan Luar</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#D1FAE5,#A7F3D0);border-color:#10B981;text-align:center;padding:20px">
            <div style="font-size:3rem;margin-bottom:8px">🌿🏕️🏔️</div>
            <div class="card-label" style="color:#065f46;font-size:0.95rem">Belajar di Luar Bilik Darjah</div>
            <p class="card-desc" style="color:#047857;margin-top:6px;line-height:1.6">Pendekatan experiential learning yang menggabungkan aktiviti rekreasi, permainan tradisional, dan pendidikan luar untuk perkembangan holistik murid.</p>
          </div>
          <div class="card-grid card-grid--3">
            ${[
              { icon:'🎮', label:'Permainan Tradisional', desc:'Warisan budaya Malaysia yang kaya', color:'#FEF3C7', border:'#F59E0B' },
              { icon:'🛶', label:'Rekreasi', desc:'Aktiviti leisure aktif dalam alam semula jadi', color:'#DBEAFE', border:'#2563EA' },
              { icon:'🌳', label:'Pendidikan Luar', desc:'Pembelajaran melalui alam dan kem', color:'#D1FAE5', border:'#10B981' },
            ].map(c => `
              <div class="content-card" style="background:${c.color};border-color:${c.border};text-align:center">
                <div class="card-icon">${c.icon}</div>
                <div class="card-label">${c.label}</div>
                <div class="card-desc">${c.desc}</div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 23 ── */
  {
    no: 23,
    type: "content",
    animation: "peel",
    title: "Permainan Tradisional, Rekreasi & Pendidikan Luar",
    objective: "Mengenal pasti aktiviti-aktiviti dalam bidang Rekreasi dan Pendidikan Luar.",
    vo: "Dalam bidang ini, murid didedahkan kepada permainan tradisional Malaysia yang kaya budaya seperti Congkak, Gasing, Batu Seremban, dan Galah Panjang. Aktiviti rekreasi seperti mendaki dan berkayak menambah dimensi cabaran. Pendidikan luar melalui kem dan jungle trekking membina ketahanan diri.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Aktiviti 3 komponen.",
    render: function(el) {
      const sections = [
        { icon:'🎮', title:'Permainan Tradisional', color:'#FEF3C7', border:'#F59E0B', items:[{e:'🪨',n:'Batu Seremban'},{e:'🪀',n:'Gasing'},{e:'🎲',n:'Congkak'},{e:'🏃',n:'Galah Panjang'},{e:'⬛',n:'Teng-teng'},{e:'🤿',n:'Wau'}] },
        { icon:'🛶', title:'Rekreasi', color:'#DBEAFE', border:'#2563EA', items:[{e:'🏔️',n:'Mendaki'},{e:'🛶',n:'Berkayak'},{e:'🧭',n:'Orienteering'},{e:'🚴',n:'Berbasikal'},{e:'🎣',n:'Memancing (edukasi)'},{e:'🏊',n:'Renang rekreasi'}] },
        { icon:'🌳', title:'Pendidikan Luar', color:'#D1FAE5', border:'#10B981', items:[{e:'⛺',n:'Perkhemahan'},{e:'🌿',n:'Jungle Trekking'},{e:'🔭',n:'Nature Study'},{e:'🗺️',n:'Peta & Kompas'},{e:'🔥',n:'Kemahiran Hidup'},{e:'🤝',n:'Aktiviti Pasukan'}] },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🌿 Aktiviti Rekreasi & Pendidikan Luar</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--3" style="gap:12px">
            ${sections.map(s => `
              <div class="content-card" style="background:${s.color};border-color:${s.border};padding:14px">
                <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">
                  <span style="font-size:1.3rem">${s.icon}</span>
                  <div class="card-label">${s.title}</div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">
                  ${s.items.map(i => `<div style="font-size:0.72rem;color:#374151;display:flex;gap:4px;align-items:center"><span>${i.e}</span><span>${i.n}</span></div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="content-card" style="border-color:#10B981;background:#ECFDF5;display:flex;gap:12px;align-items:center;padding:12px 16px">
            <span style="font-size:1.8rem">💡</span>
            <div class="card-desc" style="color:#065f46">Melalui aktiviti luar, murid belajar bekerjasama, membuat keputusan, dan menghargai alam semula jadi — kemahiran hidup yang berkekalan.</div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 24 ── */
  {
    no: 24,
    type: "content",
    animation: "zoom",
    title: "4.0 Kecergasan Fizikal + Prinsip FITT",
    objective: "Memahami Bidang Kecergasan Fizikal dan mengaplikasikan Prinsip FITT.",
    vo: "Bidang 4.0 Kecergasan Fizikal memperkenalkan Prinsip FITT yang merupakan panduan untuk merancang program senaman yang berkesan. FITT adalah singkatan untuk Frequency iaitu kekerapan, Intensity iaitu intensiti, Time iaitu masa, dan Type iaitu jenis aktiviti. Hover atau klik pada setiap huruf untuk melihat definisi lengkap.",
    interaction: ["Hover atau klik pada huruf F-I-T-T untuk tooltip"],
    notes: "Interaktif: tooltip FITT on hover/click.",
    render: function(el) {
      const fitt = [
        { letter:'F', word:'FREQUENCY', color:'#EF4444', desc:'Kekerapan latihan — berapa kali seminggu anda bersenam? (Cadangan: 3–5 kali/minggu)' },
        { letter:'I', word:'INTENSITY', color:'#F59E0B', desc:'Intensiti latihan — seberapa kuat anda bersenam? (Sederhana hingga tinggi berdasarkan kebolehan)' },
        { letter:'T', word:'TIME', color:'#10B981', desc:'Masa latihan — berapa lama setiap sesi? (Cadangan: 20–60 minit setiap sesi)' },
        { letter:'T', word:'TYPE', color:'#2563EA', desc:'Jenis aktiviti — apakah jenis senaman yang dilakukan? (Aerobik, kekuatan, fleksibiliti)' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">💪 Prinsip FITT</h2>
        <div class="slide-body">
          <p style="font-size:0.8rem;color:#64748b;text-align:center">👆 Hover atau klik pada setiap huruf untuk melihat definisi</p>
          <div class="fitt-row">
            ${fitt.map((f, i) => `
              <div class="fitt-card" style="background:linear-gradient(135deg,${f.color},${f.color}cc)" onclick="window.pjpkInteractions.toggleFitt(this)">
                <div class="fitt-card__letter">${f.letter}</div>
                <div class="fitt-card__word">${f.word}</div>
                <div class="fitt-tooltip">${f.desc}</div>
              </div>
            `).join('')}
          </div>
          <div class="card-grid card-grid--2" style="gap:10px;margin-top:4px">
            <div class="content-card" style="background:#EFF6FF;border-color:#93c5fd;padding:12px">
              <div class="card-label">🎯 Tujuan Prinsip FITT</div>
              <div class="card-desc" style="margin-top:4px">Membantu guru dan murid merancang program latihan yang selamat, berkesan, dan sesuai dengan tahap kecergasan masing-masing.</div>
            </div>
            <div class="content-card" style="background:#FEF3C7;border-color:#F59E0B;padding:12px">
              <div class="card-label">📈 Perkembangan Progresif</div>
              <div class="card-desc" style="margin-top:4px">Mulakan dengan intensiti rendah dan tingkatkan secara beransur-ansur mengikut kemajuan fizikal murid.</div>
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 25 ── */
  {
    no: 25,
    type: "content",
    animation: "peel",
    title: "Komponen Kecergasan Berdasarkan Kesihatan + SEGAK",
    objective: "Memahami komponen kecergasan dan ujian SEGAK.",
    vo: "Terdapat lima komponen kecergasan berdasarkan kesihatan. Klik pada setiap komponen untuk melihat definisinya. SEGAK atau Saringan Kecergasan Fizikal Kebangsaan mengandungi empat ujian utama yang menilai tahap kecergasan murid di Malaysia.",
    interaction: ["Klik pada setiap komponen untuk kembang/runtuh"],
    notes: "Interaktif: accordion komponen kecergasan.",
    render: function(el) {
      const components = [
        { title:'❤️ Daya Tahan Kardiovaskular', body:'Keupayaan jantung dan paru-paru untuk bekerja secara berterusan dalam tempoh yang lama. Contoh: berlari 1.6km, berbasikal, berenang.' },
        { title:'💪 Kekuatan Otot', body:'Daya maksimum yang boleh dihasilkan oleh otot atau kumpulan otot dalam satu penguncupan. Contoh: tekan tubi, angkat berat.' },
        { title:'🔁 Daya Tahan Otot', body:'Keupayaan otot untuk melakukan penguncupan berulang kali atau mengekalkan penguncupan dalam tempoh yang panjang. Contoh: sit-up, naik turun bangku.' },
        { title:'🤸 Kelenturan', body:'Julat pergerakan yang terdapat pada sesuatu sendi atau sekumpulan sendi. Contoh: sit dan jangkau, regangan badan.' },
        { title:'⚖️ Komposisi Badan', body:'Nisbah antara jisim lemak dan jisim bukan lemak (otot, tulang, organ) dalam badan. Diukur melalui BMI (Indeks Jisim Badan).' },
      ];
      const segak = [
        { icon:'🏃', name:'Lari Pecut 40m', desc:'Ukur kelajuan dan kuasa eksplosif kaki' },
        { icon:'🧘', name:'Sit dan Jangkau', desc:'Ukur kelenturan bahagian bawah badan' },
        { icon:'💪', name:'Tekan Tubi 1 Minit', desc:'Ukur kekuatan dan daya tahan otot bahagian atas' },
        { icon:'🔁', name:'Naik Turun Bangku 3 Minit', desc:'Ukur daya tahan kardiovaskular' },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">⚡ Kecergasan & SEGAK</h2>
        <div class="slide-body">
          <div class="section-label">5 Komponen Kecergasan Berdasarkan Kesihatan</div>
          <div id="accordion-kecergasan">
            ${components.map((c, i) => `
              <div class="accordion-item">
                <button class="accordion-btn" onclick="window.pjpkInteractions.toggleAccordion(this)">
                  <span>${c.title}</span>
                  <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-body">
                  <div class="accordion-content">${c.body}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="section-label" style="margin-top:12px">🏅 Ujian SEGAK — Saringan Kecergasan Fizikal Kebangsaan</div>
          <div class="card-grid card-grid--2" style="gap:8px">
            ${segak.map(s => `
              <div class="content-card" style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#EFF6FF;border-color:#93c5fd">
                <span style="font-size:1.5rem">${s.icon}</span>
                <div><div class="card-label">${s.name}</div><div class="card-desc">${s.desc}</div></div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 26 ── */
  {
    no: 26,
    type: "content",
    animation: "fade",
    title: "5.0 PEERS — Pengenalan",
    objective: "Memahami konsep dan kepentingan program PEERS dalam PJPK KP2027.",
    vo: "Bidang Pembelajaran 5.0 adalah PEERS, singkatan untuk Personal, Emotional, Environmental, Relationship, dan Sexual Health Education. PEERS merupakan program pendidikan kesihatan yang komprehensif yang bertujuan membina kesedaran kendiri, kemahiran interpersonal, dan keputusan kesihatan yang bijak dalam kalangan murid.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Pengenalan PEERS.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🤝 5.0 PEERS — Pengenalan</h2>
        <div class="slide-body">
          <div class="content-card" style="background:linear-gradient(135deg,#4C1D95,#6D28D9,#7C3AED);color:#fff;border:none;text-align:center;padding:24px">
            <div style="font-size:3rem;font-weight:700;letter-spacing:0.12em;color:#E9D5FF;margin-bottom:8px">PEERS</div>
            <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap">
              ${['Personal','Emotional','Environmental','Relationship','Sexual Health'].map((p, i) => `
                <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 14px">
                  <div style="font-size:0.8rem;font-weight:700;color:#E9D5FF">${p[0]}</div>
                  <div style="font-size:0.7rem;opacity:0.85">${p}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="card-grid card-grid--2">
            ${[
              { icon:'🎯', label:'Tujuan PEERS', desc:'Membina kesedaran kendiri, kemahiran interpersonal, dan keupayaan membuat keputusan kesihatan yang bijak dan bertanggungjawab.', color:'#F5F3FF', border:'#7C3AED' },
              { icon:'👥', label:'Sasaran', desc:'Semua murid Tingkatan 1 Malaysia. Program ini direka khas untuk usia remaja awal dalam konteks budaya Malaysia.', color:'#EFF6FF', border:'#2563EA' },
              { icon:'📚', label:'Pendekatan', desc:'Pembelajaran aktif, perbincangan kumpulan, kajian kes, dan refleksi peribadi dalam persekitaran yang selamat dan menghormati.', color:'#D1FAE5', border:'#10B981' },
              { icon:'⭐', label:'Kepentingan', desc:'PEERS membantu murid menghadapi cabaran kehidupan remaja dengan pengetahuan, kemahiran, dan nilai yang kukuh.', color:'#FEF3C7', border:'#F59E0B' },
            ].map(c => `
              <div class="content-card" style="background:${c.color};border-color:${c.border}">
                <div class="card-icon">${c.icon}</div>
                <div class="card-label">${c.label}</div>
                <div class="card-desc">${c.desc}</div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 27 ── */
  {
    no: 27,
    type: "content",
    animation: "fade",
    title: "Subbidang PEERS 5.1–5.5",
    objective: "Mengenal pasti lima subbidang PEERS dan skop pembelajaran masing-masing.",
    vo: "Lima subbidang PEERS meliputi: Pertama, Personal iaitu penjagaan diri dan harga diri. Kedua, Emotional iaitu pengurusan emosi dan tekanan. Ketiga, Environmental iaitu kesihatan persekitaran. Keempat, Relationship iaitu kemahiran komunikasi dan persahabatan. Kelima, Sexual Health Education yang sesuai dengan usia pelajar.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "5 subbidang PEERS.",
    render: function(el) {
      const sub = [
        { no:'5.1', icon:'👤', label:'Personal', color:'#EFF6FF', border:'#93c5fd', items:['Penjagaan kebersihan diri','Harga diri dan keyakinan','Imej badan yang sihat','Penjagaan kesihatan peribadi'] },
        { no:'5.2', icon:'💭', label:'Emotional', color:'#FEF3C7', border:'#FCD34D', items:['Mengenal pasti emosi','Pengurusan tekanan','Motivasi dan ketahanan mental','Kesejahteraan emosi'] },
        { no:'5.3', icon:'🌿', label:'Environmental', color:'#D1FAE5', border:'#10B981', items:['Kesihatan persekitaran','Keselamatan di rumah dan sekolah','Alam sekitar yang sihat','Amalan hijau'] },
        { no:'5.4', icon:'🤝', label:'Relationship', color:'#F5F3FF', border:'#7C3AED', items:['Kemahiran komunikasi','Persahabatan yang sihat','Kemahiran menolak tekanan rakan','Interaksi positif'] },
        { no:'5.5', icon:'🎓', label:'Sexual Health', color:'#FFF1F2', border:'#FCA5A5', items:['Pendidikan seks sesuai usia','Perkembangan puberti','Keselamatan diri','Nilai dan etika dalam hubungan'] },
      ];
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🤝 Subbidang PEERS 5.1–5.5</h2>
        <div class="slide-body">
          <div style="display:flex;flex-direction:column;gap:8px">
            ${sub.map(s => `
              <div class="content-card" style="background:${s.color};border-color:${s.border};padding:12px 16px">
                <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
                  <div style="display:flex;gap:8px;align-items:center;min-width:130px">
                    <span style="font-size:1.4rem">${s.icon}</span>
                    <div><div style="font-size:0.65rem;font-weight:700;color:#94a3b8;letter-spacing:0.06em">${s.no}</div><div class="card-label">${s.label}</div></div>
                  </div>
                  <div style="display:flex;gap:6px;flex-wrap:wrap;flex:1">
                    ${s.items.map(i => `<span class="tag">${i}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 28 ── */
  {
    no: 28,
    type: "content",
    animation: "zoom",
    title: "6.0 Pemakanan — Pinggan Sihat & Piramid Makanan",
    objective: "Memahami panduan pemakanan sihat melalui Pinggan Sihat Malaysia dan Piramid Makanan.",
    vo: "Bidang 6.0 Pemakanan memperkenalkan dua panduan penting: Pinggan Sihat Malaysia dan Piramid Makanan. Pinggan Sihat Malaysia membahagikan hidangan kepada suku karbohidrat, suku protein, dan separuh sayur dan buah-buahan. Piramid Makanan menunjukkan kepentingan relatif setiap kumpulan makanan untuk pemakanan seimbang.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "Pemakanan — Pinggan Sihat + Piramid.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🥗 Pemakanan Sihat</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--2" style="gap:14px">
            <div class="content-card" style="background:linear-gradient(135deg,#ECFDF5,#D1FAE5);border-color:#10B981;padding:18px">
              <div style="text-align:center;margin-bottom:12px">
                <div style="font-size:2.5rem">🍽️</div>
                <div class="card-label" style="color:#065f46">Pinggan Sihat Malaysia</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px">
                ${[
                  { pct:'¼', color:'#FEF3C7', border:'#F59E0B', label:'Karbohidrat', ex:'Nasi, roti, mihun' },
                  { pct:'¼', color:'#DBEAFE', border:'#2563EA', label:'Protein', ex:'Ikan, ayam, telur, kacang' },
                  { pct:'½', color:'#D1FAE5', border:'#10B981', label:'Sayur-sayuran & Buah', ex:'Pelbagai jenis sayur dan buah tempatan' },
                ].map(p => `
                  <div style="background:${p.color};border-radius:8px;padding:8px 10px;border:1px solid ${p.border};display:flex;gap:8px;align-items:center">
                    <span style="font-size:1.1rem;font-weight:700;color:${p.border};min-width:24px">${p.pct}</span>
                    <div><div style="font-size:0.78rem;font-weight:700;color:#374151">${p.label}</div><div style="font-size:0.7rem;color:#64748b">${p.ex}</div></div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="content-card" style="background:linear-gradient(135deg,#FFF7ED,#FFEDD5);border-color:#EA580C;padding:18px">
              <div style="text-align:center;margin-bottom:12px">
                <div style="font-size:2.5rem">🔺</div>
                <div class="card-label" style="color:#9A3412">Piramid Makanan Malaysia</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:5px">
                ${[
                  { aras:'Aras 4 (Puncak)', bg:'#FEE2E2', label:'Minyak, Lemak & Gula', note:'Gunakan sedikit' },
                  { aras:'Aras 3', bg:'#FEF3C7', label:'Daging, Ayam, Ikan, Susu', note:'1–3 hidangan' },
                  { aras:'Aras 2', bg:'#D1FAE5', label:'Sayur-sayuran & Buah-buahan', note:'3–5 hidangan' },
                  { aras:'Aras 1 (Asas)', bg:'#DBEAFE', label:'Bijirin & Produk Bijirin', note:'3–8 hidangan' },
                ].map(a => `
                  <div style="background:${a.bg};border-radius:6px;padding:6px 10px;display:flex;justify-content:space-between;align-items:center;gap:6px">
                    <div><div style="font-size:0.65rem;color:#94a3b8;font-weight:600">${a.aras}</div><div style="font-size:0.75rem;font-weight:600;color:#374151">${a.label}</div></div>
                    <span class="tag" style="font-size:0.65rem;flex-shrink:0">${a.note}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="content-card" style="background:#FEF3C7;border-color:#F59E0B;display:flex;gap:12px;align-items:center;padding:12px 16px">
            <span style="font-size:1.8rem">💧</span>
            <div class="card-desc" style="color:#78350F"><strong>Jangan lupa!</strong> Minum 8 gelas air sehari (2 liter) untuk menjaga hidrasi badan. Air adalah nutrien paling penting!</div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 29 ── */
  {
    no: 29,
    type: "content",
    animation: "fade",
    title: "7.0 Respons dan Bantu Mula",
    objective: "Memahami Prinsip Pertolongan Pertama (PPP) dan kandungan Peti Pertolongan Cemas.",
    vo: "Bidang terakhir adalah Respons dan Bantu Mula. Murid akan mempelajari Prinsip Pertolongan Pertama atau PPP, mengenali kandungan Peti Pertolongan Cemas, dan memahami langkah asas CPR. Pengetahuan ini sangat penting dan boleh menyelamatkan nyawa dalam situasi kecemasan.",
    interaction: ["Tekan Seterusnya untuk meneruskan"],
    notes: "PPP + Peti Pertolongan Cemas.",
    render: function(el) {
      el.innerHTML = `
        <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${this.objective}</span></div>
        <h2 class="slide-title">🚑 7.0 Respons & Bantu Mula</h2>
        <div class="slide-body">
          <div class="card-grid card-grid--2" style="gap:12px">
            <div class="content-card" style="background:linear-gradient(135deg,#FEE2E2,#FECACA);border-color:#EF4444;padding:16px">
              <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
                <span style="font-size:1.6rem">⚠️</span>
                <div class="card-label" style="color:#991B1B">Prinsip Pertolongan Pertama (PPP)</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px">
                ${[
                  { n:'1', icon:'👁️', text:'Pastikan keselamatan persekitaran sebelum mendekati mangsa' },
                  { n:'2', icon:'📱', text:'Hubungi bantuan segera — 999 atau ambulans' },
                  { n:'3', icon:'🛑', text:'Jangan gerakkan pesakit jika terluka atau disyaki patah tulang' },
                  { n:'4', icon:'💬', text:'Kekalkan ketenangan dan bercakap dengan mangsa untuk mengurangkan panik' },
                ].map(p => `
                  <div style="display:flex;gap:8px;align-items:flex-start">
                    <span style="background:#EF4444;color:#fff;border-radius:6px;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0;margin-top:1px">${p.n}</span>
                    <span style="font-size:0.78rem;color:#374151;line-height:1.45">${p.icon} ${p.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="content-card" style="background:linear-gradient(135deg,#FFF7ED,#FFEDD5);border-color:#EA580C;padding:16px">
              <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
                <span style="font-size:1.6rem">🧰</span>
                <div class="card-label" style="color:#9A3412">Peti Pertolongan Cemas</div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
                ${[
                  ['🩹','Plaster luka'],['🤍','Kapas steril'],['🟤','Betadine/antiseptik'],['✂️','Gunting kecil'],
                  ['🌡️','Termometer'],['💊','Ubat demam'],['🔗','Perban elastik'],['📐','Pembalut segitiga'],
                ].map(i => `
                  <div style="font-size:0.72rem;color:#374151;display:flex;gap:4px;align-items:center;padding:3px 0"><span>${i[0]}</span><span>${i[1]}</span></div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="content-card" style="background:linear-gradient(135deg,#1e3a8a,#2563EA);color:#fff;border:none;padding:16px">
            <div style="font-weight:700;margin-bottom:8px;display:flex;gap:8px;align-items:center"><span>❤️</span> Langkah CPR Asas (Untuk Kesedaran Umum)</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${['1. Semak kesedaran mangsa','2. Minta bantuan / hubungi 999','3. Tolak dada 30 kali (CPR)','4. Berikan 2 nafas bantuan','5. Ulang sehingga bantuan tiba'].map(s => `
                <span style="background:rgba(255,255,255,0.15);border-radius:8px;padding:5px 10px;font-size:0.72rem;border:1px solid rgba(255,255,255,0.25)">${s}</span>
              `).join('')}
            </div>
          </div>
          <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${this.vo}</span></div>
        </div>
      `;
    }
  },

  /* ───────────────────────────── SLIDE 30 ── */
  {
    no: 30,
    type: "closing",
    animation: "zoom",
    title: "Terima Kasih!",
    objective: "Menutup modul penataran dengan ringkasan pencapaian peserta.",
    vo: "Tahniah! Anda telah berjaya melengkapkan Modul Penataran Kurikulum Persekolahan 2027 bagi mata pelajaran Pendidikan Jasmani dan Pendidikan Kesihatan Tingkatan 1. Semoga ilmu yang diperoleh dapat diterapkan dalam pengajaran dan pembelajaran anda. Terima kasih dan selamat maju jaya!",
    interaction: ["Klik Mula Semula untuk ulang modul"],
    notes: "Slide penutup — papar markah dan butang mula semula.",
    render: function(el) {
      el.className = "slide slide--closing active";
      el.dataset.anim = "zoom";
      const quizData = window.pjpkStorage.getQuizAll();
      const total = Object.keys(quizData).length;
      const correct = Object.values(quizData).filter(v => v === true).length;
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
      el.innerHTML = `
        <div style="animation:zoomIn 0.6s both;font-size:4rem;margin-bottom:8px">🎉</div>
        <h1 class="closing-title">Tahniah!</h1>
        <p class="closing-sub">Anda telah melengkapkan<br/><strong>Modul Penataran KP2027 PJPK Tingkatan 1</strong></p>
        <div class="closing-score-box">
          <div style="font-size:0.8rem;color:rgba(255,255,255,0.7);margin-bottom:4px">Markah Kuiz Anda</div>
          <div class="closing-score-num">${correct}/${total}</div>
          <div class="closing-score-label">${pct}% — ${pct >= 80 ? '🌟 Cemerlang!' : pct >= 60 ? '👍 Bagus!' : '📚 Teruskan belajar!'}</div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin:16px 0;animation:fadeIn 0.6s 0.4s both">
          ${['✅ 7 Bidang Pembelajaran','📚 FITT & SEGAK','🤝 PEERS','🥗 Pemakanan Sihat','🚑 Bantu Mula'].map(i => `
            <span style="background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);color:#fff;border-radius:8px;padding:5px 12px;font-size:0.75rem;font-weight:600">${i}</span>
          `).join('')}
        </div>
        <button class="btn-mula-semula" onclick="window.pjpkApp.restart()">🔄 Mula Semula</button>
        <div style="margin-top:16px;font-size:0.75rem;color:rgba(255,255,255,0.6);animation:fadeIn 0.6s 0.8s both">
          © 2027 Bahagian Pembangunan Kurikulum, Kementerian Pendidikan Malaysia
        </div>
      `;
    }
  },
];

/* ───────────────────────────────────────────────
   HELPER: Render Quiz Slide
   ─────────────────────────────────────────────── */
function renderQuiz(el, slideData) {
  const { quizData, no, objective, vo } = slideData;
  const saved = window.pjpkStorage.getQuiz(no);
  const answered = saved !== null;

  el.innerHTML = `
    <div class="objective-strip"><span class="objective-strip__icon">🎯</span><span>${objective}</span></div>
    <h2 class="slide-title">🧩 ${slideData.title}</h2>
    <div class="slide-body">
      <div class="quiz-wrap">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
          <span style="background:#2563EA;color:#fff;border-radius:8px;padding:4px 10px;font-size:0.72rem;font-weight:700">KUIZ</span>
          <span style="font-size:0.78rem;color:#64748b">Pilih satu jawapan yang paling tepat</span>
        </div>
        <div class="quiz-question">❓ ${quizData.question}</div>
        <div class="quiz-options" id="quiz-options-${no}">
          ${quizData.options.map(opt => `
            <button class="quiz-option ${answered ? (opt.correct ? 'correct' : (saved === opt.key ? 'wrong' : '')) : ''}"
                    ${answered ? 'disabled' : ''}
                    data-key="${opt.key}"
                    data-correct="${opt.correct || false}"
                    onclick="window.pjpkInteractions.answerQuiz(this, ${no})">
              <span class="quiz-option-key">${opt.key}</span>
              <span>${opt.text}</span>
              ${answered && opt.correct ? '<span style="margin-left:auto;font-size:1rem">✅</span>' : ''}
              ${answered && !opt.correct && saved === opt.key ? '<span style="margin-left:auto;font-size:1rem">❌</span>' : ''}
            </button>
          `).join('')}
        </div>
        <div id="quiz-result-${no}" class="quiz-result ${answered ? 'show' : ''} ${answered ? (window.pjpkStorage.getQuiz(no) ? 'correct' : 'wrong') : ''}">
          ${answered
            ? (window.pjpkStorage.getQuizCorrect(no)
                ? '✅ Jawapan betul! Syabas!'
                : `❌ Jawapan kurang tepat. Jawapan betul: ${quizData.options.find(o=>o.correct).key}`)
            : ''}
        </div>
        ${answered ? `<div style="margin-top:10px;background:#F0FDF4;border:1px solid #86EFAC;border-radius:8px;padding:10px 12px;font-size:0.78rem;color:#065f46;line-height:1.55"><strong>💡 Penjelasan:</strong> ${quizData.explanation}</div>` : ''}
      </div>
      <div class="vo-box"><span class="vo-box__icon">🔊</span><span>${vo}</span></div>
    </div>
  `;
}

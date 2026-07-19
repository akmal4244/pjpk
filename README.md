# PJPK — Penataran KP2027: Modul Interaktif PJPK Tingkatan 1

![Status](https://img.shields.io/badge/status-production-green)
![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20Vanilla%20JS-yellow)
![CSS](https://img.shields.io/badge/Tailwind%20CSS-CDN-38BDF8)
![Slides](https://img.shields.io/badge/slides-30-blue)

Sistem **Interactive Slide Player** untuk Modul Penataran Kurikulum Persekolahan 2027 (KP2027) bagi mata pelajaran **Pendidikan Jasmani dan Pendidikan Kesihatan (PJPK) Tingkatan 1**. Aplikasi web statik ini memaparkan 30 slide interaktif (kandungan, video, kuiz dan refleksi) untuk sesi penataran guru — lengkap dengan auto-simpan kemajuan, navigasi papan kekunci dan muzik latar. Anjuran **Bahagian Pembangunan Kurikulum (BPK), Kementerian Pendidikan Malaysia (KPM)**.

**Domain production:** https://pjpk.akmalmarvis.com

---

## Kandungan

- [Ciri-Ciri Utama](#ciri-ciri-utama)
- [Teknologi](#teknologi)
- [Struktur Direktori](#struktur-direktori)
- [Pemasangan](#pemasangan)
- [Konfigurasi](#konfigurasi)
- [Deployment](#deployment)
- [Status Projek](#status-projek)
- [Kredit](#kredit)

---

## Ciri-Ciri Utama

- **30 slide interaktif** — pecahan mengikut jenis (dalam `js/slides-data.js`): 1 intro, 24 kandungan (content), 1 video, 2 kuiz, 1 refleksi, 1 penutup (closing).
- **2 slide Kuiz pelbagai pilihan** — semak jawapan serta-merta dengan toast maklum balas; jawapan dan markah disimpan dalam `localStorage`.
- **1 slide Refleksi** — peserta menulis refleksi dan disimpan automatik ke `localStorage`.
- **1 slide Video** — pemain video terbina dalam (`assets/media1.mp4`).
- **Auto-resume** — slide terakhir dibuka semula secara automatik apabila peserta kembali (kunci `pjpk.*` dalam `localStorage`).
- **Progress bar & markah kuiz** — peratus kemajuan dipaparkan di header.
- **Komponen interaktif** — flip card, tooltip FITT, accordion dan grid bidang (`js/interactions.js`).
- **Navigasi papan kekunci** — `→` seterusnya, `←` kembali, `Space` mula/next, `Esc` tutup popup.
- **Muzik latar (BGM)** — toggle hidup/mati, pilihan disimpan (`js/audio.js`); fail `assets/bgm.mp3` diletakkan sendiri.
- **Popup Bantuan & Reset** — panduan penggunaan terbina dalam; reset memadam semua kemajuan dengan pengesahan.
- **Mobile responsive** dan elemen aksesibiliti (ARIA role, `aria-live`, label butang).
- **Tema biru rasmi `#2563EA`** dengan penjenamaan Jata Negara / BPK KPM.

## Teknologi

| Lapisan | Teknologi |
|---|---|
| Markup | HTML5 statik (satu halaman — `index.html`) |
| Styling | CSS custom (`css/style.css`, ~1,570 baris) + **Tailwind CSS (CDN)** |
| Logik | **Vanilla JavaScript** — tiada framework, tiada build step |
| Data slide | `js/slides-data.js` (~1,530 baris — 30 objek slide dengan fungsi `render`) |
| Storan | `localStorage` (kemajuan, kuiz, refleksi, tetapan audio) |
| Media | MP4 (video), MP3 (muzik latar), JPG (penjenamaan) |
| Hosting | Mana-mana web server statik (cPanel / GitHub Pages) |

> **Tiada backend, tiada database, tiada Node/NPM.** Semua data peserta kekal dalam peranti masing-masing.

## Struktur Direktori

```
PJPK/
├── index.html              # Shell utama, layout, popup Bantuan & Reset
├── css/
│   └── style.css           # Tema, animasi, komponen (~1,570 baris)
├── js/
│   ├── slides-data.js      # 30 slide data lengkap (render per slide)
│   ├── app.js              # Engine: navigasi, localStorage, progress
│   ├── interactions.js     # Flip card, tooltip, accordion, kuiz
│   └── audio.js            # Toggle BGM
└── assets/
    ├── jata-negara-full.jpg    # Logo header
    ├── jata-negara.jpg
    ├── branding-footer.jpg     # Penjenamaan BPK/KPM
    ├── cikgu-pjpk.jpg          # Ilustrasi slide
    ├── media1.mp4              # Video slide (~27MB)
    └── bgm.mp3                 # Muzik latar (sila letakkan sendiri — tiada dalam repo)
```

## Pemasangan

Tiada proses build — buka terus dalam browser:

```bash
git clone https://github.com/akmal4244/PJPK.git
cd PJPK
```

Kemudian buka `index.html` dalam browser, atau jalankan web server statik ringkas:

```bash
python -m http.server 8090
```

Buka `http://127.0.0.1:8090`.

> **Nota:** Repo agak besar (~27MB) kerana `assets/media1.mp4`. Guna `git clone --depth 1` untuk clone lebih pantas.

## Konfigurasi

Tiada fail `.env` — semua konfigurasi dalam kod sumber:

| Perkara | Lokasi |
|---|---|
| Kandungan / susunan slide | `js/slides-data.js` (array `slides`) |
| Muzik latar | Letakkan fail di `assets/bgm.mp3` (elemen `<audio id="bgm">` dalam `index.html`) |
| Tema warna | `#2563EA` (`meta theme-color` + `css/style.css`) |
| Kunci storan peserta | `pjpk.lastSlide`, `pjpk.completed`, `pjpk.quiz`, `pjpk.quizCorrect`, `pjpk.reflection`, `pjpk.audio` |

## Deployment

Deployment ke **cPanel JimatHosting** sebagai laman statik:

1. Muat naik semua fail ke doc root: `/home2/akmalmar/public_html/pjpk/`.
2. Pastikan `assets/bgm.mp3` dimuat naik sekali (tiada dalam repo).
3. Buka `https://pjpk.akmalmarvis.com` — tiada langkah lain diperlukan (tiada PHP, tiada database).

## Status Projek

**Production.** Modul lengkap 30 slide dan sedang digunakan; kemaskini terakhir ialah pembetulan visual pada Slide 3 (buang *thought bubble*).

## Kredit

Anjuran **Bahagian Pembangunan Kurikulum (BPK), Kementerian Pendidikan Malaysia (KPM)**.

**Sistem Dibangunkan Sepenuhnya Oleh Akmal Marvis © 2026**
Unit Teknikal & ICT, BPSM, KPM

# Penataran KP2027 — PJPK Tingkatan 1

Sistem Interactive Slide Player untuk Modul Penataran Kurikulum Persekolahan 2027 (KP2027) bagi mata pelajaran Pendidikan Jasmani dan Pendidikan Kesihatan (PJPK) Tingkatan 1.

## Struktur Fail

```
├── index.html          ← Shell utama & layout
├── css/
│   └── style.css       ← Tema, animasi, komponen
├── js/
│   ├── slides-data.js  ← 30 slide data lengkap
│   ├── app.js          ← Engine: navigasi, localStorage, progress
│   ├── interactions.js ← Flip card, tooltip, accordion, quiz
│   └── audio.js        ← BGM toggle
└── assets/
    └── bgm.mp3         ← Fail muzik latar (sila letakkan sendiri)
```

## Ciri-ciri

- ✅ 30 slide interaktif (intro, content, quiz, reflection, closing)
- ✅ 2 slide Quiz pelbagai pilihan dengan semak jawapan
- ✅ 1 slide Refleksi dengan simpan ke localStorage
- ✅ Auto-resume slide terakhir
- ✅ Progress bar & markah quiz
- ✅ Flip card, FITT tooltip, Accordion, Grid bidang
- ✅ Keyboard navigation (←→ Space Esc)
- ✅ Mobile responsive
- ✅ Tema biru #2563EA

## Penggunaan

Letakkan dalam subdomain `pjpk.akmalmarvis.com` dan buka `index.html`.

Letakkan fail muzik di `assets/bgm.mp3` untuk muzik latar.

## Anjuran

Bahagian Pembangunan Kurikulum (BPK), Kementerian Pendidikan Malaysia

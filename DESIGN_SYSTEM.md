# SnapCuller Design System

Informasi mengenai color palette dan tipografi yang digunakan dalam aplikasi SnapCuller.

## 🎨 Color Palette (Dark First Design)

SnapCuller menggunakan sistem warna berbasis CSS Variables (HSL) yang mengutamakan tema "Dark First". Semua warna digunakan sebagai aksen dengan background near-black.

### 1. Dark First (Concierge.ai Style - DEFAULT)
*Estetika "Premium Dark" yang dirancang untuk kontras tinggi dan kesan modern.*
- **Background**: `hsl(240, 6%, 6%)` (Near Black: #0e0e11)
- **Foreground**: `hsl(0, 0%, 96%)` (Off White)
- **Primary**: `hsl(75, 100%, 50%)` (Absolute Lime - #b3ff00)
- **Secondary**: `hsl(186, 100%, 50%)` (Abstract Cyan - #00e5ff)
- **Accent 1**: `hsl(42, 100%, 50%)` (Gold - #ffb300)
- **Accent 2**: `hsl(172, 100%, 37%)` (Mid Teal - #00bfa5)
- **Card/Glass**: Latar belakang kartu menggunakan efek *glassmorphism* transparan atau *near black* yang sedikit lebih terang (`hsl(240, 6%, 8%)`).
- **Border**: Sangat tipis dan subtle (`hsl(240, 5%, 12%)`).

### 2. Dual Gradient Icons & Accents
Digunakan untuk ikon dan elemen interaktif untuk menciptakan efek kedalaman.
- Menggabungkan Lime + Gold atau Cyan + Teal dalam gradien SVG vertikal.

---

## 🔡 Typography (Contrast Scaling)

Kombinasi font untuk menciptakan tampilan "high-fashion" editorial dan keterbacaan tinggi.

| Brand / Class | Font Family | Peran & Penggunaan |
| :--- | :--- | :--- |
| **font-brand** / **font-outfit** | `Instrument Serif` atau `Playfair Display` | **Hero Headline**: Digunakan untuk judul besar ("One word per line"). Kontras tajam dan tebal. |
| **font-sans** | `Inter` atau `DM Sans` | **Prose/Konten**: Digunakan untuk teks deskriptif yang kecil namun mudah dibaca. |

*Catatan: Konfigurasi font saat ini masih menggunakan `Outfit` sebagai fallback brand, dan akan diubah ke Serif di masa depan.*

---

## ✨ Design Principles
- **Contrast Typography**: Teks headline sangat besar berpadu dengan blok paragraf kecil.
- **Scroll-jacked Word Reveal**: Kemunculan kata-kata berurutan saat di-scroll untuk menambah *momentum* dramatis.
- **Single Action Funnel**: CTA point difokuskan pada satu tujuan utama secara jelas (mis. "Get SnapCuller").
- **Pill Tabs**: Menggunakan bentuk melengkung penuh (`rounded-full`) untuk nav dan tab navigasi fitur.

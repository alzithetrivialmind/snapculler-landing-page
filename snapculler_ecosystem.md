# SnapCuller: Product Ecosystem & Technical Architecture Analysis

**Role:** Senior Technical Architect & Product Manager
**Date:** March 2026
**Document Purpose:** Technical and Business Feasibility Analysis

---

## 1. Product Overview & Vision

**SnapCuller** adalah aplikasi kurasi foto (*photo culling*) *desktop-native* yang dirancang dengan obsesi penuh terhadap **kecepatan absolut** dan **efisiensi memori**. 

**Target Pengguna (Niche):** Fotografer profesional (pernikahan, acara, satwa liar, olahraga) yang memotret ribuan *frame* per sesi dan tidak memiliki waktu (atau kesabaran) untuk menunggu proses *rendering* RAW yang lambat di perangkat lunak konvensional.

**Pain Points yang Diselesaikan:**
- **"Culling Tax"**: Waktu berjam-jam yang terbuang hanya untuk menyeleksi foto karena harus menunggu *loading* *file* RAW ukuran besar (di atas 20MB-50MB per foto).
- **Proses Bloated**: Lightroom dan *software* sejenis membutuhkan *importing*, pembangunan *smart previews*, dan pembuatan katalog yang memberatkan mesin.
- **Gangguan Workflow**: Menggunakan *mouse* memperlambat proses *culling*.

**Core Value Proposition:** *"Ultra-Lightweight & Fast Sorting"*. Proses *culling* difokuskan pada manipulasi *keyboard-first* untuk kecepatan memilah 1 foto per detik, *zero-import process* (langsung baca dari *folder*), dan tanpa *lag* transisi.

---

## 2. Feature Matrix (Free vs Pro)

Strategi bisnis kami bertumpu pada model Freemium untuk akuisisi pengguna, namun memberikan nilai yang tidak bisa ditolak untuk *power user* yang memproses dokumen dalam skala industri.

| Fitur | SnapCuller Free ($0) | SnapCuller Pro ($29 Lifetime) |
| :--- | :--- | :--- |
| **Dukungan Format File** | Standard (JPG, PNG, WebP) | **ALL RAW** (ARW, CR2, NEF, DNG, dll) + **HEIC** |
| **Workflow (Buckets)** | Terbatas (Maksimal 3 fungsi *bucket*) | **Unlimited Buckets** (*Move/Copy*) |
| **View Modes** | Single View & Grid View | **Compare View** + **Zoom Sync** (Kunci sinkronisasi layar untuk *A/B testing*) |
| **Metadata & Handoff** | Terbatas (Internal RAM) | **Ekspor XMP Sidecar** (Kirim metedata *rating* langsung ke Adobe Lightroom / Capture One) |
| **Advanced Tools** | Basic | **Focus Peaking, Burst Stacking, Over/Under Exposure Warnings, RAW+JPG Pairing, Custom External Editor Integration** |
| **File Management** | Membaca & Memindahkan File Biasa | **Batch Rename** terintegrasi secara modular (Nama, Prefix, Angka Urut) |
| **Pencarian & Filter** | Filter berdasarkan *Rating (Bintang)* & Warna | **Advanced EXIF Filtering** (Filter spesifik berdasar Kamera, Lensa, dan Jarak ISO) |
| **Panel Informasi** | Informasi file standar & Culling Progress Bar | **Full EXIF Data Panel** (Menampilkan Aperture, Shutter Speed, ISO, Focal Length, dll) |
| **Proteksi Keamanan** | **Shortcut Key Protection** (Penahan bentrok kunci otomatis) & **Global Undo System (Ctrl+Z)** | Termasuk di versi gratis |
| **Onboarding Experience** | Akses Penuh ke **Interactive App Tour** & Sistem *Feedback Toast* otomatis | Termasuk di versi gratis |

---

## 3. Technical Stack

Aplikasi dibangun menggunakan infrastruktur **Node.js** modern dengan perpaduan asinkronisasi yang reaktif dan responsif, dengan tumpukan teknologi:

*   **Runtime:** Electron 40 (Digunakan sebagai wadah OS-agnostic dan *file-system access*).
*   **Frontend Engine:** React 19 dengan TypeScript 5.9 (Aman, cepat, minim *runtime error*).
*   **Styling:** TailwindCSS 4 (Utility-first CSS untuk mengamamanan ukuran bundel dan integrasi *dark mode* bawaan aplikasi).
*   **Image Processing Library:** 
    *   `sharp` (Berbasis *libvips* yang sangat ringan dan menggunakan *native multi-threading* C++ untuk manipulasi gambar).
    *   `exifr` (Mesin ekstraksi *metadata* tercepat di ekosistem JS).
    *   `heic-convert` (Konversi HEIC on-the-fly untuk dukungan iOS).

---

## 4. Backend Logic & Architecture

SnapCuller tidak menggunakan basis data eksternal (SQL/NoSQL) guna menghindari beban *overhead*. Segala proses bergantung pada *memory management* secara *real-time* dengan IPC (*Inter-Process Communication*) yang dioptimalkan antara *Main Process* (Electron) dan *Renderer Process* (React).

### Penanganan Ribuan File & Multi-Threading
Alih-alih membaca seluruh foto saat peluncuran, aplikasi ini menggunakan *event-driven reading*:
*   Saat *folder* di-drop, `IPC` hanya memuat daftar nama *file* (Direktori Traversal ringan menggunakan `fs.readdir`), memfilter ekstensi yang didukung, lalu mengirim `string[]` ke *frontend*.
*   Meskipun JavaScript *single-threaded*, Node.js menggunakan *Worker Threads* (melalui `sharp` dan *libuv pool*) di mana operasi I/O dan dekode gambar dijalankan di *background thread* secara asli (C++ level), sehingga Main Thread React tidak pernah terblokir dan *frame rate* (60 FPS) tetap terjaga.

### Rendering Thumbnail & "Windowing" (Virtualization)
Modul Grid (Grid View) menangani ratusan foto tanpa membuat *browser engine crash* menggunakan teknik **Virtualization / Windowing rendering**:
*   Hanya *thumbnail* gambar (sekitar 3 baris di atas dan di bawah visibilitas batas monitor) yang dimasukkan ke DOM layar.
*   Gambar-gambar yang digulir *out-of-bounds* secara otomatis hilang dari DOM HTML dan URL objek DOM-nya segera dibersihkan menggunakan `URL.revokeObjectURL()` yang sangat signifikan mendongkrak penghematan *VRAM* dan *RAM*.

### "Background Handling" & Pre-fetching
Kunci kenapa UI terasa secepat kilat (0 delay loading) adalah dengan teknik pramuat asinkron (`Prefetching`):
*   Ketika foto X sedang aktif layar, aplikasi **secara hening memuat ke cache RAM 3 foto ke depan dan 1 foto ke belakang**. Jadi, ketika pengguna memecet tombol Kanan (`->`), gambar sebenarnya sudah ada di *buffer RAM* VGA, tidak ada pergerakan *Hard Drive* yang dibutuhkan.

---

## 5. Efficiency Engineering (Rahasia Performa Ultra-Lightweight)

Mengapa SnapCuller terasa jauh lebih lincah dibandingkan Adobe Lightroom? Berikut implementasi perancangan algoritmanya:

1.  **"Tembak Dulu, Render Kemudian" (Embedded Preview Extraction)**:
    Software tradisional mencoba men-*decode* matriks sensor bayer dari *file* RAW secara algoritmik (sangat-sangat berat, butuh VRAM). 
    *   **Trik SnapCuller**: Mengeksploitasi dan "merampok" JPEG pratinjau mentah yang **sudah dibenamkan** (*embedded preview*) secara otomatis oleh kamera (Sony, Canon, Nikon) di dalam badan file RAW (*Strategy Byte-size scanning* / End-of-Image `0xFF 0xD9` extraction). 
    *   Melompat langsung ke JPEG memungkinkan foto 40MB terbuka dalam 3-10 milidetik tanpa sentuhan CPU besar.

2.  **Progressive Enhancement Architecture**:
    *   `image:load` (Fase 1): Mereturn ekstrak RAW (atau JPG biasa) seketika untuk navigasi beruntun cepat.
    *   `image:load-hq` (Fase 2): *Background task* dengan tingkat prioritas rendah. Aplikasi menganalisa dimensi gambar pratinjau. Jika resolusi dimensi terkecil gambar berada di bawah ambang batas ketajaman (`MIN_HQ_PIXELS`), maka SnapCuller menggunakan *library* `sharp` untuk melakukan *upscale* & *sharpening* di layar belakang, agar fitur seperti pengujian *Focus Peaking* (mengecek mata subjek foto) tetap valid dan super HD.

3.  **RAM & Cache Garbage Collection Aktif**:
    Tidak seperti Chrome yang menyimpan *cache* tanpa batas. Kami membatasi simpanan ekstraksi JPEG pada **maksimal 30 iterasi terakhir** (menggunakan taktik LRU / *Least Recently Used Map*). Cache lama akan segera dieliminasi untuk menjaga pemakaian RAM minimum.

---

## 6. User Workflow

Alur kerja dirancang untuk memaksa *muscle memory* agar tangan pengguna tidak perlu meraba-raba *Mouse/Trackpad*.

1.  **Import**: Pengguna *drag-and-drop* *folder* apa pun (*Zero Import Time*, tidak ada *loading spinner* bar).
2.  **Setup Buckets**: Pengguna menugaskan *folder* taktis tertentu ke tombol Keyboard numerik. (Misal: **Tombol 1** untuk `Client Tervot`, **Tombol 2** untuk `Revisi Warna`, **Tombol 3** untuk `Hapus/Reject`).
3.  **Culling (Sortir)**:
    *   Pengguna menggunakan panah *Kiri/Kanan* untuk melihat dengan instan.
    *   Tombol `S` untuk melihat secara utuh (*Single View*), tombol `G` untuk melihat seluruh album (*Grid View*), `C` untuk membandingkan 2 pose mirip berdampingan dengan kamera Zoom terkunci (*Zoom Sync*).
    *   Kapanpun melihat foto bagus, tekan `1` (File secara instan terpindahkan '*Move*' atau tersalin '*Copy*' ke *bucket/folder* 1). Layar lanjut melompat ke foto berikutnya secara otomatis.
4.  **Error Correction**: Fitur anti-salah yang revolusioner. Salah tekan dan memindahkan foto yang harusnya favorit menjadi buangan? Tekan proteksi `Ctrl+Z` (Undo). File seketika ditarik dari tong sampah kembali ke direktori *source*.
5.  **Export Handoff**: Mengekspor Sidecar *file* `.xmp` dengan informasi *star rate* untuk dibuka fotografer di Adobe Lightroom tanpa perlu mengulang penyortiran (Workflow kolaborasi).

---

## 7. Monetization Strategy & Roadmap

Dengan harga standar **$29 Lifetime**, aplikasi ini mengisi celah pasar *niche* di antara sistem *subscription* mahal industri yang memaksa fotografer membayar pajak reguler (Lightroom CC) melawan alat lambat OS bawaan (*macOS Preview / Windows Photos*).

**Strategi Monetisasi (Konversi Pengguna Menjadi Pro):**
*   **Format RAW Barrier**: Fotografer pro sangat mustahil memotret dalam format murni JPG. Seketika mereka melihat *speed* yang mulus di foto .JPG lokal mereka dalam status "Gratis", mereka diharuskan membayar $29 untuk membaca portofolio RAW milik mereka. Ini konversi *low friction* (gesekan rendah dengan harga $29 sekali beli).
*   **Kehilangan Metadata**: Workflow Adobe *Handoff* (Ekspor XMP) dibuat eksklusif Pro, agar retensi fotografer profesional dapat disaring di atas sana.

**Future Roadmap (Validasi Nilai $29):**
*   **Phase 6 (Distribution & Infrastructure):** Eksekusi *Automated CI/CD* Installer. Mendaftarkan sertifikat MacOS (`.dmg`) & Windows (`.exe`) *code-signing* guna bypass notifikasi *SmartScreen* "Virus Berbahaya", memastikan program mudah dibeli & digunakan awam.
*   **Phase 7 (AI Integration):** Model Deteksi Fokus (ONNX Model). Mengeksekusi secara lokal *AI Machine Learning* untuk otomatis memeriksa ratusan file RAW, lalu SnapCuller sendirinya memberi label/warna merah pada foto buram & tak fokus, atau mata yang tertutup *blink detector* - hal yang biasa menyiksa mata fotografer acara pernikahan atau peliput olahraga jika diperiksa manual satu per satu.
*   **Performance Analytics Panel**: Analisis visual (*chart*) sebar data f-stop, ISO, lensa mana yang paling sering dipakai klien sepanjang bulan (*insight engine* lanjutan menggunakan data JSON Exifr yang sudah tergabung pada kode yang ada).

---
*End of Analysis Overview.*


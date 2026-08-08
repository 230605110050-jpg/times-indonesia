# 🚀 Panduan Lengkap Setup & Menjalankan Project (Times Indonesia)

Dokumen ini berisi penjelasan komprehensif dan panduan langkah demi langkah untuk mengambil (pull/clone) project ini dari GitHub hingga bisa dijalankan di lingkungan lokal Anda. Panduan ini dirancang untuk pemula dan juga mencakup penjelasan mendetail mengenai teknologi yang digunakan dalam project ini.

---

## 📝 Tentang Project Ini
Project ini dikembangkan dengan menggunakan teknologi web modern untuk memastikan performa yang cepat dan antarmuka pengguna yang interaktif. Berikut adalah **Tech Stack** utama yang digunakan:
- **[Vite](https://vitejs.dev/)** - Sebagai *build tool* dan *dev server* yang super cepat.
- **[React 18](https://react.dev/)** - Library JavaScript utama untuk membangun antarmuka pengguna (UI).
- **[Tailwind CSS v4](https://tailwindcss.com/)** - *Utility-first CSS framework* untuk styling komponen dengan cepat dan rapi.
- **[Radix UI](https://www.radix-ui.com/)** - Kumpulan komponen UI *headless* yang *accessible* (digunakan sebagai dasar sistem desain).
- **[Framer Motion](https://www.framer.com/motion/)** - Library untuk membuat animasi UI yang halus dan dinamis.
- **[Recharts](https://recharts.org/)** - Library untuk membuat grafik dan chart interaktif.
- **[React Router](https://reactrouter.com/)** - Untuk pengelolaan *routing* (navigasi antar halaman).

---

## 📌 Prasyarat (Pre-requisites)
Sebelum memulai, pastikan perangkat komputer/laptop Anda sudah memiliki beberapa aplikasi berikut:

1. **[Node.js](https://nodejs.org/en)** 
   - Sangat disarankan untuk mengunduh versi **LTS (Long Term Support)** (minimal versi 18 atau 20+).
   - *Fungsi:* Dibutuhkan untuk menjalankan environment JavaScript di luar browser dan menjalankan perintah `npm` (Node Package Manager).
   - *Cara Cek:* Buka terminal dan ketik `node -v` dan `npm -v`. Jika muncul versi angka, berarti sudah ter-install.
2. **[Git](https://git-scm.com/downloads)** 
   - *Fungsi:* Sistem pengontrol versi (Version Control System) wajib untuk mengelola project dan mengambil kode (clone) dari repository Github.
   - *Cara Cek:* Buka terminal dan ketik `git --version`.
3. **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)** 
   - Code editor rekomendasi utama untuk mengedit dan melihat kode.
   - *Ekstensi VS Code yang disarankan:* **ESLint**, **Prettier - Code formatter**, **Tailwind CSS IntelliSense**.

---

## 🛠️ Langkah-langkah Setup (Dari Awal)

### 1. Buka Terminal / Command Prompt
- **Bagi Pengguna Windows**: Anda bisa membuka Command Prompt (ketik `cmd` di menu Start Windows), membuka **Git Bash** (direkomendasikan), atau langsung buka **Terminal terintegrasi di VS Code** dengan menekan tombol shortcut `` Ctrl + ` `` (backtick / tombol di sebelah kiri angka 1).
- **Bagi Pengguna Mac/Linux**: Buka aplikasi *Terminal*.

### 2. Tentukan Direktori / Folder Penyimpanan
Tentukan di mana Anda ingin menyimpan project ini. Misalnya, kita akan menyimpannya di drive `D:` dalam folder `PKL`.

Di dalam terminal, jalankan urutan perintah berikut:

```bash
# Pindah ke Drive D (Hanya untuk pengguna Windows)
d:

# (Opsional) Buat folder khusus bernama "PKL" jika belum ada:
mkdir PKL

# Masuk ke dalam folder "PKL" tersebut
cd PKL
```

### 3. Mengambil (Clone) Project dari GitHub
Langkah ini digunakan untuk mengunduh seluruh isi folder project langsung dari repository GitHub ke laptop Anda.

Ketikkan perintah berikut di terminal:
```bash
git clone https://github.com/230605110050-jpg/times-indonesia.git
```
*Catatan: Pastikan Anda memiliki akses internet yang stabil.*

Jika proses clone sudah *100% done*, masuk ke dalam folder project yang baru saja di-download:
```bash
cd times-indonesia
```

### 4. Meng-install Kebutuhan Project (Dependencies)
Project React modern menggunakan banyak pustaka (library) eksternal yang tidak disertakan di GitHub (untuk menghemat ruang). Anda perlu mengunduhnya (men-download) agar project bisa berjalan.

Pastikan posisi terminal Anda **sedang berada di dalam folder `times-indonesia`**, lalu jalankan:
```bash
npm install
```
*⏳ Tunggu proses instalasi sampai selesai. Proses ini biasanya memakan waktu 1-5 menit tergantung kecepatan internet Anda. Setelah selesai, akan otomatis muncul folder baru bernama `node_modules`.*

### 5. Konfigurasi Environment Variable (Jika Diperlukan)
Beberapa project membutuhkan konfigurasi variabel environment (seperti API Keys, URL backend, dll).
1. Cek apakah di folder project terdapat file bernama `.env.example`.
2. Jika **ada**, buat file baru bernama `.env`.
3. Salin/Copy semua isi dari `.env.example` dan *paste* ke dalam `.env`.
4. Sesuaikan nilai-nilai di dalamnya dengan yang diberikan oleh tim Backend atau Lead Anda.
*(Jika tidak ada file `.env.example`, abaikan saja langkah ini).*

---

## 🚀 Menjalankan Project (Local Development)

Setelah instalasi selesai, saatnya menjalankan project di mode *development*. Ketikkan perintah ini:

```bash
npm run dev
```

Jika berhasil, terminal akan menampilkan output seperti ini:
```text
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Langkah Terakhir:**
1. Buka browser (Chrome, Edge, Firefox, dll).
2. Ketikkan URL **http://localhost:5173** (atau ikuti tautan yang ada di terminal).
3. 🎉 **Selamat!** Project "Times Indonesia" berhasil berjalan di laptop Anda.

---

## 📂 Penjelasan Struktur Folder Singkat
Ketika Anda membuka project ini di VS Code, Anda akan melihat beberapa folder utama:
- `node_modules/` : Tempat menyimpan semua library hasil dari `npm install` (Jangan di-edit & tidak di-push ke Github).
- `public/` : Aset publik statis (seperti gambar favicon, ikon) yang tidak diproses oleh Vite.
- `src/` : **Folder Utama tempat kita menulis kode.**
  - `src/components/` : Potongan UI yang bisa dipakai ulang (Tombol, Navbar, dll).
  - `src/pages/` atau `src/views/` : Komponen yang merepresentasikan halaman web.
  - `src/assets/` : Gambar, font, atau file CSS utama.
- `package.json` : File informasi mengenai project dan daftar library yang digunakan.
- `vite.config.ts` : File konfigurasi *bundler* Vite.

---

## 📜 Daftar Script yang Tersedia
Di dalam project ini, terdapat beberapa *command npm* (bisa dilihat di `package.json` bagian scripts) yang bisa Anda jalankan di terminal:

- **`npm run dev`** : Menjalankan aplikasi untuk keperluan *development*. Dilengkapi dengan fitur *Hot Module Replacement* (HMR), sehingga perubahan kode langsung terlihat di browser tanpa perlu me-refresh.
- **`npm run build`** : Mem-build aplikasi ke dalam versi produksi (Production-ready). Akan menghasilkan folder `dist/` yang ukurannya sudah dioptimalkan dan siap diunggah ke server hosting (Vercel, Netlify, VPS).

---

## 💡 Troubleshooting (Masalah yang Sering Terjadi)

- **Error: `'npm' is not recognized as an internal or external command...`** 
  👉 Node.js belum ter-install di laptop Anda, atau Anda lupa menceklis opsi *"Add to PATH"* saat proses instalasi Node.js. 
  **Solusi:** Install ulang Node.js dan pastikan mencentang "Add to PATH".
  
- **Error: `'git' is not recognized...`**
  👉 Git belum ter-install.
  **Solusi:** Download dan install dari [git-scm.com](https://git-scm.com/downloads).
  
- **Terminal terhenti / muncul "Port Already in Use" saat `npm run dev`**
  👉 Artinya port default `5173` sedang dipakai aplikasi lain (misal Anda membuka 2 project Vite bersamaan). 
  **Solusi:** Vite akan otomatis mencari port lain (misal `5174` atau `5175`). Perhatikan URL baru yang muncul di terminal dan klik URL tersebut.

- **Ada tulisan error berwarna merah (ERR!) saat menjalankan `npm install`**
  👉 Biasanya karena koneksi internet terputus, atau ada konflik versi paket.
  **Solusi:** 
  1. Pastikan koneksi internet stabil.
  2. Jalankan perintah `npm cache clean --force`.
  3. Hapus folder `node_modules` dan file `package-lock.json` (jika ada).
  4. Jalankan kembali `npm install`.

- **Aplikasi terlihat error / Blank Putih di Browser**
  👉 Klik Kanan di browser -> Pilih **Inspect** -> Buka tab **Console**. Lihat tulisan error yang muncul di sana untuk memudahkan pencarian solusi di Google / ChatGPT.

---
*Dokumen ini dibuat dan diperbarui untuk mempermudah proses orientasi tim pengembangan Times Indonesia.*
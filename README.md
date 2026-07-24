# Times Indonesia

Website **Times Indonesia** yang dibangun menggunakan **React + Vite** dengan berbagai library modern seperti Tailwind CSS, Material UI, Radix UI, dan React Router.

---

# 🚀 Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Material UI (MUI)
- Radix UI
- React Router
- Node.js
- npm

---

# 📋 Persyaratan

Pastikan perangkat telah terinstall:

- Git
- Node.js versi 18 atau lebih baru (disarankan versi LTS)
- npm (otomatis terinstall bersama Node.js)

Cek versi:

```bash
node -v
npm -v
git --version
```

---

# 📥 Clone Repository

Clone project dari GitHub

```bash
git clone https://github.com/230605110050-jpg/times-indonesia.git
```

Masuk ke folder project

```bash
cd times-indonesia
```

---

# 📦 Install Dependency

Install seluruh package yang dibutuhkan

```bash
npm install
```

atau

```bash
npm i
```

Tunggu hingga proses selesai.

---

# ▶️ Menjalankan Project

Jalankan development server

```bash
npm run dev
```

Terminal akan menampilkan alamat seperti berikut

```
Local: http://localhost:5173/
```

Buka browser kemudian akses

```
http://localhost:5173
```

---

# 🏗 Build Production

Untuk membuat hasil build production

```bash
npm run build
```

Hasil build akan tersimpan pada folder

```
dist/
```

---

# 👀 Preview Build

Menjalankan hasil build secara lokal

```bash
npm run preview
```

---

# 🔄 Update Project (Git Pull)

Jika project sudah pernah di-clone sebelumnya dan ingin mengambil perubahan terbaru dari GitHub.

Masuk ke folder project

```bash
cd times-indonesia
```

Lalu jalankan

```bash
git pull origin main
```

Jika branch utama menggunakan **master**

```bash
git pull origin master
```

---

# 📤 Mengirim Perubahan ke GitHub

## Melihat perubahan

```bash
git status
```

## Menambahkan semua file

```bash
git add .
```

## Commit

```bash
git commit -m "Menambahkan fitur baru"
```

## Push

```bash
git push origin main
```

---

# 🌿 Membuat Branch Baru

```bash
git checkout -b nama-branch
```

Contoh

```bash
git checkout -b fitur-login
```

Push branch ke GitHub

```bash
git push origin fitur-login
```

---

# 🔀 Berpindah Branch

Melihat daftar branch

```bash
git branch
```

Berpindah branch

```bash
git checkout main
```

atau

```bash
git checkout nama-branch
```

---

# 📁 Struktur Folder

```
times-indonesia
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── layouts/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── README.md
└── ...
```

---

# 📚 Library yang Digunakan

- React
- Vite
- Tailwind CSS
- Material UI
- Radix UI
- React Router
- Lucide React
- React Hook Form
- Motion
- Recharts

---

# ❗ Troubleshooting

### Dependency gagal di-install

Hapus folder `node_modules` dan file `package-lock.json`

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Untuk Windows PowerShell

```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

---

### Port 5173 sedang digunakan

Jalankan kembali

```bash
npm run dev
```

atau hentikan aplikasi lain yang menggunakan port tersebut.

---

### Update Project Gagal

Simpan perubahan terlebih dahulu

```bash
git add .
git commit -m "Backup"
```

Kemudian

```bash
git pull origin main
```

---

# 👥 Tim Pengembang

| Nama | NIM |
|------|------|
| SUNANDAR SUHERMAN | 230605110050 |
| ... | ... |
| ... | ... |

---

# 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran dan tugas akademik.

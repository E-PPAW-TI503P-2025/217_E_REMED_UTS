# 📚 Sistem Perpustakaan Digital - UCP 1

Aplikasi manajemen perpustakaan sederhana berbasis Web (Node.js, Express, Sequelize, MySQL) yang dilengkapi dengan fitur Geolocation untuk mencatat lokasi peminjaman buku.

## 🚀 Fitur Utama
- **Dashboard User**: Melihat daftar buku dan meminjam buku (otomatis mencatat titik GPS).
- **Admin Panel**: Manajemen inventaris (Tambah, Edit, Hapus buku) dan melihat riwayat lokasi peminjam.
- **Role-Based Access**: Pembatasan akses menggunakan Header `x-user-role`.

---

## 🛠️ Cara Menjalankan Aplikasi

### 1. Persiapan Database
1. Buka **Mysql**.
2. Buat database baru dengan nama `library_db`.
3. Cek file `config/config.json`, sesuaikan `username` dan `password` MySQL kamu.

### 2. Instalasi
Buka terminal/CMD di folder proyek, lalu jalankan:
```bash
npm install


node app.js

![GET /api/books : Melihat semua buku.](<ss/Screen Shot 2026-01-28 at 18.52.47.png>)

![POST /api/borrow : Meminjam buku](<ss/Screen Shot 2026-01-28 at 18.54.01.png>)

![POST /api/books : Tambah buku baru](<ss/Screen Shot 2026-01-28 at 18.55.59.png>)

![PUT /api/books/:id : Update buku.](<ss/Screen Shot 2026-01-28 at 18.58.47.png>)

![DELETE /api/books/:id : Hapus buku](<ss/Screen Shot 2026-01-28 at 18.59.49.png>)

![GET /api/books/:id : Detail buku.](<ss/Screen Shot 2026-01-28 at 19.00.44.png>)

![Struktur Database books](<ss/Screen Shot 2026-01-28 at 19.02.58.png>)

![database borrowlog](<ss/Screen Shot 2026-01-28 at 19.03.12.png>)


![tampilan web](<ss/Screen Shot 2026-01-28 at 19.10.44.png>)

![tampilan web](<ss/Screen Shot 2026-01-28 at 19.10.36.png>)

![tampilan web](<ss/Screen Shot 2026-01-28 at 19.10.52.png>)


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

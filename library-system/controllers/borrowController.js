const { Book, BorrowLog } = require('../models');

// Fungsi untuk Meminjam Buku (User)
exports.borrowBook = async (req, res) => {
    try {
        const { bookId, latitude, longitude } = req.body;
        const userId = req.headers['x-user-id'] || 1; // Ambil dari header atau default 1

        console.log(`--- Memulai Peminjaman: Buku ID ${bookId} oleh User ${userId} ---`);

        // 1. Cari buku
        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }

        console.log(`Stok awal: ${book.stock}`);

        // 2. Cek stok
        if (book.stock <= 0) {
            return res.status(400).json({ message: "Maaf, stok buku ini sudah habis" });
        }

        // 3. KURANGI STOK
        // Kita gunakan cara eksplisit agar Sequelize benar-benar mendeteksi perubahan
        const newStock = book.stock - 1;
        
        // Update menggunakan method update untuk memastikan query SQL terkirim
        await book.update({ stock: newStock }); 
        
        console.log(`Stok berhasil dikurangi menjadi: ${newStock}`);

        // 4. Catat ke Tabel BorrowLog
        const log = await BorrowLog.create({
            userId,
            bookId,
            latitude,
            longitude,
            borrowDate: new Date()
        });

        console.log("Transaksi berhasil dicatat ke BorrowLog");

        // Kirim respon sukses
        res.status(201).json({ 
            message: "Buku berhasil dipinjam, stok berkurang.", 
            currentStock: newStock, 
            data: log 
        });

    } catch (error) {
        console.error("CRITICAL ERROR PADA BORROW:", error);
        res.status(500).json({ message: "Gagal memproses peminjaman: " + error.message });
    }
};

// Fungsi untuk Admin melihat log
exports.getBorrowLogs = async (req, res) => {
    try {
        const logs = await BorrowLog.findAll({
            // Pastikan relasi model sudah benar di models/index.js agar include ini tidak error
            include: [{ 
                model: Book, 
                attributes: ['title'] 
            }],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json(logs);
    } catch (error) {
        console.error("Error Fetch Logs:", error);
        res.status(500).json({ message: error.message });
    }
};
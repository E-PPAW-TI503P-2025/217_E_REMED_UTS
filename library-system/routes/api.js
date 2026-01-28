const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const borrowController = require('../controllers/borrowController');
const { checkRole } = require('../middleware/authMiddleware');

// --- PUBLIC ROUTES ---
// Semua orang bisa melihat daftar dan detail buku
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookDetail);

// --- ADMIN ROUTES (Header x-user-role: admin) ---
// Mengelola Inventory Buku
router.post('/books', checkRole('admin'), bookController.createBook);
router.put('/books/:id', checkRole('admin'), bookController.updateBook);
router.delete('/books/:id', checkRole('admin'), bookController.deleteBook);

// Melihat riwayat peminjaman & lokasi user (PENTING untuk dashboard admin)
router.get('/borrow', checkRole('admin'), borrowController.getBorrowLogs);

// --- USER ROUTES (Header x-user-role: user) ---
// Melakukan peminjaman buku
router.post('/borrow', checkRole('user'), borrowController.borrowBook);

module.exports = router;
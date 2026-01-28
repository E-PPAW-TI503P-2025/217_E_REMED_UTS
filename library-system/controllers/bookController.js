const { Book } = require('../models');

// 1. GET ALL BOOKS (Public)
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data buku", error: error.message });
    }
};

// 2. GET BOOK DETAIL (Public)
exports.getBookDetail = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. CREATE BOOK (Admin Only)
exports.createBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        
        // Validasi: title dan author tidak boleh kosong 
        if (!title || !author) {
            return res.status(400).json({ message: "Title dan Author wajib diisi" });
        }

        const newBook = await Book.create({ title, author, stock });
        res.status(201).json({ message: "Buku berhasil ditambahkan", data: newBook });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. UPDATE BOOK (Admin Only)
exports.updateBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        const book = await Book.findByPk(req.params.id);
        
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

        await book.update({ title, author, stock });
        res.status(200).json({ message: "Buku berhasil diperbarui", data: book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 5. DELETE BOOK (Admin Only)
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

        await book.destroy();
        res.status(200).json({ message: "Buku berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
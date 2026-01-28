const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false // Validasi: tidak boleh kosong [cite: 83]
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false // Validasi: tidak boleh kosong [cite: 83]
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });

    return Book;
};
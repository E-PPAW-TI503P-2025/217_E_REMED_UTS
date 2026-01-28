const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const BorrowLog = sequelize.define('BorrowLog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false // Dikirim manual dari header/body [cite: 52, 80]
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        borrowDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        latitude: {
            type: DataTypes.FLOAT, // Menyimpan koordinat 
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT, // Menyimpan koordinat 
            allowNull: false
        }
    });

    return BorrowLog;
};
const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const apiRoutes = require('./routes/api');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());

// Melayani file statis untuk "Tampilan Web"
app.use(express.static('public'));

// Menggunakan Routes API
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

// Sinkronisasi Database dan Jalankan Server
sequelize.sync().then(() => {
    console.log('Database connected & synced');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.log('Error: ' + err));
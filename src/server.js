require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/books', bookRoutes);
app.use('/api/members', memberRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Library Management API Running'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

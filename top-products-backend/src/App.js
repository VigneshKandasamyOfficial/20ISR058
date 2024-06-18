const express = require('express');
const cors = require('cors'); // Add this line to import 'cors'
const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

// Routes
app.use('/categories', productsRoutes);

module.exports = app;

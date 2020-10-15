const express = require('express');
const cors = require('cors');
const dovenv = require('dotenv').config();
const app = express();

// Data base
const db = require('./db.js');

// Port
const PORT = process.env.PORT || 3000;


// Settings
app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
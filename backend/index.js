const express = require('express');
const cors = require('cors');
const dovenv = require('dotenv').config();
const fileUpload = require('express-fileupload');
const app = express();

// Data base
const db = require('./db.js');

// Port
const PORT = process.env.PORT || 3000;


// Settings
app.use(cors());
app.use(express.json());
app.use(fileUpload());
//Routes
app.use('/',require('./routes/images.js'));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
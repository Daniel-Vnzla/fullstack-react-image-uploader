const express = require('express');
const cors = require('cors');
const dovenv = require('dotenv').config();
const fileUpload = require('express-fileupload');
const app = express();

// Database
const db = require('./db.js');

// Port
const PORT = process.env.PORT || 3000;

// Settings
app.use(cors());
app.use(express.json());
app.use(fileUpload({
	limits: { 
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));

//Routes
app.use('/',require('./routes/images.js'));


//static 
app.use(express.static('uploads'));

//server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
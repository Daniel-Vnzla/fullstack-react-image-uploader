const router = require('express').Router();
const Image = require('../models/image.js');

const { uploadImage, getImages } = require('../controllers/images.js');
router.get('/images', getImages)

router.post('/upload', uploadImage);


module.exports = router;
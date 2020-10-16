const { v4 } = require('uuid');
const path = require('path');
const Image = require('../models/image.js');

const imageMimeType = ['image/jpeg','image/png','image/git'];

const getImages = async (req, res) => {
	const images = await Image.find();
	res.json(images);
}

const uploadImage = async (req, res) => {
	if (!req.files) {
		return res.status(400).json({
			status: false, 
			message: 'No File Uploaded',
		});
	}
	const { name, data, size, mimetype, mv } = req.files.image;

	if (!imageMimeType.includes(mimetype)){
		return res.status(500).json({
			status: false, 
			message: 'Invalid File Type',
		});
	}

	if(size > 2000000){
		return res.status(500).json({
			status: false, 
			message: 'Image size must be lower than 2mb',
		});
	}
	const randomName = v4() + '-' + name.split(' ').join('-');

	mv(path.join(__dirname,'../uploads/' + randomName));

	const image = new Image({ 
		name: randomName,
		imageUrl: `/${randomName}`,
		mimetype,
		size, 
	});
  
	try{
		const savedImage = await image.save(); 
		res.json({
			status: true,
			message: 'File Uploaded',
			savedImage,
		});
	}
	catch(err){
		res.status(500).json({ message: err.message});
	}
}


module.exports = {
	uploadImage,
	getImages,
}
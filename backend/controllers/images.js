const url = require('url');
const Image = require('../models/image.js');

const imageMimeType = ['image/jpeg','image/png','image/git'];

const getImages = async (req, res) => {
	const images = await Image.find();
	res.json(images);
}

const uploadImage = async (req, res) => {
	if (!req.files) {
		return res.status(500).json({
			status: false, 
			message: 'Not File Found',
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
	
	const buff = data.toString('base64');

	const imageUrl = `data:${mimetype};charset=utf-8;base64,${buff}`;
	const image = new Image({ 
		name: name.slice('.')[0].split(' ').join('-'),
		size, 
		mimetype,
		imageUrl, 
	});

	try{
		const savedImage = await image.save(); 
		res.json({
			status: true,
			message: 'File Uploaded',		
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
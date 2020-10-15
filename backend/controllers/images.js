
export const getImages = async (req, res) => {
	const images = await Image.find();
	res.json(images);
}

export const uploadImage = async (req, res) => {
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

	const imageUrl = `data:${mimetype};charset=utf-8;base64,${data.toString('base64')}`;
	const image = new Image({ 
		name: name + Date.now(),
		imageUrl, 
		size, 
		mimetype 
	});

	try{
		const savedImage = await image.save(); 
		res.json({
			status: true,
			message: 'File Uploaded',
			imageUrl,
		});
	}
	catch(err){
		res.status(500).json({ message: err.message});
	}
}
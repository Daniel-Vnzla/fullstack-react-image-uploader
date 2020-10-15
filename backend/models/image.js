const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	data: { 
		type: Buffer, 
		required: true
	},
	contentType: { 
		type: String, 
		required: true 
	},
	size: { 
		type: Number, 
		required: true
	},
},{ timestamps: true })


module.exports = model('Image', ImageSchema);
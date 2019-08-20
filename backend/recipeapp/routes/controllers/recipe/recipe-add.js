const keystone = require('keystone');
var multer = require('multer');
const addRecipeModel = keystone.list('Recipe');
// const RecipeImageModel = keystone.list('FileUpload');
const cloudinary = require('cloudinary').v2;

module.exports = (req, res) => {
	const { title, ingredients, description } = req.body || {};
	const image  = req.files ? req.files.image : {image};

	cloudinary.uploader.upload(image.path, (err, data) => {
		const saveRecipeImageModel = new addRecipeModel.model({
			title,
			ingredients,
			description,
			image: data 
		});

  		saveRecipeImageModel.save((err, data) => {
			if(err) return res.json({ err });
		res.json('recipe added');
		}) 	
		
	})
};


 

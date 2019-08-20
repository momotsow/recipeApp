const keystone = require("keystone");
const enquiryModel = keystone.list("Enquiry");
// const recipeFile = require('./mock/recipes.json.js');

module.exports = (req, res) => {
	const { name, email, phoneNumber, message } = req.body;
	const saveEnquire = new enquiryModel.model({
		name,
		email,
		phoneNumber,
		message
	});

	saveEnquire.save((err, data) => {
		if (err) return res.json({ err });
		res.json("message sent");
	});
};

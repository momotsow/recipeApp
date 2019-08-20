var keystone = require("keystone");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//set locals
	locals.section = "gallery";

	// Load Recipes
	view.query("recipes", keystone.list("Recipe").model.find());

	//render view
	view.render("recipes");
};

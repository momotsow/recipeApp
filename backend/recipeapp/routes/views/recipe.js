var keystone = require("keystone");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//set locals
	locals.section = "gallery";
	locals.filters = {
		recipe: req.params.recipe
	};
	locals.data = {
		recipes: []
	};

	view.on("init", function(next) {
		var q = keystone.list("Recipe").model.findOne({
			slug: locals.filters.recipe
		});

		q.exect(function(err, result) {
			locals.data.recipe = result;
			next(err);
		});
	});

	//render view
	view.render("recipe");
};

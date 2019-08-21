var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
const recipeModule = require('./controllers/recipe');
const enquireRouting = require('./controllers/contact');

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);


// Handle 404 errors
keystone.set('404', function (req, res, next) {
	res.notfound();
});

// Handle other errors
keystone.set('500', function (err, req, res, next) {
	var title, message;
	if (err instanceof Error) {
		message = err.message;
		err = err.stack;
	}
	res.err(err, title, message);
});

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function (app) {

	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
		res.header('Content-Type', 'application/json');
		res.header('Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
		next();
	});

	app.options('*', function(req, res) {
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-XSRF-TOKEN');
		res.sendStatus(200);
	 });
	//  app.options('*', function(req, res) {
	// 	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-XSRF-TOKEN');
	// 	res.sendStatus(200);
	//  });
	// app.all('recipe*', keystone.middleware.cors);

	// Views
	// app.get('/', routes.views.index);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
	// app.get('/gallery', routes.views.gallery);
	// app.get('/recipes/:recipe', routes.views.recipe);
	// app.get('/recipes', routes.views.recipes);
	// app.all('/contact', routes.views.contact);

	//File Upload Route
	//   app.get('/api/fileupload/list', keystone.middleware.api, routes.api.fileupload.list);
	//   app.get('/api/fileupload/:id', keystone.middleware.api, routes.api.fileupload.get);
	//   app.all('/api/fileupload/:id/update', keystone.middleware.api, routes.api.fileupload.update);
	//   app.all('/api/fileupload/create', keystone.middleware.api, routes.api.fileupload.create);
	//   app.get('/api/fileupload/:id/remove', keystone.middleware.api, routes.api.fileupload.remove);

	//    app.get('/protected', middleware.requireUser, routes.views.protected);

	// API
	app.use('/recipes', recipeModule);
	app.use('/enquiries', enquireRouting);

};

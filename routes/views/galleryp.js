var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'galleryp';

	// Load the galleries by sortOrder
	view.query('galleriesp', keystone.list('GalleryP').model.find().sort('sortOrder'));

	// Render the view
	view.render('galleryp');

};

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * GalleryP Model
 * =============
 */

var GalleryP = new keystone.List('GalleryP', {
	autokey: { from: 'name', path: 'key', unique: true },
});

GalleryP.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },

});



GalleryP.register();

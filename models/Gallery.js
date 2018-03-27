var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
<<<<<<< HEAD
	sortable: true,
=======
>>>>>>> 313c0ce928a6be2448ed11b97b91f912a39aab96
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
<<<<<<< HEAD
	"Main image": { type: Types.CloudinaryImage},
=======
	heroImage: { type: Types.CloudinaryImage },
>>>>>>> 313c0ce928a6be2448ed11b97b91f912a39aab96
	images: { type: Types.CloudinaryImages },

});


<<<<<<< HEAD
=======

>>>>>>> 313c0ce928a6be2448ed11b97b91f912a39aab96
Gallery.register();

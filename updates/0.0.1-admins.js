/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
<<<<<<< HEAD
	User = [
=======
	exports.User = [
>>>>>>> 313c0ce928a6be2448ed11b97b91f912a39aab96
	    {
	        'name.first': 'Admin',
	        'name.last': '',
	        'name.full': 'Admin',
	        email: keystoneui.get('admin email'),
	        password: keystoneui.get('admin password'),
	        isAdmin: true,
	        roles: ['role_super'],
	        __ref: 'admin_user'
	    }
<<<<<<< HEAD
	]
=======
	];
>>>>>>> 313c0ce928a6be2448ed11b97b91f912a39aab96
};



/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var async = require('async');
var User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin (admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function (err) {
		if (err) {
			console.error('Error adding admin ' + admin.email + ' to the database:');
			console.error(err);
		} else {
			console.log('Added admin ' + admin.email + ' to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(admins, createAdmin, done);
};

*/

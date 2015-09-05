var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// user database model

var userSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	email: { type: String, unique: true, lowercase: true, trim: true, required: true },
	password: String
});

userSchema.pre('save', function (next) {
	var user = this;
	if (!user.isModified('password')) { return next(); }

	function makeHash(err, salt) {
		if (err) { return next(err); }
		bcrypt.hash(user.password, salt, setHash);
	}

	function setHash(err, hash) {
		if (err) { return next(); }
		user.password = hash;
		next();
	}

	bcrypt.genSalt(10, makeHash);
});

userSchema.methods.comparePassword = function (newPassword, cb) {
	bcrypt.compare(newPassword, this.password, cb);
};

// search items database model
var itemSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	color: String,
	issueDate: Date,
	price: Number,
	rating: Number,
	inStock: Boolean,
	img: String
});


var User = mongoose.model('User', userSchema);
var Item = mongoose.model('Item', itemSchema);

module.exports = {
	User: User,
	Item: Item
};

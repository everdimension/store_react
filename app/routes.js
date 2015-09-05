var moment = require('moment');
var jwt = require('jwt-simple');

var User = require('./models/models').User;
var Item = require('./models/models').Item;

var tokenSecret = "service whale basic encryption";

function checkAuthentication(req, res, next) {
	if (!req.headers.authorization) {
		return res.send(401);
	}
	var token = req.headers.authorization.split(' ')[1];

	try {

		var decoded = jwt.decode(token, tokenSecret);
		if (decoded.exp <= Date.now()) {
			res.send(400, 'Access token has expired');

		} else {
			req.user = decoded.user;
			return next();
		}

	} catch (err) {
		return res.send(500, 'Error parsing token');
	}
}

function createJwtToken(user) {
	var payload = {
		user: user,
		iat: new Date().getTime(),
		exp: moment().add(7, 'days').valueOf()
	};
	return jwt.encode(payload, tokenSecret);
}

var setRoutes = function(app) {
	app.get('/api/test', function (req, res, next) {
		return res.send('answer from server');
	});

	app.post('/api/auth/signup', function (req, res, next) {

		var user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});

		user.save(function (err) {
			if (err) { return next(err); }
			res.send(200, {
				user: {
					email: user.email,
					name: user.name || null
				}
			});
		});

	});

	app.post('/api/auth/login', function (req, res, next) {

		function loginUser(err, user) {
			if (!user) { return res.send(401, { message: 'User does not exist' }); }
			user.comparePassword(req.body.password, function (err, isMatch) {
				if (err) { return next(err); }
				if (!isMatch) { return res.send(401, { message: 'Invalid email or password' }); }
				var token = createJwtToken(user);
				res.send({
					user: {
						email: user.email,
						name: user.name || null
					},
					token: token
				});
			});
		}

		User.findOne({
			email: req.body.login
		}, loginUser);

	});

	// var id = 1;
	// var priceRange = [20.0, 300.0, 400.00, 14.00, 18.00, 1200.0];
	// var ratings = [1.0, 2.0, 3.0, 4.0, 5.0];
	//
	// app.post('/api/items/seed', function (req, res, next) {
	// 	var item = new Item({
	// 		_id: id++,
	// 		name: 'item_name_' + id,
	// 		color: ['Red', 'White', 'Black', 'Blue', 'Yellow', 'Green'][Math.floor(Math.random() * 6)],
	// 		issueDate: moment().subtract(1, 'day').subtract(Math.floor(Math.random() * 6 + 1), 'weeks'),
	// 		price: priceRange[Math.floor(Math.random() * priceRange.length)],
	// 		rating: ratings[Math.floor(Math.random() * ratings.length)],
	// 		inStock: !!(id % 2),
	// 		img: 'http://placehold.it/200x300'
	// 	});
	//
	// 	item.save(function (err) {
	// 		if (err) { return next(err); }
	// 		res.send(200, {
	// 			item: item
	// 		});
	// 	});
	// });

	// app.post('/api/items/change', function (req, res, next) {
	// 	var query = Item.find();
	// 	function changeItem(item) {
	// 		item.img = 'http://placehold.it/150x100';
	// 		item.save();
	// 	}
	// 	query.exec(function (err, items) {
	// 		items.forEach(changeItem);
	// 		res.send(items);
	// 	})
	// });

	app.get('/api/items', function (req, res, next) {
		var query = Item.find();

		query.exec(function (err, items) {
			if (err) { return next(err); }
			res.send(items);
		});
	});

	// app.get('*', function (req, res) {
	// 	res.redirect('/#' + req.originalUrl);
	// });
}


module.exports = setRoutes;

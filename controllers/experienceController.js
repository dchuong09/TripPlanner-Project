const db = require('../models');

function index(req, res) {
	console.log('Hel')
	db.Experience.find({}, function(err, foundAct) {
		if (err) {
			console.log('Experience controller err: ', err);
		}
		res.json(foundAct);
	})
}

module.exports = {
	index: index
}
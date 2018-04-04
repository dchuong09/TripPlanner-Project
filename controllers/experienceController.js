const db = require('../models');

function index(req, res) {
	console.log('Hel')
	db.Experience.find({}, function(err, foundAct) {
		console.log(foundAct)
		console.log(err);
		res.json(foundAct);
	})
}

module.exports = {
	index: index
}
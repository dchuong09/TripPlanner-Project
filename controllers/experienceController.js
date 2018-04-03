const db = require('../models');

function index(req, res) {
	db.Experience.find({}, function(err, foundAct) {
		res.json(foundAct);
	})
}

module.exports = {
	index: index
}
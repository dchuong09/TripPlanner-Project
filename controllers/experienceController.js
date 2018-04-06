const db = require('../models');

function index(req, res) {
	db.Experience.find({}, function(err, foundAct) {
		if (err) {
			console.log('Experience controller err: ', err);
		}
		res.json(foundAct);
	});
};

function create(req, res) {
	var newExperience = new db.Experience(req.body);
	newExperience.save(function handleDBExpSaved(err, savedExperience) {
		res.json(savedExperience);
	});
};

function show(req, res) {
	// console.log(1111, req.params.foo)
	db.Experience.findById(req.params.id, function(err, foundLocation) {
		res.json(foundLocation);
	})
}

function destroy(req, res) {
	db.Experience.findByIdAndRemove(req.params.id, function(err, deletedLocation) {
		if (err) { console.log('error', err); }
		res.send(200);
	});
};

function update(req, res) {
	db.Experience.findById(req.params.id, function(err, foundLocation) {
		if (err) { console.log('Location update error: ', err) }
		foundLocation.name = req.body.name;
		foundLocation.address = req.body.address;
		foundLocation.description = req.body.description;
		foundLocation.save(function(err, savedLocation) {
			if (err) { console.log('saving Location failed') }
				console.log(333, savedLocation)
			res.json(savedLocation);
		})
	})
}


module.exports = {
	index: index,
	create: create,
	destroy: destroy,
	show: show,
	update: update
}

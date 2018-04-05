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


function destroy(req, res) {
	db.Experience.findByIdAndRemove(req.params.experience._id, function(err, deletedLocation) {
		if (err) { console.log('error', err); }
		res.send(200);
	}); 
};


module.exports = {
	index: index,
	create: create,
	destroy: destroy
}

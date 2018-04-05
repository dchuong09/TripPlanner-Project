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
	var newComment = new db.Experience(req.body);
	newComment.save(function handleDBCommentSaved(err, savedComment) {
		res.json(savedComment);
	});
};


function destroy(req, res) {
	var commentId = req.params.id;
	db.Experience.findOneAndRemove({ _id: commentId }, function(err, deletedComment) {
		res.json(deletedComment);
	});
};


module.exports = {
	index: index,
	create: create,
	destroy: destroy
}
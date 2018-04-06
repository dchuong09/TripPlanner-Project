const mongoose = require('mongoose');
  Schema = mongoose.Schema;

const Activity = require('./activities.js');

const ExperienceSchema = new Schema({
	name: String,
	address: String,
	description: String,
	photo: String,
	type: String,
	// activites: [ Activity.schema ],
	duration: String,
	briefDesc: String,
	locationUrl: String
});

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;
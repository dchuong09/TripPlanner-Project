const mongoose = require('mongoose');
  Schema = mongoose.Schema;

const Activity = require('./activities.js');

const ExperienceSchema = new Schema({
	name: String,
	address: String,
	description: String,
	photo: String,
	activites: [ Activity.schema ],
	duration: Number
});

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;
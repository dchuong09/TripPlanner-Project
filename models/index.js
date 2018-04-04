const mongoose = require('mongoose');
// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/TripPlanner-Project' );
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TripPlanner-Project' );

const activities = require('./activities.js');
const experiences = require('./experience.js');

module.exports = {
	Activity: activities,
	Experience: experiences
};
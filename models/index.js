const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );

const activities = require('./activities.js');
const experiences = require('./experience.js');

module.exports = {
	Activity: activities,
	Experience: experiences
};
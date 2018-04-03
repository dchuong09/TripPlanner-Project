const mongoose = require('mongoose');
  Schema = mongoose.Schema;

const ActivitySchema = new Schema({
	name: String
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;

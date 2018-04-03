const db = require('../models');

const experiences = [{
{
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}, {
	name:
	address:
	description:
	photo:
	duration:
}];



db.Experience.remove({}, function(err, experiences){
  // code in here runs after all Experiences are removed
  db.Experience.create(experiencesList, function(err, experiences){
    // code in here runs after all Experiences are created
    if (err) { return console.log('ERROR', err); }
    console.log("all Experiences:", experiences);
    console.log("created", Experiences.length, "Experiences");
    process.exit();
  });
});
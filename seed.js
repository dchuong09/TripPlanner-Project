const db = require('./models');

const experienceLists = [{
	name: 'Pier 39',
	address: 'Fishermans Wharf, North Beach/Telegraph Hill',
	description: 'Shopping Centers',
	photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8hug_ay5fWl0ebfbrvfmPo88hVxTEZBTU0QY98izEWhDvizo9A',
	duration: '2 hour'
}];



db.Experience.remove({}, function(err, experiences){
  // code in here runs after all Experiences are removed
  db.Experience.create(experienceLists, function(err, experiences){
    // code in here runs after all Experiences are created
    if (err) { return console.log('ERROR', err); }
    console.log("all Experiences:", experiences);
    console.log("created", experiences.length, "Experiences");
    process.exit();
  });
});

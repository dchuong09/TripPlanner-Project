const db = require('./models');

const experienceLists = [{
	name: 'Pier 39',
	address: 'Fishermans Wharf, North Beach/Telegraph Hill',
	description: 'Shopping Centers',
	photo: '',
	duration: '2 hour'
}, {
	name: 'Golden Gate Bridge',
	address: 'Highway 101',
	description: 'Landmarks & Historical Buildings',
	photo: '',
	duration: '2 hour'
}, {
	name: 'Twin Peaks',
	address: '501 Twin Peaks Blvd',
	description: 'Parks, Landmarks & Historical Buildings',
	photo: '',
	duration: '30 minutes'
}, {
	name: 'Dolores Park',
	address: '19th & Dolores St',
	description: 'Parks, Playgrounds, Basketball Courts',
	photo: '',
	duration: '1 hour'	
}, {
	name: 'Palace Of Fine Arts',
	address: '3601 Lyon St',
	description: 'Landmarks & Historical Buildings, Venues & Event Spaces',
	photo: '',
	duration: '1 hour'	
}, {
	name: 'Union Square',
	address: '333 Post St',
	description: 'Shopping Centers',
	photo: '',
	duration: '1 hour'	
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

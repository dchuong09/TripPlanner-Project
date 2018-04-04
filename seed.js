const db = require('./models');

const experienceLists = [{
	name: 'Pier 39',
	address: 'Fishermans Wharf, North Beach/Telegraph Hill',
	description: 'Fisherman’s Wharf’s bustling streets are crowded for good reason—many of San Francisco’s most postcard-worthy attractions are packed into this iconic neighborhood. If enjoying the carnival fare of Pier 39, tasting some of Ghirardelli’s velvety chocolate, and riding a cable car is on your agenda, you can do it all in Fisherman’s Wharf. Surrounding the wharf, homes dot the hillsides and boast spectacular views of the Golden Gate Bridge and San Francisco’s infamous prison, Alcatraz.',
	photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8hug_ay5fWl0ebfbrvfmPo88hVxTEZBTU0QY98izEWhDvizo9A',
	duration: '2 hour'
} {
	name: 'Golden Gate Bridge',
	address: 'Highway 101 San Francisco',
	description: "Photograph the Golden Gate Bridge, one of the world's most beloved and scenic icons, with a veteran travel photographer. Discover little known perspectives on our scenic hike on the lovely coastal landscape of the Golden Gate. In spring, wildflowers abound on our route and marine mammals and raptors provide a wildlife show. The moody Golden Gate Bridge is always a delight to photograph, sun or fog.",
	photo: 'https://boldtourist.com/wp-content/uploads/2015/11/Golden-Gate-Bridge-from-Crissy-Field-810x512.jpg',
	duration: '2 hour'
}
];



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

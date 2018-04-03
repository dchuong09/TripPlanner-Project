const express = require('express');
const app = express();
const controllers = require('./controllers');

const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('views/index.html', { root: __dirname });
});

app.get('/api', controllers.api.index);

app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port 3000');
})
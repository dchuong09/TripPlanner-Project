const express = require('express');
const app = express();

const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', function(req, res) {
	res.sendFile('views/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port 3000');
})
const express = require('express');
const app = express();
const controllers = require('./controllers');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('views/index.html', { root: __dirname });
});


// app.get('/details', function(req, res) {
// 	res.sendFile('views/details.html', { root: __dirname });
// });

app.get('/api', controllers.api.index);

app.get('/api/detail/:id', function(req, res) {
	console.log(req.body);
})

app.get('/api/experience', controllers.exp.index);

app.post('/api/experience', controllers.exp.create);

app.delete('/api/experience/:id', controllers.exp.destroy);

app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port 3000');
})

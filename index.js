
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
	// Display a test message
	res.send('Hello World!')
})


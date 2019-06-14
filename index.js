
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});

app.get('/', (req, res) => {
	// Display a test message
	res.send('Hello World!')
})


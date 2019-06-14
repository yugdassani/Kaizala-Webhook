
var express = require('express');

var app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});

app.get('/', (req, res) => {

	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello World!")
})



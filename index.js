
var express = require('express');
var axios = require('axios');
const fetch = require('node-fetch');

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

app.get('/chat', (req,res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello Bots!")
})

fetch('/',{
	method:'POST'
})

fetch('/chat',{
	method:'POST',

})

app.post('/chat', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-73.westus.logic.azure.com:443/workflows/15c33a21e9b34bcd9ede1af1a9df2a73/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xJLkc6pSow8BZHUfj9P44lZm2lbYHMwb9jhvfTVYzI8",
		req.body)
})

app.post('/', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-87.westus.logic.azure.com:443/workflows/68e2aa63d92b489782f35b4972a7be4a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Zdh5oGVMFBAzQAy6ly7I9DB4QTWqeXffpSALu4iQHeE",
		req.body)
})



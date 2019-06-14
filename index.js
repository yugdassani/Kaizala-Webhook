
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

fetch('/',{
	method:'POST',

})

app.post('/', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-87.westus.logic.azure.com:443/workflows/68e2aa63d92b489782f35b4972a7be4a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Zdh5oGVMFBAzQAy6ly7I9DB4QTWqeXffpSALu4iQHeE",
		req.body)
})



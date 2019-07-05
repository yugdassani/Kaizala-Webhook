
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

/** For both action wrappers */
app.get('/', (req, res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello World!")
})

/** This is for the Barclays solution */
app.get('/chat', (req,res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello Bots!")
})

/** This is for employee helpdesk */
app.get('/chatbot', (req,res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello ChatBots!")
})

app.get('/vendor', (req,res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello Vendors!")
})

app.get('/ticket', (req,res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello Actions!")
})

app.get('/onboard', (req,res) => {
	var a = req.param('validationToken')
	if(a!=null)
		res.send(a)
	else
		res.send("Hello New Vendors!")
})

app.post('/onboard', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-09.westus.logic.azure.com:443/workflows/4de11ba879dd4359804fec0f9b15bc4e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9_Fq3t9OTHYS8djGW9CTNbfsrcaubPcnXFuGUqDeWRE",
		req.body)
	res.send("Onboarding Webhook")
})

app.post('/ticket', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-47.westus.logic.azure.com:443/workflows/56bf49c659fc48ada33bafbdba42294c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jlZP7PZbsbszO_0f1cr8aob-R8pixSwPf3ZuPHD5mTs",
		req.body)
	res.send("Ticketing Webhook")
})

app.post('/vendor', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-09.westus.logic.azure.com:443/workflows/54ca2e2b8366438ca030f2b96f18d8ad/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1VYQO_WVZqOGiKDesKx8ckSjJssGkXlTfg2rbGnFCjA",
		req.body)
	res.send("Vendor webhook")
})


app.post('/chatbot', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-97.westus.logic.azure.com:443/workflows/0c670b400634420a8d62c99dda5a6d86/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vvaD3rV1Z5OJnNYv3h3ztQHVALH7hV0V6K5zoTIbT-A",
		req.body)
	res.send("Webhook Active - Message Redirection")
})

app.post('/chat', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-73.westus.logic.azure.com:443/workflows/15c33a21e9b34bcd9ede1af1a9df2a73/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xJLkc6pSow8BZHUfj9P44lZm2lbYHMwb9jhvfTVYzI8",
		req.body)
	res.send("Webhook Active - Message Redirection")

})

app.post('/', (req,res) => {
	console.log(req.body)
	axios.post("https://prod-87.westus.logic.azure.com:443/workflows/68e2aa63d92b489782f35b4972a7be4a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Zdh5oGVMFBAzQAy6ly7I9DB4QTWqeXffpSALu4iQHeE",
		req.body)
	res.send("Webhook Active - Message Redirection")

})



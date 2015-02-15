'use strict';

var express 	= require('express');
var morgan 		= require('morgan');
var bodyParser 	= require('body-parser');
var fs 			= require('fs');

var port    = process.env.port || 8000;
var app     = express();

app.use(morgan('dev'));
app.use(bodyParser.json({limit : '50mb'}));
app.use(allowCrossDomainRequests);

app.post('/upload', handleUpload);

app.listen(port);
console.log('Listening on port '+ port);

module.exports = app;


function handleUpload(req, res){

	var base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
	
	fs.writeFile("crop.png", base64Data, 'base64', function(err) {
	  if(err){
	  	console.log('Error Writing Image', err);
	  }
	});

	res.sendStatus(200);
}

function allowCrossDomainRequests(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

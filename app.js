var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var main = require('./Controllers/main');
var api = require('./Controllers/api');
var port = process.env.PORT || 3000;

app.use('/files', express.static(__dirname + '/public'));

app.set('view engine','ejs');

mongoose.connect(config.getDbConnection());
main(app);
api(app);
app.listen(port);
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var cookieParser = require('cookie-parser');
var session = require('express-session');

// morgan is logger middleware for node js/////
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: "anystringoftext",
                 saveUninitialized: true,
                 resave: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('view engine', 'ejs');

require('./app/routes.js')(app, passport);
app.listen(port);
console.log("Server running on port: " + port)


var express = require('express');
var app = express();

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/ejemplo-directo")

app.use(express.json()); 

const usersRouter = require('./api/users/users.router');
app.use('/api/users' , usersRouter)

const TweetsRouter = require('./api/tweets/tweets.router');
app.use('/api/tweets' , TweetsRouter)

app.listen(3000);
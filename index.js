var express = require('express');
var mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/ejemplo-directo`)


var app = express();


app.use(express.json());

const usersRouter = require('./api/users/users.router');
app.use('/api/users' , usersRouter)


app.listen(4000);
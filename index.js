var express = require('express');
var app = express();

var mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/ejemplo-directo`)

app.use(express.json());

const usersRouter = require('./api/users/users.router');
app.use('/api/users' , usersRouter)

const carsRouter = require('./api/cars/cars.router');
app.use('/api/cars' , carsRouter)

app.listen(3000);
var express = require('express');

var app = express();


app.use(express.json());

const usersRouter = require('./api/users/users.router');
app.use('/api/users' , usersRouter)


app.listen(3000);
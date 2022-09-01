var express = require('express');
var app = express();

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/ejemplo-directo")

app.use(express.json()); 

var cors = require('cors');
app.use(cors()); 


const usersRouter = require('./api/users/users.router');
app.use('/api/users' , usersRouter)

const TweetsRouter = require('./api/tweets/tweets.router');
app.use('/api/tweets' , TweetsRouter)

app.listen(3000);

// http://localhost:3000 


// localtunnel 
// npm install -g localtunnel 
// lt --port 3000
// httpS:///ajsdioasjdiasjdiasd.com 

axios.get('http://localhost:3000/api/users')
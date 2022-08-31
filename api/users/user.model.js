var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    tweetsIDs: [String]
});

const UserModel = mongoose.model('user', UserSchema);


module.exports = UserModel;
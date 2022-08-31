var mongoose = require('mongoose');

const CarsSchema = mongoose.Schema({
    title: String,
    owner: String,
    createdAt : Number
});

const CarModel = mongoose.model('car', CarsSchema);


module.exports = CarModel;
var mongoose = require('mongoose');

const CarsSchema = mongoose.Schema({
    name: String,
    id: Number
});

const CarModel = mongoose.model('car', CarsSchema);


module.exports = CarModel;
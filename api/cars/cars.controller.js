var cuid = require('cuid');

const CarsModel = require('./cars.model')


// Obtener todos los usuarios
function getAll(req, res) {
    CarsModel.find({})
        .then(users => {
            res.send(users)
        })
        .catch(users => {
            res.send(users)
        })


    CarsModel.findOneAndDelete
}

// Obtener un usuario por su ID
function getOneById(req, res) {
    // CarsModel.findOne({ id : req.params.id })
    //     .then(user => {
    //         return res.send(user)
    //     })
    //     .catch(err => {
    //         return res.status(500).send(err)
    //     })
    CarsModel.findById(req.params.id)
        .then(user => {
            return res.send(user)
        })
        .catch(err => {
            return res.status(404).send("No se ha encontrado dicho usuario")
        })

}

// Metiendo un usuario nuevo
function create(req, res) {
    CarsModel.create(req.body)
        .then(userCreated => {
            return res.send(userCreated)
        })
        .catch(err => {
            return res.status(500).send(err)

        })
}

function removeOneById(req, res) {
    CarsModel.findByIdAndRemove(req.params.id)
        .then(deleted => {
            res.send(deleted)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

function updateOneById(req, res) {
    CarsModel.findByIdAndUpdate(req.params.id, req.body, { new : true , runValidators : true } )
        .then(updated => {
            res.send(updated)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

module.exports = { getAll, getOneById, create, removeOneById, updateOneById }

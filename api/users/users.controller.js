var cuid = require('cuid');

const UserModel = require('./user.model')


/**
 * Función para enlazar con el endpoint GET / con la intencion de obtener a todos los de la colección
 * @param {*} req Parámetro de entrada referente a la Request
 * @param {*} res Parámetro de entrada referente a la Response. Sirve para contestar al cliente
 */
function getAll(req, res) {
    UserModel.find({})
        .then(users => {
            res.send(users)
        })
        .catch(users => {
            res.send(users)
        })
}

/** */
function getOneById(req, res) {
    // UserModel.findOne({ id : req.params.id })
    //     .then(user => {
    //         return res.send(user)
    //     })
    //     .catch(err => {
    //         return res.status(500).send(err)
    //     })
    UserModel.findById(req.params.id)
        .then(user => {
            return res.send(user)
        })
        .catch(err => {
            return res.status(404).send("No se ha encontrado dicho usuario")
        })

}

// Metiendo un usuario nuevo
function create(req, res) {
    UserModel.create(req.body)
        .then(userCreated => {
            return res.send(userCreated)
        })
        .catch(err => {
            return res.status(500).send(err)
        })
}

function removeOneById(req, res) {
    // UserModel.findByIdAndDelete(req.params.id)
    UserModel.findByIdAndRemove(req.params.id)
        .then(deleted => {
            res.send(deleted)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

function updateOneById(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body, { new : true , runValidators : true } )
        .then(updated => {
            res.send(updated)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

module.exports = { getAll, getOneById, create, removeOneById, updateOneById }

var cuid = require('cuid');

var users = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}]


// Obtener todos los usuarios
function getAll(req, res) {
    res.send(users)
}

// Obtener un usuario por su ID
function getOneById(req, res) {
    const id = req.params.variable;
    const userFound = users.find(user => user.id == id);
    res.send(userFound)
}

// Metiendo un usuario nuevo
function create(req, res) {
    // Recogo solo del body los campos que me interesan
    const { name, username, email, address, company, phone } = req.body;

    // Validaría cada campo
    if (typeof name === 'undefined' || name.length < 5) {
        return res.status(400).send('El nombre tiene que tener mínimo 5 letras')
    }

    // Preparo ese objeto usuario con su ID
    const user = { id: cuid(), name, username, email, address, company, phone }
    users.push(user)
    return res.send(user);
}

function removeOneById(req, res) {
    const idToDelete = req.params.id;
    users = users.filter(user => user.id != idToDelete)
    return res.send({})
}

function updateOneById(req, res) {
    // const user = users.find(user => user.id == req.params.id);
    // user.name = req.body.name;
    const { body } = req.body;

    const userIndex = users.findIndex(user => user.id == req.params.id);
    // NOTAS: Esto no se hace nunca, porque no estoy en este ejemplo VALIDANDO nada
    // Me mete el usuario lo que básicamente quiera. 
    users[userIndex] = req.body;

    return res.send(req.body)
}

module.exports = { getAll, getOneById, create, removeOneById, updateOneById }

var express = require('express');
var cuid = require('cuid');
var app = express();

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

app.use(express.json());


// Obtener todos los usuarios
app.get('/api/users', (req, res) => {
    res.send(users)
})

// Obtener un usuario por su ID
app.get('/api/users/:variable', (req, res) => {
    const id = req.params.variable;
    const userFound = users.find(user => user.id == id);
    res.send(userFound)

})


// Metiendo un usuario nuevo
app.post('/api/users', (req, res) => {
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
})

app.delete('/api/users/:id', (req, res) => {
    const idToDelete = req.params.id;
    users = users.filter(  user => user.id != idToDelete )
    return res.send({})
})

app.put('/api/users/:id', (req, res) => {
    // const user = users.find(user => user.id == req.params.id);
    // user.name = req.body.name;

    const userIndex = users.findIndex(user => user.id == req.params.id);
    // NOTAS: Esto no se hace nunca, porque no estoy en este ejemplo VALIDANDO nada
    // Me mete el usuario lo que básicamente quiera. 
    users[userIndex] = req.body;

    return res.send(req.body)
})


app.listen(3000);
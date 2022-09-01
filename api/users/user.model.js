var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required : [true, 'El username no puede estar en blanco'],
        minLength : [4 , 'El username tiene que tener mínimo 4 caracteres' ],
        maxLength : [120 , 'El username tiene que tener máximo 120 caracteres' ],
        unique: [true, 'El username {VALUE} está ya repetido']
    },
    name: {
        type: String,
        minLength : 4,
        maxLength : 200
    },
    email: {
        type: String,
        required : true,
        minLength : 8,
        maxLength : 120,
        validate: {
            validator: function(loQueLLega) {
              return loQueLLega.includes('@') && loQueLLega.endsWith('.com');
            },
            message: 'el email {VALUE} no está bien formateado'
          },
    },
    tweetsIDs: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tweet' 
    } ]
});

const UserModel = mongoose.model('user', UserSchema);


module.exports = UserModel;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema ({
    email:{
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password:{
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ['Carrier', 'Client', 'Admin']
    },
    company: {
        type: String
    },
    aboutYourself: {
        type: String
    },
    loads: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Load'
    }],
    trucks: [{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Truck'
    }],
    dotNumber:{
        type: String
    },
    mcNumber: {
        type: String
    },
    trailers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trailer'
    }]
})


module.exports = mongoose.model('User', userSchema)
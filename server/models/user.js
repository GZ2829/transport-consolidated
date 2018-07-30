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
    completedLoads: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Load'
   }],
    dotNumber:{
        type: String
    },
    mcNumber: {
        type: String
    },
})


module.exports = mongoose.model('User', userSchema)
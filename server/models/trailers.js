var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const trailerSchema = new Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    typeOfTrailer:{
        type: String,
        required: true   
    },
    model:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    carryingCapacityInLbs: {
        type: Number,
        required: true
    },
    palletCapacity:{
        type: Number
    }, 
    amountOfTrailers:{
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Trailer', trailerSchema)
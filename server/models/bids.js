var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bidSchema = new Schema({
    truckerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    loadId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Load'
    },
    bidAmountInUSD: {
        type: Number,
        required: true,
    },
    bidderTrucks:{
        type: mongoose.Schema.Types,
        ref: 'Truck'
    },
    bidderTrailers:{
        type: mongoose.Schema.Types,
        ref: 'Trailer'
    }
})

module.exports = mongoose.model('Bid', bidSchema)
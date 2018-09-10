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
    bidderTrucks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Truck',
     
    }],
    bidderTrailers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trailer'
    }],
    winningBid:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Bid', bidSchema)
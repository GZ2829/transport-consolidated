var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const truckSchema = new Schema({

    clientId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        
    },

    make:{

        type: String,
        required: true  

    },

    model:{

        type: String,

    },

    year:{

        type: Number,
        required: true

    },

    class:{

        type: String,
        required: true,
        enum: ['Class 1-3 (0-14,000lbs)', 'Class 4-6 (14,000-26,000lbs)', 'Class 7-8 (26,000-80,000lbs+)']

    },

    amountOfTrucks:{

        type: Number,
        required: true,

    }

})

module.exports = mongoose.model('Truck', truckSchema)
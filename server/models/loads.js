var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const loadSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    originCity: {
        type: String,
        required: true
    },
    originState: {
        type: String,
        required: true,
        enum: ['AL', 'AK', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    },
    destinationCity: {
        type: String,
        required: true
    },
    destinationState: {
        type: String,
        required: true,
        enum: ['AL', 'AK', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    },
    typeOfTrailers:{
        type: String,
        required: true
    },
    isPalletized:{
        type: Boolean,
        required: true, 
    },
    needAssistanceLoading:{
        type: Boolean,
        required: true
    },
    isGPSRequired: {
        type: Boolean,
        required: true
    },
    isRushed: {
        type: Boolean,
        required: true,
    },
    bids :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid'
    }]
})

module.exports = mongoose.model('Load', loadSchema)
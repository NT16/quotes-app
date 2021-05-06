const mongoose = require('mongoose');
const Filter = require('bad-words');
const filter = new Filter();

const quoteSchema = new mongoose.Schema({
    text : {
        type: String,
        required: true,
        validate(value) {
            if( filter.isProfane(value)) {
                throw new Error('Profanity not allowed');
            }
        } 
    },
    by : {
        type: String,
        uppercase : true,
        validate(value) {
            if( filter.isProfane(value)) {
                throw new Error('Profanity not allowed');
            }
        } 
    },
    private : {
        type: Boolean,
        default : true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps : true
});

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;

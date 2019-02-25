var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    googleId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    location: {
        type: String,
    },
    skys: [{
        type: Schema.Types.ObjectId,
        ref: 'Sky'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
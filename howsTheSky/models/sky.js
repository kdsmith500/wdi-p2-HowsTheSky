var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skySchema = new Schema({
    location: {
        type: String,
        required: true
    },
    weather: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sky', skySchema);
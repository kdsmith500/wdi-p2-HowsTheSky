var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var replySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String
    },
    image: {
        type: String
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

var threadSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String
    },
    image: {
        type: String
    },
    message: {
        type: String
    },
    reply: [replySchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Thread', threadSchema);
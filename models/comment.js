const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    content: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
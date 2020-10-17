const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventScehma = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'https://source.unsplash.com/random'
    },
    date: {
        type: Date
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Event", eventScehma)
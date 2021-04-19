const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    },
    submitted: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',userSchema)
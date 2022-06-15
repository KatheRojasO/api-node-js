const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required:true,
    }, 
    email: {
        type: String, 
        required:true,
        unique:true,
    },
    status: {
        type: String,
        required:true,
        enum: [
            'active',
            'inactive'
        ],
    },
    creation_date: {
        type: Date,
        required:true,
    },
    update_date: {
        type: Date, 
        required:true,
    }
})

module.exports = mongoose.model('User', UserSchema);
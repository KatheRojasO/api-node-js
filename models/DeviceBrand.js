const { Schema, model } = require('mongoose');

const DeviceBrandSchema = Schema({
    name: {
        type: String, 
        required:true,
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

module.exports = model('DeviceBrand', DeviceBrandSchema);
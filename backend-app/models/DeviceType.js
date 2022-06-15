const { Schema, model } = require('mongoose');

const DeviceTypeSchema = Schema({
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

module.exports = model('DeviceType', DeviceTypeSchema);
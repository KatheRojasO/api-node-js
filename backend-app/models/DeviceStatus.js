const { Schema, model } = require('mongoose');

const DeviceStatusSchema = Schema({
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

module.exports = model('DeviceStatus', DeviceStatusSchema);
const { Schema, model } = require('mongoose');

const InventorySchema = Schema({
    serialNumber: {
        type: String, 
        required:true,
        unique:true
    }, 
    model: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    color: {
        type: String, 
        required:true,
    },
    picture: {
        type: String, 
        required:true,
    },
    purchaseDate: {
        type: String, 
        required:true,
    },
    price: {
        type: Number, 
        required:true,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref:'User',
        required: false,
    },
    brand: {
        type: Schema.Types.ObjectId, 
        ref:'DeviceBrand',
        required: true,
    },
    deviceType: {
        type: Schema.Types.ObjectId, 
        ref:'DeviceType',
        required: true,
    },
    deviceStatus: {
        type: Schema.Types.ObjectId, 
        ref:'DeviceStatus',
        required: true,
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

module.exports = model('Inventory', InventorySchema);
const inventoryModel = require ('../models/Inventory');
const {validateInventory} = require('../helpers/inventoryValidators')

const getInventory = async (req, res) => {
    try {
        const inventory = await inventoryModel.find().populate([
            {
                path: 'user', select: 'name email status'
            },
            {
                path: 'brand', select: 'name status'
            },
            {
                path: 'deviceType', select: 'name status'
            },
            {
                path: 'deviceStatus', select: 'name status'
            },
        ]);
        res.send(inventory);
    } catch (error) {
        console.log(error);
        res.status(500).send('A problem has ocurred');
    }
    
}

const createInventory = async (req, res) => {
    try {

        const validations = validateInventory(req);

        if (validations.length > 0){
            console.log(validations)
            return res.status(400).send(validations);
        }

        const serialExist = await inventoryModel.findOne({ serialNumber: req.body.serialNumber });

        if (serialExist){
            return res.status(400).send('This serial number already exist');   
        }

        let inventory = new inventoryModel();
        inventory.serialNumber = req.body.serialNumber;
        inventory.model = req.body.model;
        inventory.description = req.body.description;
        inventory.color = req.body.color;
        inventory.picture = req.body.picture;
        inventory.purchaseDate = req.body.purchaseDate;
        inventory.price = req.body.price;
        inventory.user = req.body.user._id;
        inventory.brand = req.body.brand._id;
        inventory.deviceType = req.body.deviceType._id;
        inventory.deviceStatus = req.body.deviceStatus._id;
        inventory.creation_date = new Date();
        inventory.update_date = new Date();

        inventory = await inventory.save();
        res.send(inventory);
        
    } catch (error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
}

const editInventory = async (req, res) => {
    try {

        let inventory = await inventoryModel.findById(req.params.inventoryId);
        if (!inventory){
            return res.status(400).send('This article does not exist');
        }

        serialExist = await inventoryModel.findOne({ serial: req.body.serial, _id:{$ne: inventory._id} });
        if (serialExist){
            return res.status(400).send('This serial number already exist');
        }

        inventory.serialNumber = req.body.serialNumber;
        inventory.model = req.body.model;
        inventory.description = req.body.description;
        inventory.color = req.body.color;
        inventory.picture = req.body.picture;
        inventory.purchaseDate = req.body.purchaseDate;
        inventory.price = req.body.price;
        inventory.user = req.body.user._id;
        inventory.brand = req.body.brand._id;
        inventory.deviceType = req.body.deviceType._id;
        inventory.deviceStatus = req.body.deviceStatus._id;
        inventory.update_date = new Date();

        inventory = await inventory.save();
        res.send(inventory);
    } catch (error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
    
}

module.exports = {getInventory, createInventory, editInventory}
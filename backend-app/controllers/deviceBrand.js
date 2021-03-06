const deviceBrandModel = require ('../models/DeviceBrand');
const { validateDeviceBrand } = require('../helpers/deviceBrandValidator')

const getDeviceBrand = async (req, res) => {
    try {
        const deviceBrand = await deviceBrandModel.find({status:'active'});
        res.send(deviceBrand);
    } catch (error) {
        console.log(error);
        res.status(500).send('A problem has ocurred');
    }
}

const createDeviceBrand = async (req, res) => {
    try {

        const validations = validateDeviceBrand(req);

        if (validations.length > 0){
            return res.status(400).send(validations);
        }

        let deviceBrand = new deviceBrandModel();
        deviceBrand.name = req.body.name;
        deviceBrand.status = req.body.status;
        deviceBrand.creation_date = new Date();
        deviceBrand.update_date = new Date();

        deviceBrand = await deviceBrand.save();
        res.send(deviceBrand);
    } catch (error){
        console.log(error);
        res.send('An error has ocurred');
    }
}

const editDeviceBrand = async (req, res) => {
    try {

        let deviceBrand = await deviceBrandModel.findById(req.params.deviceBrandId);
        
        if (!deviceBrand){
            return res.status(400).send('This device type does not exist');
        }

        deviceBrand.name = req.body.name;
        deviceBrand.status = req.body.status;
        deviceBrand.update_date = new Date();

        deviceBrand = await deviceBrand.save();
        res.send(deviceBrand);
    } catch (error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
}

const getDeviceBrandById = async (req, res) => {
    try{
        const brand = await deviceBrandModel.findById(req.params.deviceBrandId);
        if(!brand) {
            return res.status(404).send('Device status is not defined');
        }
        res.send(brand)
    }catch (error){
        console.log(error)
        res.status(500).send('An error has occured')
    }
}


module.exports = {getDeviceBrand, createDeviceBrand, editDeviceBrand, getDeviceBrandById}

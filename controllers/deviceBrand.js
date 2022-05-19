const deviceBrandModel = require ('../models/DeviceBrand');

const getDeviceBrand = (req, res) => {
    res.send('get brand');
}

const createDeviceBrand = async (req, res) => {
    try {
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

const editDeviceBrand = (req, res) => {
    res.send('edit brand');
}


module.exports = {getDeviceBrand, createDeviceBrand, editDeviceBrand}

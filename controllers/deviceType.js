const deviceTypeModel = require ('../models/DeviceType');

const getDeviceType = async (req, res) => {
    try {
        const deviceType = await deviceTypeModel.find({status:'active'});
        res.send(deviceType);
    } catch (error) {
        console.log(error);
        res.status(500).send('A problem has ocurred');
    }
}

const createDeviceType = async (req, res) => {
    try {
        let deviceType = new deviceTypeModel();
        deviceType.name = req.body.name;
        deviceType.status = req.body.status;
        deviceType.creation_date = new Date();
        deviceType.update_date = new Date();

        deviceType = await deviceType.save();
        res.send(deviceType);
    } catch (error){
        console.log(error);
        res.send('An error has ocurred');
    }
}

const editDeviceType = async (req, res) => {
    try {

        let deviceType = await deviceTypeModel.findById(req.params.deviceTypeId);
        
        if (!deviceType){
            return res.status(400).send('This device type does not exist');
        }

        deviceType.name = req.body.name;
        deviceType.status = req.body.status;
        deviceType.update_date = new Date();

        deviceType = await deviceType.save();
        res.send(deviceType);
    } catch (error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
}

module.exports = {getDeviceType, createDeviceType, editDeviceType}
const deviceStatusModel = require ('../models/DeviceStatus');

const getDeviceStatus = async (req, res) => {
    try {
        const deviceStatus = await deviceStatusModel.find({status:'active'});
        res.send(deviceStatus);
    } catch (error) {
        console.log(error);
        res.status(500).send('A problem has ocurred');
    }
}

const createDeviceStatus = async (req, res) => {
    try {
        let deviceStatus = new deviceStatusModel();
        deviceStatus.name = req.body.name;
        deviceStatus.status = req.body.status;
        deviceStatus.creation_date = new Date();
        deviceStatus.update_date = new Date();

        deviceStatus = await deviceStatus.save();
        res.send(deviceStatus);
    } catch (error){
        console.log(error);
        res.send('An error has ocurred');
    }
}

const editDeviceStatus = async (req, res) => {
    try {

        let deviceStatus = await deviceStatusModel.findById(req.params.deviceStatusId);
        
        if (!deviceStatus){
            return res.status(400).send('This device type does not exist');
        }

        deviceStatus.name = req.body.name;
        deviceStatus.status = req.body.status;
        deviceStatus.update_date = new Date();

        deviceStatus = await deviceStatus.save();
        res.send(deviceStatus);
    } catch (error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
}

module.exports = {getDeviceStatus, createDeviceStatus, editDeviceStatus}
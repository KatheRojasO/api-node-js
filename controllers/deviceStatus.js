const deviceStatusModel = require ('../models/DeviceStatus');

const getDeviceStatus = (req, res) => {
    res.send('get status');
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

const editDeviceStatus = (req, res) => {
    res.send('edit status');
}

module.exports = {getDeviceStatus, createDeviceStatus, editDeviceStatus}
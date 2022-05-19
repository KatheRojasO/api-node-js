const deviceTypeModel = require ('../models/DeviceType');

const getDeviceType = (req, res) => {
    res.send('get device type');
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

const editDeviceType = (req, res) => {
    res.send('edit device type');
}

module.exports = {getDeviceType, createDeviceType, editDeviceType}
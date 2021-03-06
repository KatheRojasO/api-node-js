const deviceStatusModel = require ('../models/DeviceStatus');
const { validateDeviceStatus } = require('../helpers/deviceStatusValidator');
const DeviceStatus = require('../models/DeviceStatus');


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

        const validations = validateDeviceStatus(req);

        if (validations.length > 0){
            console.log(validations)
            return res.status(400).send(validations);
        }

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

const getDeviceStatusById = async (req, res) => {
    try{
        const status = await DeviceStatus.findById(req.params.deviceStatusId);
        if(!status) {
            return res.status(404).send('Device status is not defined');
        }
        res.send(status)
    }catch (error){
        console.log(error)
        res.status(500).send('An error has occured')
    }
}

module.exports = {getDeviceStatus, createDeviceStatus, editDeviceStatus, getDeviceStatusById}
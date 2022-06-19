const express = require('express');
const router = express.Router();

const {getDeviceStatus, createDeviceStatus, editDeviceStatus, getDeviceStatusById } = require('../controllers/deviceStatus');



router.route('/').get(getDeviceStatus).post(createDeviceStatus);

router.route('/:deviceStatusId').get(getDeviceStatusById).patch(editDeviceStatus);

router.route('/').patch(editDeviceStatus);

module.exports = router;
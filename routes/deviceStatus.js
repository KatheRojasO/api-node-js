const express = require('express');
const router = express.Router();

const {getDeviceStatus, createDeviceStatus, editDeviceStatus } = require('../controllers/deviceStatus');



router.route('/').get(getDeviceStatus).post(createDeviceStatus);

router.route('/:id').get(getDeviceStatus).patch(editDeviceStatus);

router.route('/').patch(editDeviceStatus);

module.exports = router;
const express = require('express');
const router = express.Router();

const {getDeviceType, createDeviceType, editDeviceType } = require('../controllers/deviceType');



router.route('/').get(getDeviceType).post(createDeviceType);

router.route('/:deviceTypeId').get(getDeviceType).patch(editDeviceType);

router.route('/').patch(editDeviceType);

module.exports = router;
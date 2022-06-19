const express = require('express');
const router = express.Router();

const {getDeviceBrand, createDeviceBrand, editDeviceBrand, getDeviceBrandById } = require('../controllers/deviceBrand');



router.route('/').get(getDeviceBrand).post(createDeviceBrand);

router.route('/:deviceBrandId').get(getDeviceBrandById).patch(editDeviceBrand);

router.route('/').patch(editDeviceBrand);

module.exports = router;
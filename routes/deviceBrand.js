const express = require('express');
const router = express.Router();

const {getDeviceBrand, createDeviceBrand, editDeviceBrand } = require('../controllers/deviceBrand');



router.route('/').get(getDeviceBrand).post(createDeviceBrand);

router.route('/:id').get(getDeviceBrand).patch(editDeviceBrand);

router.route('/').patch(editDeviceBrand);

module.exports = router;
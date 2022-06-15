const express = require('express');
const router = express.Router();

const {getInventory, createInventory, editInventory, getInventoryById } = require('../controllers/inventory');



router.route('/').get(getInventory).post(createInventory);

router.route('/:inventoryId').get(getInventoryById).patch(editInventory);

router.route('/').patch(editInventory);

module.exports = router;
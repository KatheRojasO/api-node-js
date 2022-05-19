const express = require('express');
const router = express.Router();

const {getUser, createUser, editUser } = require('../controllers/user');



router.route('/').get(getUser).post(createUser);

router.route('/:id').get(getUser).patch(editUser);

router.route('/').patch(editUser);

module.exports = router;

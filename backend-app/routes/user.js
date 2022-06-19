const express = require('express');
const router = express.Router();

const {getUser, createUser, editUser, getUserById } = require('../controllers/user');



router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getUserById).patch(editUser);

router.route('/').patch(editUser);

module.exports = router;

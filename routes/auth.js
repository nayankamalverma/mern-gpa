const express = require('express');
const router = express.Router();
const verifyPasswordToken = require('../middlewares/verifyPasswordToken');

const { register, login } = require('../controllers/auth');

router.route('/register').post(verifyPasswordToken, register)
router.route('/login').post(verifyPasswordToken, login)

module.exports = router;
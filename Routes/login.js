const express = require('express');

const userLogin = require('../Controllers/Login')

const router = express.Router();

router.post('/', userLogin.addNewUser)


module.exports = router
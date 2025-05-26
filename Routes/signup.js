const express = require('express');

const userSignup = require('../Controllers/signup')

const router = express.Router();

router.post('/', userSignup.addNewUser)


module.exports = router
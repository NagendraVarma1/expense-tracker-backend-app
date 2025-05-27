const express = require('express');

const loginController = require('../Controllers/login')

const router = express.Router();

router.post('/', loginController.userLogin)

module.exports = router
const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    let loginDetails = {
        username,
        email,
        password
    }
    console.log(loginDetails)
})


module.exports = router
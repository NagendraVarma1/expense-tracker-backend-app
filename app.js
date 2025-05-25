const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const loginRoute = require('./Routes/login')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/login', loginRoute)

app.listen(5000)
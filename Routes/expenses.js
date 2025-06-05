const express = require('express');
const expenseController = require('../Controllers/expenses')
const userAuthentication  = require('../Middleware/auth')

const router = express.Router();

router.post('/add-expense',userAuthentication.authenticate, expenseController.addNewExpense)
router.get('/get-all-expenses',userAuthentication.authenticate, expenseController.getAllExpenses)
router.delete('/delete-expense/:id', expenseController.deleteExpense)


module.exports = router;
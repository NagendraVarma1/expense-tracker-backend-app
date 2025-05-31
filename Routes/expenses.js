const express = require('express');
const expenseController = require('../Controllers/expenses')
const router = express.Router();

router.post('/add-expense', expenseController.addNewExpense)
router.get('/get-all-expenses',expenseController.getAllExpenses)


module.exports = router;
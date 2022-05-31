const express = require('express');

const expenseController = require('./expense.controller');

const router = express.Router();

// api for create expense api for save
router.post('/api/v1/expenses', expenseController.createExpense);

//getAll api for get expense for view
router.get('/api/v1/expenses', expenseController.getAllExpenses);

//expenseupdated api for patch
router.patch('/api/v1/expenses/:expenseId', expenseController.updateExpense);

//expense delete api for remove
router.delete('/api/v1/expenses/:expenseId', expenseController.removeExpense);

module.exports = router;

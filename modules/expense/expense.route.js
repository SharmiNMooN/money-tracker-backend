const express = require("express");

const expenseController = require('./expense.controller');

const router = express.Router();

// api for create expense api for save

router.post('/api/v1/expenses', expenseController.createExpense);
module.exports = router;
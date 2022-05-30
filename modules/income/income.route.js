const express = require("express");
const incomeController = require("./income.controller");

const router  = express.Router();


//api for create income for save
router.post('/api/v1/incomes', incomeController.createIncome);

//api for get income
router.get('/api/v1/incomes', incomeController.getAllIncomes);
//api for upadetd income
router.patch('/api/v1/incomes/:incomeId', incomeController.updateIncome);





module.exports = router;

const express = require("express");
const incomeController = require("./income.controller");
const router  = express.Router();


//api for create income for save
router.post('/api/v1/incomes', incomeController.createIncome);





module.exports = router;

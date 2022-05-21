const express = require("express");
const categoryRouter = require("./category.controller");
const router = express.Router();

//api for create category
router.post('/api/v1/categories',categoryRouter.createCategory);

module.exports = router;
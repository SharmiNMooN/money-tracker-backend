const express = require("express");
const categoryController= require("./category.controller");
const router = express.Router();

//api for create category
router.post('/api/v1/categories',categoryController.createCategory);

// api for get all categories
router.get('/api/v1/categories', categoryController.getAllCategories);



module.exports = router;
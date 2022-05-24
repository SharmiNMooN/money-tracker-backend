const express = require("express");
const categoryController= require("./category.controller");
const router = express.Router();

//api for create category
router.post('/api/v1/categories',categoryController.createCategory);

// api for get all categories
router.get('/api/v1/categories', categoryController.getAllCategories);
 // api for update categories
 router.patch('/api/v1/categories/:categoryId', categoryController.updateCategory);
 // api for delete categories
 router.delete('/api/v1/categories/:categoryId', categoryController.removeCategory);



module.exports = router;
const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

//api for create user for save api
router.post('/api/v1/users', userController.createUser);

/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const { newProductAdd } = require('../controller/productRegisterController');

router.post('/add_pd', newProductAdd);

module.exports = router;

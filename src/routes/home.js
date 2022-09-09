const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/homeController');

router.get('/', homeController.home);

module.exports = router;
// addressRoutes.js
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Route for creating a new address
router.post('/', addressController.createAddress);

module.exports = router;

const express = require('express');
const { getAllIphones } = require('../controllers/productController');
const router = express.Router();

router.get('/iphones', getAllIphones );
module.exports = router;
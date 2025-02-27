const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/all/products', productsController.getAllProducts);
router.get('/:category/products/:productId', productsController.getProductById);

module.exports = router;

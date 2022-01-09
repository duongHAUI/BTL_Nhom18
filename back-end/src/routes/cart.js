const express = require('express')
const router = express.Router()

const cartController = require('../controllers/CartController');
const { authenticateLogin,userAuthenticationLogin } = require('../middleware/authenticateLogin');

// [POST] add cart 
router.post('/cart/add-to-cart',authenticateLogin , userAuthenticationLogin ,cartController.addCart)

// [GET] get cart

module.exports = router
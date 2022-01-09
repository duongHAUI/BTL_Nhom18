const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const shortid = require('shortid');


const productController = require('../controllers/ProductController');
const { authenticateLogin, adminAuthenticationLogin, } = require('../middleware/authenticateLogin');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(path.dirname(__dirname) , "uploads"))
//     },
//     filename: function (req, file, cb) {
//         cb(null, shortid.generate() + '-' + file.originalname)
//     }
// })

// const upload = multer({ storage }) , upload.array('productImgs')

// [POST] add category 
router.post('/product/create', authenticateLogin, productController.createProduct)

// [GET] get category
// router.get('/product',categoryController.getCategory)

module.exports = router
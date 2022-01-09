const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const shortid = require('shortid');
const categoryController = require('../controllers/CategoryController');
const { authenticateLogin, adminAuthenticationLogin, } = require('../middleware/authenticateLogin');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname) , "uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

// [POST] add category 
router.post('/category/create',authenticateLogin , adminAuthenticationLogin,upload.single("categoryImg") ,categoryController.createCategory)

// [GET] get category
router.get('/category',categoryController.getCategory)

module.exports = router